const capitalise = (word) => {
    return word[0].toUpperCase() + word.slice(1);
}

const getPower = (decimalPoint) => {
    return 10** decimalPoint;
}

const roundToDecimalPlace = (number, decimalPoint = 2) => {
    const round = getPower(decimalPoint);
    return Math.round(number * round) / round;
}

export {capitalise, roundToDecimalPlace};