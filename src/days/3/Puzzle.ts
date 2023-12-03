const first = (input: string) => {
    const rows = input.split('\n');

    let parts: number[] = [];

    const getNum = (y: number, x: number) => {
        const part = rows[y]?.[x];

        if (isNaN(+part)) return;

        let num = 0;

        while (!isNaN(+rows[y][x - 1])) {
            x -= 1;
        }

        num = +rows[y]?.[x];

        while (!isNaN(+rows[y][x + 1])) {
            num *= 10;
            num += +rows[y][x + 1];

            x += 1;
        }

        return num;
    };

    for (let y = 0; y < rows.length; y++) {
        const row = rows[y];

        for (let x = 0; x < row.length; x++) {
            const char = row[x];

            if (!isNaN(+char) || char == '.') continue;

            const topSet = new Set<number>();
            const midSet = new Set<number>();
            const bottomSet = new Set<number>();

            // top left
            topSet.add(getNum(y - 1, x - 1));

            // top middle
            topSet.add(getNum(y - 1, x));

            // top right
            topSet.add(getNum(y - 1, x + 1));

            // left
            midSet.add(getNum(y, x - 1));

            // right
            midSet.add(getNum(y, x + 1));

            // bottom left
            bottomSet.add(getNum(y + 1, x - 1));

            // bottom middle
            bottomSet.add(getNum(y + 1, x));

            // bottom right
            bottomSet.add(getNum(y + 1, x + 1));

            topSet.delete(undefined);
            midSet.delete(undefined);
            bottomSet.delete(undefined);

            parts = [
                ...parts,
                ...Array.from(topSet),
                ...Array.from(midSet),
                ...Array.from(bottomSet),
            ];
        }
    }

    return parts.reduce((agg, curVal) => agg + curVal, 0);
};

const expectedFirstSolution = 532445;

const second = (input: string) => {
    const rows = input.split('\n');

    let gearRatios: number[] = [];

    const getNum = (y: number, x: number) => {
        const part = rows[y]?.[x];

        if (isNaN(+part)) return;

        let num = 0;

        while (!isNaN(+rows[y][x - 1])) {
            x -= 1;
        }

        num = +rows[y]?.[x];

        while (!isNaN(+rows[y][x + 1])) {
            num *= 10;
            num += +rows[y][x + 1];

            x += 1;
        }

        return num;
    };

    for (let y = 0; y < rows.length; y++) {
        const row = rows[y];

        for (let x = 0; x < row.length; x++) {
            const char = row[x];

            if (!isNaN(+char) || char == '.') continue;

            let parts: number[] = [];

            const topSet = new Set<number>();
            const midSet = new Set<number>();
            const bottomSet = new Set<number>();

            // top left
            topSet.add(getNum(y - 1, x - 1));

            // top middle
            topSet.add(getNum(y - 1, x));

            // top right
            topSet.add(getNum(y - 1, x + 1));

            // left
            midSet.add(getNum(y, x - 1));

            // right
            midSet.add(getNum(y, x + 1));

            // bottom left
            bottomSet.add(getNum(y + 1, x - 1));

            // bottom middle
            bottomSet.add(getNum(y + 1, x));

            // bottom right
            bottomSet.add(getNum(y + 1, x + 1));

            topSet.delete(undefined);
            midSet.delete(undefined);
            bottomSet.delete(undefined);

            parts = [
                ...Array.from(topSet),
                ...Array.from(midSet),
                ...Array.from(bottomSet),
            ];

            if (parts.length == 2) {
                gearRatios = [...gearRatios, parts[0] * parts[1]];
            }
        }
    }

    return gearRatios.reduce((agg, curVal) => agg + curVal, 0);
};

const expectedSecondSolution = 79842967;

export { expectedFirstSolution, expectedSecondSolution, first, second };
