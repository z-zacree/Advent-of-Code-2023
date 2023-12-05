import { readdirSync } from 'fs';
import { describe, expect, it } from 'vitest';
import Puzzle from './types/Puzzle';
import readFile from './utils/readFile';

describe('AoC test runner', () => {
    const dirs = readdirSync('./src/days', { withFileTypes: true })
        .filter((dirent) => dirent.isDirectory())
        .map((dirent) => dirent.name);

    for (const day of dirs) {
        it(`Tests day ${day}`, async () => {
            let input1 = '';
            let input2 = '';

            const puzzleName = day;

            try {
                const puzzlePath = `src/days/${puzzleName}`;

                input1 = await readFile(`${puzzlePath}/example-1.txt`);
                input2 = await readFile(`${puzzlePath}/example-2.txt`);
            } catch (error) {
                console.error(error);
                process.exit(1);
            }
            const {
                first,
                firstExampleSoln,
                second,
                secondExampleSoln,
            }: Puzzle = await import(`./days/${puzzleName}/Puzzle`);

            expect(first(input1)).toBe(firstExampleSoln);
            expect(second(input2)).toBe(secondExampleSoln);
        });
    }
});
