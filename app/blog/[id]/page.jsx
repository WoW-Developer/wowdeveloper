
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = process.env.SUPA_URL
const supabaseKey = process.env.SUPA_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

export async function getData(id){
  if(id==null||id.length==0){
  id='af27c84d-32bb-4401-8e51-2569322ad88a'
  }
  try{
  let { data: Blogs, error } = await supabase
  .from('Blogs')
  .select('*')
  .eq('uuid',id)
  var ss ={data:Blogs};
  return ss[0]
  }
  catch(error){
  console.log(error)
  }
}

export default async function Page({params}) {
  try{
  var xx= await getData(params.id);
  console.log(xx)
  
  return (
    <div className="h-full w-full mx-auto p-4 max-w-[600px] pt-16 flex flex-col ">
                <div className="h-64 w-full p-2 rounded-lg" style={{ backgroundImage: `url(${xx.image})` }}/>
                <div className="text-3xl capitalize mt-2 font-semibold">{xx.title}</div>
                <div className="text-xl mt-1">Published on :- {xx.date}</div>
                <div className="text-2xl mt-1">{xx.description}</div>
    </div>
  )}
  catch(error){
  console.log(error)
  }
}
