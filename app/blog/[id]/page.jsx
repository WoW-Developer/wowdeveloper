
import { createClient } from '@supabase/supabase-js'
import Image from 'next/image';
const supabaseUrl = process.env.SUPA_URL
const supabaseKey = process.env.SUPA_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

export async function getData(id){
  
  let { data: Blogs, error } = await supabase
  .from('Blogs')
  .select('*')
  .eq('uuid',id)
  var ss ={data:Blogs};
  const yy=ss?.data
  return yy

}

export default async function Page({params}) {
 
  const data = await getData(params.id);
  
  return (
  
    <div className="h-full w-full mx-auto p-4 max-w-[600px] pt-16 flex flex-col ">
             {data?.map((xx)=>(<div key={xx}>
            <Image
            className="h-80 w-full p-2 rounded-lg"
      src={xx.image}
      width={500}
      height={500}
      style={{objectFit: "cover"}}
      alt="Picture of the Blog Post"
    />
                <div className="text-3xl capitalize mt-2 font-semibold">{xx.title}</div>
                <div className="text-xl mt-1">Published on :- {xx.date}</div>
                <div className="text-2xl mt-1">{xx.description}</div>
             
             </div>
             ))  }
    </div>
  )
}
