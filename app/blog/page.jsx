import Link from "next/link";
import React from "react";

const fetchBlogData = async ()=>{
  const x = await fetch('https://newsapi.org/v2/everything?apiKey=5300c567a8f54f018fb544a4134dcbc2&q=ambedkar&pageSize=5');
  const y = await x.json();
  const article = Object(y.articles);
  return article
}

const page = async () => {
  const data = await fetchBlogData();
  
 
  
  return (<div className="w-full p-4 h-full items-center justify-center ">
   
  <div className="grid mt-14 place-content-center sm:grid-cols-2 w-full mx-auto max-w-[800px] gap-2">
  {
    data.map((xata) =>
    <div className="rounded-lg grid grid-cols-10 place-content-center gap-1 bg-light_grey">
    <div className="col-span-4 bg-cover max-h-[250px]"  style={{backgroundImage:`url(${xata.urlToImage})`}}/>
    <div className="col-span-6">
    <div className="p-2"><h1>{xata.title.substr(0,70)+'..'}</h1></div>
    <div className="p-2 pt-0"><h1>{xata.author}</h1></div>
    <div className="p-2 pt-0"><h1>{xata.publishedAt.substr(0,10)}</h1></div>
    <Link
    className="text-blue p-2 pt-0"
  href={{
    pathname: '/api/',
    query: { title:xata.title,
             author:xata.author,
             content:xata.content,
             publishedAt:xata.publishedAt,
            message:"I'll Updtae" },
  }}
>
  Read More
</Link>
    </div>
    </div>
    )
  }
  </div>

  </div>)
};

export default page;
