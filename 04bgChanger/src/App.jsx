import { useState } from "react"

function App() {
  const [color, setColor] = useState("white")

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-4 py-2 rounded-xl m-1">
          <button className="outline-none px-4" onClick={()=>setColor("red")}>Red</button>
        </div>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-4 py-2 rounded-xl m-1">
          <button className="outline-none px-4" onClick={()=>setColor("blue")}>Blue</button>
        </div>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-4 py-2 rounded-xl m-1">
          <button className="outline-none px-4" onClick={()=>setColor("green")}>Green</button>
        </div>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-4 py-2 rounded-xl m-1">
          <button className="outline-none px-4" onClick={()=>setColor("yellow")}>Yellow</button>
        </div>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-4 py-2 rounded-xl m-1">
          <button className="outline-none px-4" onClick={()=>setColor("orange")}>Orange</button>
        </div>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-4 py-2 rounded-xl m-1">
          <button className="outline-none px-4" onClick={()=>setColor("white")}>White</button>
        </div>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-4 py-2 rounded-xl m-1">
          <button className="outline-none px-4" onClick={()=>setColor("black")}>Black</button>
        </div>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-4 py-2 rounded-xl m-1">
          <button className="outline-none px-4" onClick={()=>setColor("purple")}>Purple</button>
        </div>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-4 py-2 rounded-xl m-1">
          <button className="outline-none px-4" onClick={()=>setColor("olive")}>Olive</button>
        </div>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-4 py-2 rounded-xl m-1">
          <button className="outline-none px-4" onClick={()=>setColor("pink")}>Pink</button>
        </div>
      </div>
    </div>
  )
}

export default App
