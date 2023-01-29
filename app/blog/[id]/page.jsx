
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = process.env.NEXT_PUBLIC_SUPA_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPA_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

const fetchSingleBlogData = async (id) => {

  let { data: Blogs, error } = await supabase
  .from('Blogs')
  .select('*')
  .eq('uuid',id)
  var ss ={data:Blogs};
  var xx= await ss.data[0];
  return xx

};

export default async function Page({params}) {
  
  const query = await fetchSingleBlogData(params.id!=null?params.id:'');
  return (
    <div className="h-full w-full mx-auto p-4 max-w-[600px] pt-16 flex flex-col ">
                <div className="h-64 w-full p-2 rounded-lg" style={{ backgroundImage: `url(${query.image})` }}/>
                <div className="text-3xl capitalize mt-2 font-semibold">{query.title}</div>
                <div className="text-xl mt-1">Published on :- {query.date}</div>
                <div className="text-2xl mt-1">{query.description}</div>
    </div>
  );
}
