class ScratchCard {
    id: number;

    nums: number[] = [];
    winningNums: number[] = [];

    constructor(scratchCardInfo: string) {
        const [cardInfo, gameInfo] = scratchCardInfo.split(':');

        this.id = +cardInfo.split(' ').filter(Boolean)[1];

        const [winningInfo, numInfo] = gameInfo.split('|');

        winningInfo
            .split(' ')
            .filter(Boolean)
            .forEach((winningNum) => {
                this.winningNums.push(+winningNum);
            });

        numInfo
            .split(' ')
            .filter(Boolean)
            .forEach((num) => {
                this.nums.push(+num);
            });
    }

    get points() {
        let points = 0;

        for (let i = 0; i < this.nums.length; i++) {
            const num = this.nums[i];

            if (this.winningNums.includes(num)) {
                if (points == 0) points++;
                else points *= 2;
            }
        }

        return points;
    }

    get flatPoints() {
        let points = 0;

        for (let i = 0; i < this.nums.length; i++) {
            const num = this.nums[i];

            if (this.winningNums.includes(num)) points++;
        }

        return points;
    }

    get otherCards() {
        let length = this.flatPoints;

        return Array.from({ length }, (_, i) => this.id + i + 1);
    }
}

export default ScratchCard;
