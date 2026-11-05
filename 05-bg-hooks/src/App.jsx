import React, { useState } from "react"

function App() {
  let [color, setColor] = useState("black");
  return (
    <>
      <div className="w-full h-screen duration-200" style={{ background: color }} >
        <h1 className="flex justify-center bg-green-500 rounded-full">Current Background color : {color}</h1>
        <div className="fixed flex flex-wrap justify-center gap-3 shadow-md bg-white bottom-12 inset-x-0 px-2 py-2 rounded-2xl">
          <button onClick={()=>setColor('green')}
           className="outline-none px-4 py 1 rounded-full text-white shadow-lg" style={{ background: "green" }}>
            Green
          </button>
          <button onClick={()=>setColor('red')}
           className="outline-none px-4 py 1 rounded-full text-white shadow-lg" style={{ background: "red" }}>
            Red
          </button>          
          <button onClick={()=>setColor('yellow')}
           className="outline-none px-4 py 1 rounded-full text-white shadow-lg" style={{ background: "yellow" }}>
            Yellow
          </button>          
          <button onClick={()=>setColor('pink')}
           className="outline-none px-4 py 1 rounded-full text-white shadow-lg" style={{ background: "pink" }}>
            Pink
          </button>          
          <button onClick={()=>setColor('blue')}
           className="outline-none px-4 py 1 rounded-full text-white shadow-lg" style={{ background: "blue" }}>
            Blue
          </button>          
          <button onClick={()=> setTimeout(() => {
            setColor('purple')
          }, 3000)}
           className="outline-none px-4 py 1 rounded-full text-white shadow-lg" 
           style={{ background: "purple" }}
           >
            purple "timmer-3sec"
          </button>          
        </div>
      </div>
    </>
  )
}

export default App
