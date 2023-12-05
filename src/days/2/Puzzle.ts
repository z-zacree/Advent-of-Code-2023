import CubeGame from '../../types/CubeGame';

const first = (input: string) => {
    const gameInfoList = input.split('\n');

    let sum = 0;

    for (let i = 0; i < gameInfoList.length; i++) {
        const cubeGame = new CubeGame(gameInfoList[i]);

        if (cubeGame.isValid) sum += i + 1;
    }

    return sum;
};

const expectedFirstSolution = 8;

const second = (input: string) => {
    const gameInfoList = input.split('\n');

    let sum = 0;

    for (let i = 0; i < gameInfoList.length; i++) {
        const { highestRoll } = new CubeGame(gameInfoList[i]);

        sum += highestRoll.red * highestRoll.green * highestRoll.blue;
    }

    return sum;
};

const expectedSecondSolution = 2286;

export { expectedFirstSolution, expectedSecondSolution, first, second };
