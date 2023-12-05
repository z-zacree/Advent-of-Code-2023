class CubeGame {
    highestRoll: Record<string, number> = { red: 0, green: 0, blue: 0 };

    constructor(rawGameInfo: string) {
        const [gameInfo, rollInfo] = rawGameInfo.split(': ');

        const rawRolls = rollInfo.split('; ');

        rawRolls.forEach((rawRoll) => {
            const dieCounts = rawRoll.split(', ');

            dieCounts.forEach((dieCount) => {
                const [count, color] = dieCount.split(' ');

                if (+count > this.highestRoll[color]) {
                    this.highestRoll[color] = +count;
                }
            });
        });
    }

    get isValid() {
        return (
            this.highestRoll.red <= 12 &&
            this.highestRoll.green <= 13 &&
            this.highestRoll.blue <= 14
        );
    }
}

export default CubeGame;
