// import './App.css'
import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  // const [count, setCount] = useState(0)
  
  const [length, setLength] = useState(10)

  const [isNumberAllowed, setNumberAllowed] = useState(false)
  const [isCharAllowed, setCharAllowed] = useState(false)
  //useCallBack
  const [password, setPassword] = useState("")
  //useRef
  const passReferance = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = 'qwertyuiopasdfghjklzxcvbnm'
    if (isNumberAllowed) str += "0123456789"
    if (isCharAllowed) str += "!@#$%^&*"

    for (let i = 1; i < length; i++) {
      let charIndex = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(charIndex)
    }

    setPassword(pass)

  }, [length, isCharAllowed, isNumberAllowed])

  //pwd
 const copyPassToOurClipboard = useCallback(()=>{
  
  passReferance.current?.select() //to see which pass is selected
  // passReferance.current?.setSelectionRange(0,12)
  window.navigator.clipboard.writeText(password)
  },[password])
useEffect(()=>{
  passwordGenerator()
},[length,isCharAllowed,isNumberAllowed,passwordGenerator])
  return (
    <>
      <main className='min-h-screen bg-slate-950 px-4 py-12 sm:py-20'>
      <div className='mx-auto w-full max-w-xl rounded-2xl border border-slate-600/60 bg-slate-800 p-5 text-orange-400 shadow-2xl shadow-black/30 sm:p-7'>
        <p className='mb-1 text-center text-xs font-semibold uppercase tracking-[0.24em] text-orange-300'>Secure tool</p>
        <h1 className="mb-6 text-center text-2xl font-bold text-white sm:text-3xl">Password Generator</h1>
        <div className='flex overflow-hidden rounded-xl border border-slate-600 bg-white shadow-inner'>
          <input
            ref={passReferance}
            type="text"
            value={password}
            className='w-full min-w-0 bg-white px-4 py-3 font-mono text-sm text-slate-800 outline-none'
            placeholder='Your password'
            readOnly
          />
          <button
          className='shrink-0 bg-orange-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-inset'
          onClick={copyPassToOurClipboard} 
            >Copy</button>
        </div>
        <div className='mt-6 grid gap-5 text-sm text-slate-200'>
          <div>
            <div className='mb-2 flex items-center justify-between'>
              <label htmlFor='lengthInput' className='font-medium'>Password length</label>
              <span className='rounded-md bg-slate-700 px-2 py-1 font-mono text-orange-300'>{length}</span>
            </div>
            <input type="range" 
            id='lengthInput'
            min={10}
            max={80}
            value={length}
            className='w-full cursor-pointer accent-orange-500'
            onChange={(e)=>(setLength(e.target.value))} 
            />
          </div>
          <div className='flex flex-wrap gap-3'>
          <label className='flex cursor-pointer items-center gap-2 rounded-lg border border-slate-600 bg-slate-700/60 px-3 py-2 transition hover:border-orange-400'>
            <input type="checkbox" 
            id='numInput'
            defaultChecked = {isNumberAllowed}
            onChange={()=>{setNumberAllowed((prev) => (!prev))}}
            className='h-4 w-4 accent-orange-500'
            />
            Numbers
          </label>

          <label className='flex cursor-pointer items-center gap-2 rounded-lg border border-slate-600 bg-slate-700/60 px-3 py-2 transition hover:border-orange-400'>
            <input type="checkbox" 
            id='charInput'
            defaultChecked = {isCharAllowed}
            onChange={()=>{setCharAllowed((prev) => (!prev))}}
            className='h-4 w-4 accent-orange-500'
            />
            Characters
          </label>
          </div>
        </div>

      </div>
      </main>

    </>
  )
}

export default App
