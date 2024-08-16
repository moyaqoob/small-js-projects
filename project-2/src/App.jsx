import { useState,useCallback, useEffect,useRef } from 'react'
import './App.css'

function App() {
  const [length,setlength] = useState(12);
  const [password, setPassword] = useState('')
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const passwordRef = useRef(null)
  const [copySuccess,setCopySucess] = useState('')

  //generating a password
  const generatePassword = useCallback(()=>{
    let pass = ""
    let str = 
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*()_+"

    for(let i=0;i<length;i++){
        const char = Math.floor(Math.random() * str.length + 1)
        pass += str.charAt(char)
    }

    setPassword(pass)
  },[length,numberAllowed,charAllowed])

    useEffect(()=>{
      generatePassword();
      // setPassword(pass);

    },[length,numberAllowed,charAllowed])

    const copyPasswordToClipboard = ()=>{
      window.navigator.clipboard.writeText(password)
      passwordRef.current?.select();
      setCopySucess('Copied!')

      
    }


  return (
    <div className='w-full max-w-md mx-auto shadow-md
     rounder-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
      <h1 className=' text-white-3 text-center my-3'>
        Password Generator
      </h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
        type="text"
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='Password'
        readOnly
        ref={passwordRef}
        />
        <button 
        onClick={copyPasswordToClipboard}
         className='outline-none bg-blue-700 text-white px-3
         py-0.5 shrink-0'>Copy</button>
      </div>

      <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
        className='cursor-pointer'
        onChange={(e) => setlength(e.target.value)}
        name=''
        id=''
        />
        <label htmlFor="length">Length:{length}  </label>
      </div>
      
      <div className='flex items-center gap-x-2'>
          <input 
          type="checkbox"
          value={numberAllowed}
          className='cursor-pointer'
          defaultChecked= {numberAllowed}
          onChange={(e)=> {
            setNumberAllowed((prev) => !prev)
          }}
          name=''
          id=''/>
          <label htmlFor="number">Number</label>
      </div>
      
      <div className='flex items-center gap-x-2'>
          <input 
          type="checkbox"
          value={numberAllowed}
          className='cursor-pointer'
          defaultChecked= {charAllowed}
          onChange={(e)=> {
            setNumberAllowed((prev) => !prev)
          }}
          name=''
          id=''/>
          <label htmlFor="charInput">Character</label>
      </div>
        
      </div>
    </div>
  )
}

export default App
