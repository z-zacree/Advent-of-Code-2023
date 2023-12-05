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
    const scratchCards = input
        .split('\n')
        .map((scratchCardInfo) => new ScratchCard(scratchCardInfo));

    const multiplierMap = scratchCards.reduce((map, card) => {
        map.set(card.id, 1);

        return map;
    }, new Map());

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
