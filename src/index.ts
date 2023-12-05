import type Puzzle from './types/Puzzle';
import readFile from './utils/readFile';

const args = process.argv.slice(2);
const dayToSolve = args[0];

const useExample = args.includes('--use-example');

if (!dayToSolve) {
    console.error('No day specified run with npm run dev {day}');
    process.exit(1);
}

console.log(`Solving Day #${dayToSolve}`);

const solveInput = async () => {
    let input = '';

    const puzzleName = dayToSolve;

    try {
        const puzzlePath = `src/days/${puzzleName}`;

        input = await readFile(`${puzzlePath}/input.txt`);
    } catch (error) {
        console.error(error);

        process.exit(1);
    }

    const { first, second }: Puzzle = await import(
        `./days/${puzzleName}/Puzzle`
    );

    console.log(first(input));
    console.log(second(input));
};

const solveExamples = async () => {
    let input1 = '';
    let input2 = '';

    const puzzleName = dayToSolve;

    try {
        const puzzlePath = `src/days/${puzzleName}`;

        input1 = await readFile(`${puzzlePath}/example-1.txt`);
        input2 = await readFile(`${puzzlePath}/example-2.txt`);
    } catch (error) {
        console.error(error);

        process.exit(1);
    }

    const { first, second }: Puzzle = await import(
        `./days/${puzzleName}/Puzzle`
    );

    console.log(first(input1));
    console.log(second(input2));
};

useExample ? solveExamples() : solveInput();
