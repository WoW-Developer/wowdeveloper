
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = process.env.SUPA_URL
const supabaseKey = process.env.SUPA_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

const fetchSingleBlogData = async (prop) => {

  let { data: Blogs, error } = await supabase
  .from('Blogs')
  .select('*')
  .eq('uuid',prop!=null?prop:'af27c84d-32bb-4401-8e51-2569322ad88a' )
  var ss ={data:Blogs};
  if(ss!=null){
  var xx= await ss.data[0]}
if(ss==null){
var xx={}
}
  return xx
};

export default async function Page({params}) {
  
  const query = await fetchSingleBlogData(params.id);
  return (
    <div className="h-full w-full mx-auto p-4 max-w-[600px] pt-16 flex flex-col ">
                <div className="h-64 w-full p-2 rounded-lg" style={{ backgroundImage: `url(${query.image})` }}/>
                <div className="text-3xl capitalize mt-2 font-semibold">{query.title}</div>
                <div className="text-xl mt-1">Published on :- {query.date}</div>
                <div className="text-2xl mt-1">{query.description}</div>
    </div>
  );
}
