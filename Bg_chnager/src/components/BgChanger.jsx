import { useState } from "react"

export const BgChanger = () => {
  const [color , setColor] =useState("bg-slate-400");

  const colorRed =()=>{
    setColor('bg-red-500');
  }
  
  const colorBlue =()=>{
    setColor('bg-blue-500');
  }
  const colorGreen =()=>{
    setColor('bg-green-500');
  }
  const colorYellow =()=>{
    setColor('bg-yellow-300');
  }
  const colorPink =()=>{
    setColor('bg-pink-300');
  }
  const colorPurple =()=>{
    setColor('bg-purple-300');
  }
  const colorWhite =()=>{
    setColor('bg-white');
  }
  const colorBlack =()=>{
    setColor('bg-black');
  }

  return (
    <>
    <div className={`${color} h-screen w-full`}>
    <div className="bg-slate-600 px-4 py-3 top-3/4 left-1/4 absolute rounded-xl">
    <div className="flex justify-center items-center gap-3 ">
      <button className="px-3 py-1 rounded-lg bg-red-600" onClick={colorRed}>RED</button>
      <button className="px-3 py-1 rounded-lg bg-blue-600" onClick={colorBlue}>BLUE</button>
      <button className="px-3 py-1 rounded-lg bg-green-600" onClick={colorGreen}>GREEN</button>
      <button className="px-3 py-1 rounded-lg bg-yellow-600" onClick={colorYellow}>YELLOW</button>
      <button className="px-3 py-1 rounded-lg bg-pink-600" onClick={colorPink}>PINK</button>
      <button className="px-3 py-1 rounded-lg bg-purple-600" onClick={colorPurple}>PURPLE</button>
      <button className="px-3 py-1 rounded-lg bg-white" onClick={colorWhite}>WHITE</button>
      <button className="px-3 py-1 rounded-lg bg-black text-white" onClick={colorBlack}>BLACK</button>
    </div>
    </div>
    </div>
    </>
  )
}
