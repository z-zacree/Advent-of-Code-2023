import SeedMap from '../../types/SeedMap';

const first = (input: string) => {
    let inputs = input.split('\n\n');

    const initSeeds = inputs[0]
        .split(': ')[1]
        .split(' ')
        .map((rawSeed) => +rawSeed);

    const fromMap = inputs.slice(1).reduce((map, rawSeedeedMap) => {
        const seedMap = new SeedMap(rawSeedeedMap);
        map.set(seedMap.from, seedMap);

        return map;
    }, new Map<string, SeedMap>());

    const recursivelyGetLocation = (num: number, from = 'seed'): number => {
        const seedMap = fromMap.get(from);

        const convertedVal = seedMap.convert(num);

        if (seedMap.to == 'location') return convertedVal;
        else return recursivelyGetLocation(convertedVal, seedMap.to);
    };

    return initSeeds.reduce((agg, seedNum) => {
        const location = recursivelyGetLocation(seedNum);

        if (agg == 0) return location;
        else if (location < agg) return location;

        return agg;
    }, 0);
};

const expectedFirstSolution = 35;

const second = (input: string) => {
    let inputs = input.split('\n\n');

    const initSeeds = inputs[0]
        .split(': ')[1]
        .split(' ')
        .map((rawSeed) => +rawSeed);

    const fromMap = inputs.slice(1).reduce((map, rawSeedeedMap) => {
        const seedMap = new SeedMap(rawSeedeedMap);
        map.set(seedMap.from, seedMap);

        return map;
    }, new Map<string, SeedMap>());

    const recursivelyGetLocation = (num: number, from = 'seed'): number => {
        const seedMap = fromMap.get(from);

        const convertedVal = seedMap.convert(num);

        if (seedMap.to == 'location') return convertedVal;
        else return recursivelyGetLocation(convertedVal, seedMap.to);
    };

    let min = Infinity;

    for (let i = 0; i < initSeeds.length; i += 2) {
        const from = initSeeds[i];
        const range = initSeeds[i + 1];

        for (let s = 0; s < range; s++) {
            const seedNum = from + s;

            const location = recursivelyGetLocation(seedNum);

            if (location < min) min = location;
        }
    }

    return min;
};

const expectedSecondSolution = 46;

export { expectedFirstSolution, expectedSecondSolution, first, second };
