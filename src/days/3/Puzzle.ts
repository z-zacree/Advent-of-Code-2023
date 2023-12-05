const first = (input: string) => {
    const rows = input.split('\n');

    let parts: number[] = [];
    const getNum = getNumHelper(rows);

    for (let y = 0; y < rows.length; y++) {
        const row = rows[y];

        for (let x = 0; x < row.length; x++) {
            const char = row[x];

            if (!isNaN(+char) || char == '.') continue;

            const map = new Map();
            const check = checkHelper(y, x);

            check.forEach((check) => {
                const { startIndex, num } = getNum(...check);

                if (!isNaN(num)) map.set(startIndex, num);
            });

            parts = [...parts, ...Array.from(map.values())];
        }
    }

    return parts.reduce((agg, curVal) => agg + curVal, 0);
};

const second = (input: string) => {
    const rows = input.split('\n');

    let gearRatios: number[] = [];
    const getNum = getNumHelper(rows);

    for (let y = 0; y < rows.length; y++) {
        const row = rows[y];

        for (let x = 0; x < row.length; x++) {
            const char = row[x];

            if (!isNaN(+char) || char == '.') continue;

            const map = new Map();
            let parts: number[] = [];
            const check = checkHelper(y, x);

            check.forEach((check) => {
                const { startIndex, num } = getNum(...check);

                if (!isNaN(num)) map.set(startIndex, num);
            });

            parts = Array.from(map.values());

            if (parts.length == 2) {
                gearRatios = [...gearRatios, parts[0] * parts[1]];
            }
        }
    }

    return gearRatios.reduce((agg, curVal) => agg + curVal, 0);
};

const checkHelper = (y: number, x: number): [number, number][] => [
    [y - 1, x - 1],
    [y - 1, x],
    [y - 1, x + 1],
    [y, x - 1],
    [y, x + 1],
    [y + 1, x - 1],
    [y + 1, x],
    [y + 1, x + 1],
];

const getNumHelper = (rows: string[]) => (y: number, x: number) => {
    let startIndex = -1;
    const part = rows[y]?.[x];

    if (isNaN(+part)) return { startIndex, num: NaN };

    let num = 0;

    while (!isNaN(+rows[y][x - 1])) {
        x -= 1;
    }

    startIndex = x;

    num = +rows[y]?.[x];

    while (!isNaN(+rows[y][x + 1])) {
        num *= 10;
        num += +rows[y][x + 1];

        x += 1;
    }

    return { startIndex, num };
};

const firstExampleSoln = 4361;
const secondExampleSoln = 467835;

export { first, firstExampleSoln, second, secondExampleSoln };
