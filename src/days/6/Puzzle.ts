const first = (input: string) => {
    let [rawTimes, rawDistance] = input.split('\n');

    const times = rawTimes.split(' ').filter(Boolean).slice(1);
    const distances = rawDistance.split(' ').filter(Boolean).slice(1);

    const timeDistMap = times.map((time, i) => ({
        time: +time,
        distanceToBeat: +distances[i],
    }));

    const minMax = timeDistMap.map(({ time, distanceToBeat }) => {
        let minSpeed = Infinity;
        let maxSpeed = -1;

        for (let speed = 0; speed < time; speed++) {
            let timeLeft = time - speed;
            let distanceTraveled = timeLeft * speed;

            if (distanceTraveled > distanceToBeat) {
                if (speed < minSpeed) minSpeed = speed;
                if (speed > maxSpeed) maxSpeed = speed;
            }
        }

        return maxSpeed - minSpeed + 1;
    });

    return minMax.reduce((agg, curVal) => agg * curVal, 1);
};

const second = (input: string) => {
    let [rawTime, rawDistance] = input.split('\n');

    const time = +rawTime.split(' ').filter(Boolean).slice(1).join('');
    const distanceToBeat = +rawDistance
        .split(' ')
        .filter(Boolean)
        .slice(1)
        .join('');

    let minSpeed = Infinity;
    let maxSpeed = -1;

    for (let speed = 0; speed < time; speed++) {
        let timeLeft = time - speed;
        let distanceTraveled = timeLeft * speed;

        if (distanceTraveled > distanceToBeat) {
            if (speed < minSpeed) minSpeed = speed;
            if (speed > maxSpeed) maxSpeed = speed;
        }
    }

    return maxSpeed - minSpeed + 1;
};

const firstExampleSoln = 288;
const secondExampleSoln = 71503;

export { first, firstExampleSoln, second, secondExampleSoln };
