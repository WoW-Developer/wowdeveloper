import Link from "next/link";
import React from "react";
import Image from 'next/image';
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPA_URL;
const supabaseKey = process.env.SUPA_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const fetchBlogData = async () => {
  // const delay = (time) => new Promise((res) => setTimeout(res, time));

  let { data: Blogs, error } = await supabase.from("Blogs").select("*");
  const ss = { data: Blogs };
  const yy = ss?.data;
  return yy;
};

const page = async () => {
  const data = await fetchBlogData();
  return (
    <div className="w-full p-4 h-full items-center text-black justify-center">
      <div className="grid pt-14 place-content-center sm:grid-cols-2 w-full mx-auto max-w-[800px] gap-2">
        {data?.map((xata) => (
          <div
            key={xata}
                className="rounded-lg border-black border grid grid-cols-10 place-content-center gap-1 bg-extra_extra_light_grey"
          >
    <div className="col-span-5 bg-cover rounded-l-lg overflow-hidden h-36 sm:h-44 w-full"  >  
        
   <Image   
   height={800}
   width={1200}
      src={xata.image}
    className="h-96 object-cover w-full"
      alt="Picture of the Blog Post"
    />

    </div> 
            <div className="col-span-5 relative h-full">
              <div className="p-2 font-semibold">
                <h1>"{xata.title}"</h1>
              </div>
              <div className="p-2 line-clamp-2 pt-0">
                <h1>
                  {xata.description}
                </h1>
              </div>
              <div className="p-2 pt-0">
                <h1>{xata.created_at}</h1>
              </div>
              <Link
                className="text-primary p-2 pb-0 absolute bottom-0"
                href={`/blog/${xata.uuid}`}
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
