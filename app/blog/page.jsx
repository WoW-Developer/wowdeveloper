import Link from "next/link";
import React from "react";
import Image from "next/image";
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
      <div className="grid pt-14 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-content-center w-fit mx-auto max-w-screen-lg gap-2">
        {data?.map((xata) => (
          //TODO: Blog Card Starts Here

          <div
            key={xata}
            className="card card-compact w-full bg-base-100 shadow-xl"
          >
            <figure>
              <Image
                height={800}
                width={1200}
                src={xata.image}
                className="h-52 object-cover w-full"
                alt="Picture of the Blog Post"
              />
            </figure>
            <div className="card-body text-accent">
              <h2 className="text-xl card-title">{xata.title}</h2>
              <p className="text-md line-clamp-2 pr-3">{xata.description}</p>
              <div className="card-actions justify-between">
                <h1 className="mt-1">{xata.date}</h1>
                <button className="btn btn-xs text-sm sm:text-md text-base-100 sm:btn-sm btn-primary">
                  <Link href={`/blog/${xata.uuid}`}>Read More</Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
