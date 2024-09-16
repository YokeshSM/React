import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="h-screen w-screen flex justify-center items-center bg-sky-500">
     <div className="h-3/6 w-3/6 flex justify-center items-center bg-white rounded-md shadow-2x1 ">
     <form action="" className="flex flex-col justify-center items-center gap-4 rounded-md">
      <input className=" bg-slate-200 "></input>
      <input className=" bg-slate-200 " ></input>
      <input className=" bg-slate-200 "></input>
      <input className=" bg-slate-200 "></input>
     </form>
     </div>
     </div>
    </>
  )
}

export default App
