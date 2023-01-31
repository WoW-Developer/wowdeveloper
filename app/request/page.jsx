'use client'

import { useEffect,useState,useRef } from "react";
import {IMaskInput} from 'react-imask'

const page = () => {

  const [name,setName]= useState('')
  const ref= useRef(null)
  const inputRef = useRef(null)
  const [mail,setMail]= useState('')
  const [request,setRequest]= useState('')
   
   useEffect(()=>{
       console.log(name);
       console.log(mail);
       console.log(request);
   })
  
  return (
   <div className="h-full min-h-fit pt-14 w-full flex items-center justify-center">
      
      <div className="bg-white w-full border-black rounded border text-black mx-4">
       <h1 className='mx-auto text-center p-3 pb-0 text-lg'>Request Anything</h1>
    <form className='w-full p-3 flex flex-col gap-3 mx-auto '>
    
    
<div className='relative border rounded border p-2 border-primary'>

<input autoComplete="off" type='email' id='mail' placeholder="e.g. someone@wxd.com" className=" rounded peer bg-transparent focus:outline-none focus:ring-0 placeholder:text-sm placeholder:text-transparent w-full" onChange={ e =>{
  if(e.target.value.length>0 && /^\S+@\S+\.\S+$/.test(e.target.value)){
  setMail(e.target.value)  
  }
  else setMail('Not Vaild')} } />     
    
<label htmlFor="mail" className="absolute pointer-events-none cursor-text transition bg-white px-2 text-dark_grey scale-75 -top-2.5 -left-0.5 text-dark_grey peer-placeholder-shown:text-light_grey peer-placeholder-shown:scale-100 peer-placeholder-shown:bg-transparent peer-placeholder-shown:top-1.5 peer-placeholder-shown:left-0 duration-300 ease-in-out">E-Mail</label>
</div>


<div className='relative border rounded border p-2 border-primary'>
<input autoComplete="off" type='text' id='name' placeholder="e.g. someone@wxd.com" className=" rounded peer bg-transparent focus:outline-none focus:ring-0 placeholder:text-sm placeholder:text-transparent w-full" onChange={ e =>{setName(e.target.value)} }/>     
   <label htmlFor="name" className="absolute pointer-events-none cursor-text transition bg-white px-2 text-dark_grey scale-75 -top-2.5 -left-0.5 text-dark_grey peer-placeholder-shown:text-light_grey peer-placeholder-shown:scale-100 peer-placeholder-shown:bg-transparent peer-placeholder-shown:top-1.5 peer-placeholder-shown:left-0 duration-300 ease-in-out">Name</label>
</div>


<div className='relative border rounded border p-2 border-primary'>
<IMaskInput mask={Date} min={new Date(1000,0,1)} ref={ref} className='rounded peer bg-transparent focus:outline-none focus:ring-0 placeholder:text-sm placeholder:text-light_grey w-full' inputRef={inputRef} onAccept={(value,mask) =>console.log(value)} placeholder='DoB DD.MM.YYYY' />    
   <label htmlFor="dob" className="absolute pointer-events-none cursor-text transition bg-white px-2 text-dark_grey scale-75 -top-2.5 -left-0.5 text-dark_grey peer-placeholder-shown:text-sm peer-placeholder-shown:text-transparent peer-placeholder-shown:bg-transparent peer-placeholder-shown:top-1.5 peer-placeholder-shown:left-0 duration-300 ease-in-out">DoB</label>
</div>


<div className='relative border rounded border p-2 border-primary'>
<textarea rows='4' autoComplete="off" type='text' id='name' placeholder="e.g. someone@wxd.com" className=" rounded peer bg-transparent focus:outline-none focus:ring-0 placeholder:text-sm placeholder:text-transparent w-full" onChange={ e =>{setRequest(e.target.value)} }/>     
 <label htmlFor="name" className="absolute pointer-events-none cursor-text transition bg-white px-2 text-dark_grey scale-75 -top-2.5 -left-0.5 text-dark_grey peer-placeholder-shown:text-light_grey peer-placeholder-shown:scale-100 peer-placeholder-shown:bg-transparent peer-placeholder-shown:top-1.5 peer-placeholder-shown:left-0 duration-300 ease-in-out">Request</label>
</div>
   
<button className="bg-primary self-center p-2 rounded text-white">Submit</button>
    
</form>           
</div>    
</div>
);
};

export default page;
