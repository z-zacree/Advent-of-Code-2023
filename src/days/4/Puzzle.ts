import ScratchCard from '../../types/ScratchCard';

const first = (input: string) => {
    const scratchCards = input
        .split('\n')
        .map((scratchCardInfo) => new ScratchCard(scratchCardInfo));

    return scratchCards
        .map((c) => c.points)
        .reduce((agg, curVal) => agg + curVal, 0);
};

const second = (input: string) => {
    const multiplierMap = new Map();

    const scratchCards = input.split('\n').map((scratchCardInfo, i) => {
        const scratchCard = new ScratchCard(scratchCardInfo);

        multiplierMap.set(i + 1, 1);

        return scratchCard;
    });

    scratchCards.forEach(({ id, otherCards }) => {
        otherCards.forEach((cardId) => {
            multiplierMap.set(
                cardId,
                multiplierMap.get(cardId) + multiplierMap.get(id)
            );
        });
    });

    return Array.from(multiplierMap.values()).reduce(
        (agg, curVal) => agg + curVal,
        0
    );
};

const firstExampleSoln = 13;
const secondExampleSoln = 30;

export { first, firstExampleSoln, second, secondExampleSoln };
