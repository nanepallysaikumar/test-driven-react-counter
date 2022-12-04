
const IncrementCounter = ({ setCountValue }) => {
    const incrementCounterEvent = () => {
        setCountValue((prevCountValue) => prevCountValue + 1)
    }
    return (
        <button onClick={incrementCounterEvent}>Add</button>
    )
}

export { IncrementCounter }