import logo from './logo.svg';
import './App.css';
import Toast from './components/Toast';
import {useRef} from 'react'
import React from 'react';
import Toster from './toster.jpg'
function App() {
  let toast=useRef()
  
  let[msg,setMsg]=React.useState('Hello There')
  let[type,setType]=React.useState('successful')

  return (
    <div className="App">



     <form
      
      onSubmit={(e)=>{
        e.preventDefault()
        toast.current.showToast(msg,type)
     
      }}
     
     className='flex flex-col  rounded-md gap-5 w-fit mx-auto border items-center py-6 justify-between min-h-[450px] mt-[50px] min-w-[350px]  px-6'>
       <img className='w-[250px]' src={Toster}/>
       <div className='flex flex-col gap-5 w-full'>
       <input value={msg} onChange={(e)=>setMsg(e.target.value)} name='msg' className='py-2 px-5 border drop-shadow-sm' placeholder='Enter Toast Message'/>
       <div className='flex justify-between'>

      <label className='flex flex-col gap-3 items-center'>
        <input value='successful' onChange={(e)=>setType(e.target.value)} name='type' type={'radio'}/>
        <span className='text-green-500'>Successful</span>
      </label>

      <label className='flex flex-col gap-3 items-center'>
        <input   value='info' onChange={(e)=>setType(e.target.value)} name='type' type={'radio'}/>
        <span className='text-yellow-500'>Info</span>
      </label>

      <label className='flex flex-col gap-3 items-center'>
        <input  value='warning' onChange={(e)=>setType(e.target.value)}  name='type' type={'radio'}/>
        <span className='text-red-500'>Warning</span>
      </label>

       </div>
       <button className='py-2 px-5 bg-blue-500 text-white rounded'>Show Toast</button>
       </div>
     </form>
     <Toast ref={toast}/>
    </div>
  );
}

export default App;
