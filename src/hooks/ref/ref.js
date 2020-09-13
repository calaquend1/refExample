import React, {useRef, useEffect, useState} from 'react'

export const Ref = () => {
    const [intervalSecond, setSecond] = useState(0)
    const textInput = useRef();
    const focusTextInput = () => textInput.current.focus();
    const counter = useRef(0);
    useEffect(() => {
        counter.current = counter.current + 1;
      }); 
    return (
        <div>
            <h1>{`The component has been re-rendered ${counter.current} times`}</h1>
            <Timer setSecond={setSecond} intervalSecond={intervalSecond} />
            <input type="text" ref={textInput} />
            <button onClick={focusTextInput}>Focus the text input</button>
            <div>{intervalSecond}</div>
        </div>
    )
}

const Timer = (props = {intervalSecond: 0}) => {
    const intervalRef = useRef();
    const interval = () => {
        props.setSecond(+(+(props.intervalSecond+0.1).toFixed(2)))
    }
    const intervalFunc = () => {
        const id = setInterval(interval, 100);
        intervalRef.current = id;
    }
    useEffect(() => {
        intervalFunc()
        return () => handleCancel();
    });
  
    const handleCancel = () => clearInterval(intervalRef.current);
    const handleStart = () => {
        handleCancel()
        intervalFunc()
    };

    return (
      <>
        <button onClick={handleCancel}>stop interval</button>
        <button onClick={handleStart}>start interval</button>
      </>
    );
  }