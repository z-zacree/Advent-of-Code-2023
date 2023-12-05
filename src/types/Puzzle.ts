type Puzzle = {
    first: (input: string) => string | number;
    firstExampleSoln: string | number;
    second: (input: string) => string | number;
    secondExampleSoln: string | number;
};

export default Puzzle;
