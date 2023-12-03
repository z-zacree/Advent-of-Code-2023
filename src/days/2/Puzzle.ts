import CubeGame from '../../types/CubeGame';

const first = (input: string) => {
    const gameInfoList = input.split('\r\n');

    let sum = 0;

    for (let i = 0; i < gameInfoList.length; i++) {
        const { isValid } = new CubeGame(gameInfoList[i]);

        if (isValid) sum += i + 1;
    }

    return sum;
};

const expectedFirstSolution = 2283;

const second = (input: string) => {
    const gameInfoList = input.split('\r\n');

    let sum = 0;

    for (let i = 0; i < gameInfoList.length; i++) {
        const { highestRoll } = new CubeGame(gameInfoList[i]);

        sum += highestRoll.red * highestRoll.green * highestRoll.blue;
    }

    return sum;
};

const expectedSecondSolution = 78669;

export { expectedFirstSolution, expectedSecondSolution, first, second };

