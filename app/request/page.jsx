'use client'

import { useEffect,useState} from "react";
import { createClient } from "@supabase/supabase-js";
//import {IMaskInput} from 'react-imask'
import Link from "next/link";





const supabaseUrl = process.env.NEXT_PUBLIC_SUPA_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPA_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const postdata = async (ymail,yname,yphone,yrequest) => {
  // const delay = (time) => new Promise((res) => set Timeout(res, time));
  
  
  const { data, error } = await supabase
  .from('Requests')
  .insert([
    { 'email':ymail, 'name': yname,'message':yrequest,'phone':yphone,},
  ])
  
const x =  document.getElementById('fc');

  x.style.display='flex';
  x.style.flexDirection='column'
  document.getElementById('root').style.display='none'
  document.getElementById('spin').style.display='none'

 return 
};




const page = () => {

 const [name,setName]= useState('')
 const[phone,setPhone] = useState('')
 const [mail,setMail]= useState('')
 const [request,setRequest]= useState('')
  
  
  {/*useEffect(()=>{
      console.log(mail)
  console.log(phone)
  console.log(name)
  console.log(request)
   },[mail,phone,name,request])
  */}
 const submitdata =(xmail,xname,xphone,xrequest)=>{ 
 

  const iname=document.getElementById('nameerror');
  const iphone=document.getElementById('pher');
  const imail=document.getElementById('mailerror');
  const irequest=document.getElementById('rqer');

  if(!xmail.length>0||xmail===null){
   imail.style.display='block'
   return
  }
  imail.style.display='none'
 
  if(xname===null||!xname.length>0){
   iname.style.display='block'
   return
  }
  iname.style.display='none'
  
  if(!xphone.length>0||xphone===null){
   iphone.style.display='block'
   return
  }
    iphone.style.display='none'
    
    
  if(xrequest===null||!xrequest.length>0){
   irequest.style.display='block'
   return
  }  
    irequest.style.display='none'  


  document.activeElement.blur();
  document.getElementById('root').style.display='none'
  document.getElementById('spin').style.display='flex'
   document.getElementById('spin').style.flexDirection='column'
   
  postdata(xmail,xname,xphone,xrequest);
}  
  
  useEffect(()=>{
     document.getElementById('root').style.display='flex'
          document.getElementById('root').style.flexDirection='column'
     document.getElementById('spin').style.display='none'
   },[])
   

  return (
<>   
<div  id='fc'  style={{display:'none'}}  className='fixed flex-col top-0 left-0 h-screen flex items-center justify-center w-screen z-[21000] bg-white '>
  
   <p className='text-primary'> Thank you! 
   Have a Nice Time Ahead!</p>
   <Link href='/' className='bg-primary text-white rounded mt-2 mx-auto p-2'>Home</Link>
  
   </div>
   <div className="h-full min-h-fit pt-14 w-full flex items-center justify-center">
      
      <div className="bg-white w-full relative border-black rounded border text-black mx-4">

         <form onSubmit={e=>{
          e.preventDefault()
          submitdata(mail,name,phone,request)}} style={{display:'none'}}  id='root' className='w-full p-3 col-1 mx-auto text-center'>
           <h1 className='mx-auto text-center p-3 pb-0 text-lg'>Request</h1>
    
<div className='relative border rounded border p-2 border-primary'>

<input tabIndex={0} autoComplete="off" type='email' id='mail' placeholder="e.g. someone@wxd.com" className=" rounded peer bg-transparent focus:outline-none focus:ring-0 placeholder:text-sm placeholder:text-transparent w-full" onChange={ e =>{
  e.preventDefault();
  setMail(e.target.value)} } />     
    
<label htmlFor="mail" className="absolute pointer-events-none cursor-text transition bg-white px-2  
after:content-['*'] after:ml-0.5 after:text-red
scale-75 -top-2.5 -left-0.5 text-dark_grey peer-placeholder-shown:text-light_grey peer-placeholder-shown:scale-100 peer-placeholder-shown:bg-transparent peer-placeholder-shown:top-1.5 peer-placeholder-shown:left-0 duration-300 ease-in-out">E-Mail</label>
</div>
<h1 id='mailerror' style={{display:'none'}} className='mr-auto w-fit text-red text-xs'>Enter Valid Email</h1>

<div className='relative border rounded border mt-2 p-2 border-primary'>
<input tabIndex={0} autoComplete="off" type='text' id='name' placeholder="e.g. someone@wxd.com" className=" required rounded peer bg-transparent focus:outline-none focus:ring-0 placeholder:text-sm placeholder:text-transparent w-full" onChange={ e =>{
 e.preventDefault(); setName(e.target.value)} }/>     
   <label htmlFor="name" className="absolute pointer-events-none cursor-text transition bg-white px-2 after:content-['*'] after:ml-0.5 after:text-red scale-75 -top-2.5 -left-0.5 text-dark_grey peer-placeholder-shown:text-light_grey peer-placeholder-shown:scale-100 peer-placeholder-shown:bg-transparent peer-placeholder-shown:top-1.5 peer-placeholder-shown:left-0 duration-300 ease-in-out">Name</label>
</div>

<h1 id='nameerror' style={{display:'none'}} className='mr-auto text-red w-fit text-xs'>Enter Name</h1>


<div className='relative border rounded border mt-2 p-2 border-primary'>
<input tabIndex={0} autoComplete="off" type='number' id='phone' placeholder="99999999" className=" rounded peer required bg-transparent focus:outline-none focus:ring-0 placeholder:text-sm placeholder:text-transparent w-full" onChange={ e =>{
 e.preventDefault();
 setPhone(e.target.value) ;
 } }/>     
   <label htmlFor="phone" className="absolute pointer-events-none cursor-text transition bg-white px-2 after:content-['*'] after:ml-0.5 after:text-red scale-75 -top-2.5 -left-0.5 text-dark_grey peer-placeholder-shown:text-light_grey peer-placeholder-shown:scale-100 peer-placeholder-shown:bg-transparent peer-placeholder-shown:top-1.5 peer-placeholder-shown:left-0 duration-300 ease-in-out">Phone</label>
</div>
<h1 id='pher' style={{display:'none'}} className='mr-auto text-red w-fit  text-xs'>Enter Valid Phone Number</h1>


{/*

<div className='relative flex border overflow-hiddn rounded border mb-2 p-2 border-primary'>
<input  tabIndex={0} autoComplete="off" value='1900-01-01' type='date' id='dob' placeholder="DOB" className="w-full text-left rounded peer text-sm bg-transparent text-dark_grey mr-auto focus:ring-1 placeholder:text-sm placeholder:text-transparent w-full" onChange={ e =>{e.preventDefault();
setDate(e.target.value)}}/> 
 
   <label htmlFor="dob" className="absolute cursor-select bg-primary h-full text-white top-0 align-center pt-1.5 pl-1 pr-1 text-center justify-center right-0 duration-300 ease-in-out">DoB</label>
</div>
*/}


<div className='relative border rounded border mt-2 p-2 border-primary'>
<textarea  tabIndex={0} rows='4' autoComplete="off" type='text' id='request' placeholder="I want to know" className=" rounded required peer bg-transparent focus:outline-none focus:ring-0 placeholder:text-sm placeholder:text-transparent w-full" onChange={ e =>{
 e.preventDefault();
 setRequest(e.target.value)} }/>     
 <label htmlFor="name" className="absolute pointer-events-none cursor-text transition bg-white px-2 after:content-['*'] after:ml-0.5 after:text-red scale-75 -top-2.5 -left-0.5 text-dark_grey peer-placeholder-shown:text-light_grey peer-placeholder-shown:scale-100 peer-placeholder-shown:bg-transparent peer-placeholder-shown:top-1.5 peer-placeholder-shown:left-0 duration-300 ease-in-out">Request</label>
</div>

<h1 id='rqer' style={{display:'none'}} className='mr-auto text-red w-fit text-xs'>Enter Request</h1>
   
  <p role='button' type='submit' onClick={e=>{e.preventDefault();submitdata(mail,name,phone,request)}} tabIndex={0}  className="bg-primary w-fit mx-auto hover:bg-black focus:bg-black focus:ring-0 focus:outline-none self-center p-2 mt-2 rounded text-white">Submit</p>
    
</form>   


 <div id='spin'  className="flex flex-col  mx-auto  justify-center items-center h-fit w-fit">
      <svg
        className="w-12 h-12 animate-spin text-black"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 4.75V6.25"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M17.1266 6.87347L16.0659 7.93413"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M19.25 12L17.75 12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M17.1266 17.1265L16.0659 16.0659"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M12 17.75V19.25"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M7.9342 16.0659L6.87354 17.1265"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M6.25 12L4.75 12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M7.9342 7.93413L6.87354 6.87347"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
      <h1 className='text-lg'>Please Wait</h1>
    </div>
 
    
</div>    
</div>
</>)}


export default page;