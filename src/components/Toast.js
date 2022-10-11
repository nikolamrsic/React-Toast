import React, { useEffect } from "react";
import { useImperativeHandle } from "react";
import Style from './Toast.module.css'
import { motion ,AnimatePresence } from "framer-motion";

const DoneIcon=()=>{
    return(
<svg width={24} height={24} fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M20 6 9 17l-5-5" />
</svg>
    )
}

const CloseICon=()=>{
    return(
        <svg width={24} className='pointer-events-none' height={24} fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M18 6 6 18" />
  <path d="m6 6 12 12" />
</svg> 
    )
}

const InfoIcon=()=>{
 return(
    <svg width={24} height={24} fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20z" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
 )
}

const WarningIcon=()=>{
    return(
        <svg width={24} height={24} fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20z" />
  <path d="m15 9-6 6" />
  <path d="m9 9 6 6" />
</svg>
    )
}


const Toast = React.forwardRef((props, ref) => {
  
    let [showToast, setShowToasd] = React.useState(true);
  let [status,seStatus]=React.useState('successful')
  let[msg,setMsg]=React.useState('Hello There')

  useImperativeHandle(ref,()=>({
      showToast(msgInfo,statusInfo){ 
          setShowToasd(true)
          setMsg(msgInfo) 
          seStatus(statusInfo)
      }
  }),[])

  useEffect(()=>{
  
     
  let timer= setTimeout(()=>{
 setShowToasd(false)
    },2500)
    return(()=>{
        clearTimeout(timer)
    })
  },[showToast])

  

  if (showToast && status==='successful' ) {
    return (
   
    <motion.div  initial={{opacity:0,scale:0}}  animate={{opacity:1,scale:1}} onClick={()=>{setShowToasd(false)}}  className="min-w-[250px] anim-in  drop-shadow-sm flex-col  text-white flex items-start justify-start rounded-md hover:bg-green-700 bg-green-500 pt-2 pb-3 pl-6 pr-4 fixed top-[15px] right-[15px] min-h-[50px] border">
        <div className="flex justify-between w-full">
        <div className="flex items-center flex-row-reverse gap-2">
        <div className="text-xl font-bold">Successful</div>
        <DoneIcon/>
        </div>
        <button onClick={()=>{setShowToasd(false)}} className="p-1  rounded-full"><CloseICon/></button>
        </div>
        <div>{msg}</div>
      </motion.div>
     
    );
  }
  if (showToast && status==='info' ) {
    return (
      <motion.div  initial={{opacity:0,scale:0}}  animate={{opacity:1,scale:1}} onClick={()=>{setShowToasd(false)}}  className="min-w-[250px]  drop-shadow-sm flex-col  text-white flex items-start justify-start rounded-md hover:bg-yellow-700 bg-yellow-500 pt-2 pb-3 pl-6 pr-4 fixed top-[15px] right-[15px] min-h-[50px] border">
        <div className="flex justify-between w-full">
        <div className="flex items-center flex-row-reverse gap-2">
        <div className="text-xl font-bold">Info</div>
        <InfoIcon/>
        </div>
        <button onClick={()=>{setShowToasd(false)}} className="p-1  rounded-full"><CloseICon/></button>
        </div>
        <div>{msg}</div>
      </motion.div>
    );
  }

  if (showToast && status==='warning' ) {
    return (
      <motion.div initial={{opacity:0,scale:0}}  animate={{opacity:1,scale:1}} onClick={()=>{setShowToasd(false)}}  className="min-w-[250px]  drop-shadow-sm flex-col  text-white flex items-start justify-start rounded-md hover:bg-red-700 bg-red-500 pt-2 pb-3 pl-6 pr-4 fixed top-[15px] right-[15px] min-h-[50px] border">
        <div className="flex justify-between w-full">
        <div className="flex items-center flex-row-reverse gap-2">
        <div className="text-xl font-bold">Warning</div>
        <WarningIcon/>
        </div>
        <button onClick={()=>{setShowToasd(false)}} className="p-1  rounded-full"><CloseICon/></button>
        </div>
        <div>{msg}</div>
      </motion.div>
    );
  }
});

export default Toast;
