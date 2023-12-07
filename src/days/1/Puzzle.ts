/**
 * Solved this part using a two-pointer method.
 *
 * 1. Split the input into an array of words
 * 2. Iterate through every word
 * 3. While the first number is not set, we find the first "digit" from the start
 * 4. Check if the character is a number
 * 5. Set the first number, multiplied by 10
 * 6. While the last number is not set, we find the last "digit" from the end
 * 7. Set the last number
 * 8. Since first number is already multiplied by 10, we can simply add the sum of the first and last numbers
 */
const first = (input: string) => {
    // 1
    const words = input.split('\n');

    let sum = 0;

    // 2
    for (const word of words) {
        let firstIndex = -1;
        let first: number | null = null;

        let lastIndex = word.length;
        let last: number | null = null;

        // 3
        while (first == null && firstIndex++ <= lastIndex) {
            const char = word[firstIndex];

            // 4
            if (!isNaN(+char)) {
                // 5
                first = Number(char) * 10;

                break;
            }
        }

        // 6
        while (last == null && lastIndex-- >= firstIndex - 1) {
            const char = word[lastIndex];

            // 4
            if (!isNaN(+char)) {
                // 7
                last = Number(char);

                break;
            }
        }

        // 8
        sum += (first ?? 0) + (last ?? 0);
    }

    return sum;
};

/**
 * Solved this part using a two-pointer method.
 *
 * 1. Follow steps 1 and 2 in part 1
 * 2. Iterate through every valid "digit"
 * 3. Retrieve the first index of the digit
 * 4. Check if the index is valid
 *    (since we're comparing if the index is < the existing index, we need to check against -1)
 *
 * 5. Retrieve the last index of the digit only after the first index has been found
 * 6. Check if the index is valid
 * 7. Since first number is already multiplied by 10, we can simply add the sum of the first and last numbers.
 */
const second = (input: string) => {
    // 1
    const words = input.split('\n');

    let sum = 0;

    for (const word of words) {
        let firstIndex = Infinity;
        let first: number | null = null;

        let lastIndex = -1;
        let last: number | null = null;

        // 2
        digitMap.forEach(([label, value]) => {
            // 3
            const idx = word.indexOf(label);

            // 4
            if (idx > -1) {
                if (firstIndex == null || idx < firstIndex) {
                    firstIndex = idx;
                    first = value * 10;
                }

                // 5
                const lastIdx = word.lastIndexOf(label);

                // 6
                if (lastIndex == null || lastIdx > lastIndex) {
                    lastIndex = lastIdx;
                    last = value;
                }
            }
        });

        sum += (first ?? 0) + (last ?? 0);
    }

    return sum;
};

const firstExampleSoln = 142;
const secondExampleSoln = 281;

export { first, firstExampleSoln, second, secondExampleSoln };

const digitMap = Object.entries({
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    '1': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
});
