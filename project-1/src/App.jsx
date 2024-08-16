import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('red')

  function changeColor(color){
    setColor(color);
  }

  return (
   <>
   <div className='w-full h-screen duration-200'style={{backgroundColor:color}} >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justufy-center gap-3 shadow-lg 
        bg-white px-3 py-2 rounded-3xl'>
          <button 
          onClick={()=> changeColor('red')}
          style={{backgroundColor:'red' }} 
          className='outline-none px-4 py-1 rounded-full
           text-white shadow-lg text-black
           transition duration-500 ease-in-out hover:bg-maroon-500'
           >Red</button>
          <button
           onClick={()=> changeColor('blue')} 
           style={{backgroundColor:'blue' }} 
          className='outline-none px-4 py-1 rounded-full
           text-white shadow-lg text-black
           transition duration-500 ease-in-out hover:bg-green-500'
           >Blue</button>
          <button
           onClick={()=> changeColor('green')}
           style={{backgroundColor:'green' }} 
           className='outline-none px-4 py-1 rounded-full
           text-white shadow-lg text-black
           transition duration-500 ease-in-out hover:bg-blue-500' 
           >Green</button>

        </div>
      </div>
   </div>
    {/* <h1 className='text-3xl font-bold p-10 h-10 m-top-8'>A backgroud changer app using vite</h1> */}
   </>
  )
}

export default App
