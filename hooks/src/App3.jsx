import { useEffect } from "react";
import { useState } from "react"

const App3 = () => {
    const [count, setCount] = useState(0);
    const [age, setAge] = useState(18);

    useEffect(() => {
        console.log("No dependency array");
    })

    useEffect(() => {
        console.log("Empty dependency array");
    }, []);

    useEffect(() => {
        console.log("Fixed dependency array");
    }, [count]);
  return (
    <div>
      <h1 className="text-5xl">count : {count}</h1>
      <button className="bg-blue-500 rounded-xl p-2 m-2 cursor-pointer text-white" onClick={() => setCount(count + 1)}>ADD 1</button>
      <button className="bg-red-500 rounded-xl p-2 m-2 cursor-pointer text-white" onClick={() => setCount(count - 1)}>SUB 1</button>
      <button className="bg-green-500 rounded-xl p-2 m-2 cursor-pointer text-white" onClick={() => setCount(0)}>RESET</button>
      <h1 className="text-5xl">age : {age}</h1>
      <button className="bg-blue-500 rounded-xl p-2 m-2 cursor-pointer text-white" onClick={() => setAge(age + 1)}>AGE +1</button>
      <button className="bg-red-500 rounded-xl p-2 m-2 cursor-pointer text-white" onClick={() => setAge(age - 1)}>AGE -1</button>
    </div>
  )
}

export default App3
