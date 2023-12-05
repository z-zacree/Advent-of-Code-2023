const first = (input: string) => {
    const arr = input.split('\n');

    return [...arr].reduce((agg, word) => {
        let first: number | null = null;
        let last: number | null = null;

        word.split('').forEach((char) => {
            if (isNaN(Number(char))) return;

            if (first == null) first = Number(char) * 10;

            last = Number(char);
        });

        return agg + first + last;
    }, 0);
};

const second = (input: string) => {
    const arr = input.split('\n');

    return [...arr].reduce((agg, word) => {
        let firstIndex: number | null = null;
        let firstValue: number | null = null;

        let lastIndex: number | null = null;
        let lastValue: number | null = null;

        wordNums.forEach(({ value, label }) => {
            const idx = word.indexOf(label);
            const lastIdx = word.lastIndexOf(label);

            if (idx != -1) {
                if (firstIndex == null || idx < firstIndex) {
                    firstIndex = idx;
                    firstValue = value * 10;
                }
            }

            if (lastIdx != -1) {
                if (lastIndex == null || lastIdx > lastIndex) {
                    lastIndex = lastIdx;
                    lastValue = value;
                }
            }
        });

        return agg + firstValue + lastValue;
    }, 0);
};

const firstExampleSoln = 142;
const secondExampleSoln = 281;

export { first, firstExampleSoln, second, secondExampleSoln };

const wordNums = [
    { value: 1, label: 'one' },
    { value: 2, label: 'two' },
    { value: 3, label: 'three' },
    { value: 4, label: 'four' },
    { value: 5, label: 'five' },
    { value: 6, label: 'six' },
    { value: 7, label: 'seven' },
    { value: 8, label: 'eight' },
    { value: 9, label: 'nine' },
    { value: 1, label: '1' },
    { value: 2, label: '2' },
    { value: 3, label: '3' },
    { value: 4, label: '4' },
    { value: 5, label: '5' },
    { value: 6, label: '6' },
    { value: 7, label: '7' },
    { value: 8, label: '8' },
    { value: 9, label: '9' },
];
