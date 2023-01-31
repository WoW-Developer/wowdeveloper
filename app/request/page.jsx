'use client'
const page = () => {
  return (
    <div className="h-full w-full flex items-center justify-center">
      
      <div className="bg-white w-full border-black rounded border text-black mx-4">
       <h1 className='mx-auto text-center p-3 pb-0 text-lg'>Request Anything</h1>
    <form className='w-full p-3 flex flex-col gap-3 mx-auto '>
    
    {/*First Input*/}
    <div className='flex relative flex-col w-full'>
    <input autocomplete="off" id='mail' type="email" placeholder="e.g. someone@wxd.com" className="input 
    rounded
    peer
    placeholder:text-sm
    placeholder:text-transparent
    placeholder:focus:text-dark_grey
    w-full" />     
    <label
    className="absolute top-2 left-3 text-md
    peer-focus:-top-3
    peer-focus:bg-white
    peer-focus:px-1
    peer-focus:text-sm
    duration-300
    ease-in-out
    ">
    E-Mail
    </label>
    </div>
    
    {/*First 2nd*/}
    
    <div className='flex relative flex-col w-full'>
    <input autocomplete="off" id='name' type="text" placeholder="e.g. Arun Kr" className="input 
    rounded
    peer
    placeholder:text-sm
    placeholder:text-transparent
    placeholder:focus:text-dark_grey
    w-full" />     
    
    <label
    className="absolute top-2 left-3 text-md
    peer-focus:-top-3
    peer-focus:bg-white
    peer-focus:px-1
    peer-focus:text-sm
    duration-300
    ease-in-out
    ">
    Name
    </label>
    </div>

{/*3rd*/}
    
    <div className='flex relative flex-col w-full'>
    <input autocomplete="off" id='phone' type="number" placeholder="xxxx-xxx-xxx" className="input 
    rounded
    peer
    placeholder:text-sm
    placeholder:text-transparent
    placeholder:focus:text-dark_grey
    w-full" />     
    
    <label
    className="absolute top-2 left-3 text-md
    peer-focus:-top-3
    peer-focus:bg-white
    peer-focus:px-1
   peer-focus:text-sm
    duration-300
    ease-in-out
    ">
    Phone
    </label>
    </div>

    
    <button className="bg-primary self-center p-2 rounded text-white">Submit</button>

    </form>       
    </div>
    </div>
  );
};

export default page;
