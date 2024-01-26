import React, { useState, useCallback } from 'react';

const Callback = () => {
    const [count, setCount] = useState(0);

    // Using useCallback to memoize the function
    const handleClick = useCallback(() => {
        // Your logic goes here
        // For example, you can increment the count
        setCount(count + 1);
    }, [count]); // Adding dependencies to the useCallback dependency array

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={handleClick}>Increment Count</button>
        </div>
    );
};

export default Callback;
