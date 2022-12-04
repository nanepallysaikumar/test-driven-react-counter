import { useState } from "react";
import { IncrementCounter } from "./IncrementCounter";
import { DecrementCounter } from "./DecrementCounter";

const DEFAULT_COUNT_VALUE = 0;

const AwsomeCounter = ({ initialCountValue }) => {
    const [countValue, setCountValue] = useState(initialCountValue ?? DEFAULT_COUNT_VALUE);

    return (
        <div>
            <h1>Awesome Counter</h1>
            <IncrementCounter setCountValue={setCountValue} />
            <span>{countValue}</span>
            <DecrementCounter setCountValue={setCountValue} />
        </div>
    )
}

export { AwsomeCounter };