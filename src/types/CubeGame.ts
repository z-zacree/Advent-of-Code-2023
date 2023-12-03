class CubeGame {
  highestRoll: {red: number, green: number, blue: number};

  constructor(gameInfo: string) {
    this.highestRoll = gameInfo.split(": ")[1].split("; ").reduce((collectHighest, rawRoll) => {
      rawRoll.split(", ").forEach(roll => {
        const [count, color] = roll.split(" ") as [number, "red" | "green" | "blue"];

        if (collectHighest[color] < count) collectHighest[color] = Number(count);
      })

      return collectHighest
    }, { red: 0, green: 0, blue: 0 })
  }

  get isValid() {
    return this.highestRoll.red <= 12 && this.highestRoll.green <= 13 && this.highestRoll.blue <= 14
  }
}

export default CubeGame;