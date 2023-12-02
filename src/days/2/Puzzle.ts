// 12 red cubes, 13 green cubes, and 14 blue
const pass_condition = new Map([
  ["red", 12],
  ["green", 13],
  ["blue", 14]
])

const first = (input: string) => {
  const arr = input.split("\r\n");

  const games = arr.reduce((agg, gameInfo) => {
    const splitGameInfo = gameInfo.split(": ")

    const colorMap = new Map();

    splitGameInfo[1].split("; ").forEach(v => {
      v.split(", ").forEach(die => {
        const [count, color] = die.split(" ");

        colorMap.set(color, (colorMap.get(color) | 0) > Number(count) ? colorMap.get(color) : Number(count));
      })
    })

    if (
      colorMap.get('red') <= pass_condition.get('red') &&
      colorMap.get('green') <= pass_condition.get('green') &&
      colorMap.get('blue') <= pass_condition.get('blue')
    ) {
      agg.push(Number(splitGameInfo[0].split(" ")[1]));
    }

    return agg;
  }, [])

  return games.reduce((agg, curVal) => agg + curVal, 0);
};

const expectedFirstSolution = 'solution 1';

const second = (input: string) => {
  const arr = input.split("\r\n");

  const games = arr.reduce((agg, gameInfo) => {
    // r, g, b
    const res = [0, 0, 0]

    gameInfo.split(": ")[1].split("; ").forEach(v => {
      v.split(", ").forEach(die => {
        const [count, color] = die.split(" ");

        if (color == "red" && res[0] < Number(count)) res[0] = Number(count);
        if (color == "green" && res[1] < Number(count)) res[1] = Number(count);
        if (color == "blue" && res[2] < Number(count)) res[2] = Number(count);
      })
    })

    agg.push(res.reduce((agg, curVal) => agg * curVal, 1))

    return agg;
  }, [])
  
  return games.reduce((agg, curVal) => agg + curVal, 0);
};

const expectedSecondSolution = 'solution 2';

export { expectedFirstSolution, expectedSecondSolution, first, second };

