

const decrementValueIfGreaterThanZeroElseReturnZero = (countValue) => {
    const counterResult = countValue - 1;
    if (counterResult < 0) {
        return 0;
    } else {
        return counterResult;
    }
}

export { decrementValueIfGreaterThanZeroElseReturnZero }