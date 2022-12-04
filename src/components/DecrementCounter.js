import { decrementValueIfGreaterThanZeroElseReturnZero } from '../utils/CounterManager';


const DecrementCounter = ({ setCountValue }) => {
    const decrementCounterEvent = () => {
        setCountValue((prevCountValue) => decrementValueIfGreaterThanZeroElseReturnZero(prevCountValue));
    }
    return (
        <button onClick={decrementCounterEvent}>Remove</button>
    )
}

export { DecrementCounter }