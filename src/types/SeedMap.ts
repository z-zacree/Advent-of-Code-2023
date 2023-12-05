export default class SeedMap {
    from: string;
    to: string;

    conversions: { from: number; to: number; diff: number }[];

    constructor(rawMap: string) {
        const [fromTo, conversionInfo] = rawMap.split(':\n');

        const [from, to] = fromTo.split(' map')[0].split('-to-');

        this.from = from;
        this.to = to;

        this.conversions = conversionInfo.split('\n').map((conversions) => {
            const [destinationStart, sourceStart, range] =
                conversions.split(' ');

            return {
                from: +sourceStart,
                to: +sourceStart + +range,
                diff: +destinationStart - +sourceStart,
            };
        });
    }

    convert = (num: number) => {
        for (let i = 0; i < this.conversions.length; i++) {
            const { from, to, diff } = this.conversions[i];

            if (num >= from && num < to) return num + diff;
        }

        return num;
    };
}
