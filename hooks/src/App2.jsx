import { useState } from "react"

function App() {
  const [counter, setCounter] = useState(22);

  const [hobbies, setHobbies] = useState(["Sports", "Coding"]);


  function add() {
    if (counter >= 20) {
      return;
    }
    setCounter(counter + 1);
  }
  function sub() {
    if (counter <= 0) {
      return;
    }
    setCounter(counter - 1);
  }

  return (
    <>
      <h1 className="text-5xl text-center font-extrabold">Up down counter</h1>
      <p className="text-xl font-bold text-center my-5">Counter : {counter}</p>
      <p className="text-xl font-bold text-center my-5">You are a: {counter > 15 ? "Pro counter" : "Noob counter"}</p>
      {counter > 15 && <p className="text-xl font-bold text-center my-5">PROPROPRO</p>}
      {counter > 15 || <p className="text-xl font-bold text-center my-5">NOOBNOOBNOOB</p>}

      {
        hobbies.map((hobby, index) =>
        (
          <li className="text-xl font-bold text-center my-2" key={index}>{hobby}</li>
        )
        )
      }
      <div className="flex justify-center gap-5 text-xl font-bold">
        <button onClick={add} className='border-2 rounded-2xl bg-blue-800 cursor-pointer text-white hover:bg-blue-300 hover:text-black p-8'>Up: {counter}</button>
        <button onClick={sub} className='border-2 rounded-2xl bg-blue-800 cursor-pointer text-white hover:bg-blue-300 hover:text-black p-8'>Down: {counter}</button>
      </div>
    </>
  )
}

export default App
