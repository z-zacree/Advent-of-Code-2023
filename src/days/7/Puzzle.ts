type CardGame = { cards: (string | number)[]; bet: number };

const p1ValMap: Record<string, number> = {
    A: 14,
    K: 13,
    Q: 12,
    J: 11,
    T: 10,
};

const p2ValMap: Record<string, number> = {
    A: 14,
    K: 13,
    Q: 12,
    T: 10,
    J: -1,
};

const first = (input: string) => {
    const valueMap = new Map<string, CardGame[]>(
        Object.entries({ 0: [], 1: [], 2: [], 3: [], 4: [], 5: [], 6: [] })
    );

    input.split('\n').forEach((rawCardInfo) => {
        const [rawCards, bet] = rawCardInfo.split(' ');
        let value = 0;

        let cards = rawCards
            .split('')
            .map((card) => (isNaN(+card) ? card : +card));

        let countMap = new Map();

        cards.forEach((card) =>
            countMap.set(card, (countMap.get(card) | 0) + 1)
        );

        let values = Array.from(countMap.values());

        if (values.includes(5)) value = 6;
        else if (values.includes(4)) value = 5;
        else if (values.includes(3) && values.includes(2)) value = 4;
        else if (values.includes(3)) value = 3;
        else if (values.includes(2)) {
            if (values.filter((val) => val == 2).length > 1) value = 2;
            else value = 1;
        }

        valueMap.get(String(value)).push({ cards, bet: +bet });
    });

    const sortedArr = Array.from(valueMap.values()).reduce((agg, games) => {
        games.sort((aGame, bGame) => {
            for (let i = 0; i < aGame.cards.length; i++) {
                const aCard = aGame.cards[i];
                const bCard = bGame.cards[i];

                if (aCard == bCard) continue;

                let aValue = isNaN(+aCard) ? p1ValMap[aCard] : +aCard;
                let bValue = isNaN(+bCard) ? p1ValMap[bCard] : +bCard;

                return aValue - bValue;
            }

            return 0;
        });

        agg.push(...games);

        return agg;
    }, []);

    return sortedArr.reduce((agg, game, i) => agg + game.bet * (i + 1), 0);
};

const second = (input: string) => {
    const valueMap = new Map<string, CardGame[]>(
        Object.entries({ 0: [], 1: [], 2: [], 3: [], 4: [], 5: [], 6: [] })
    );

    input.split('\n').forEach((rawCardInfo) => {
        const [rawCards, bet] = rawCardInfo.split(' ');
        let value = 0;

        let cards = rawCards
            .split('')
            .map((card) => (isNaN(+card) ? card : +card));

        let countMap = new Map();

        cards.forEach((card) =>
            countMap.set(card, (countMap.get(card) | 0) + 1)
        );

        let values = Array.from(countMap.values());

        let Js = cards.filter((card) => card == 'J');

        if (values.includes(5)) {
            // 5 of a kind;
            value = 6;
        } else if (values.includes(4)) {
            // 4, 1
            if (Js.length > 0) value = 6;
            else value = 5;
        } else if (values.includes(3) && values.includes(2)) {
            // 3, 2
            if (Js.length == 3 || Js.length == 2) value = 6;
            else if (Js.length == 1) value = 5;
            else value = 4;
        } else if (values.includes(3)) {
            // 3, 1, 1
            if (Js.length > 0) value = 5;
            else value = 3;
        } else if (values.includes(2)) {
            // 2, 1, 1, 1
            // 2, 1, 2
            if (countMap.size == 3) {
                if (Js.length == 1) value = 4;
                else if (Js.length == 2) value = 5;
                else value = 2;
            } else {
                if (Js.length > 0) value = 3;
                else value = 1;
            }
        } else {
            // 1, 1, 1, 1, 1
            if (Js.length > 0) value = 1;
        }

        valueMap.get(String(value)).push({ cards, bet: +bet });
    });

    const sortedArr = Array.from(valueMap.values()).reduce((agg, games) => {
        games.sort((aGame, bGame) => {
            for (let i = 0; i < aGame.cards.length; i++) {
                const aCard = aGame.cards[i];
                const bCard = bGame.cards[i];

                if (aCard == bCard) continue;

                let aValue = isNaN(+aCard) ? p2ValMap[aCard] : +aCard;
                let bValue = isNaN(+bCard) ? p2ValMap[bCard] : +bCard;

                return aValue - bValue;
            }

            return 0;
        });

        agg.push(...games);

        return agg;
    }, []);

    return sortedArr.reduce((agg, game, i) => agg + game.bet * (i + 1), 0);
};

const firstExampleSoln = 6440;
const secondExampleSoln = 246894760;

export { first, firstExampleSoln, second, secondExampleSoln };
