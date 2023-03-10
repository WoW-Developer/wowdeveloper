import { createClient } from "@supabase/supabase-js";
import Image from "next/image";

const supabaseUrl = process.env.SUPA_URL;
const supabaseKey = process.env.SUPA_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function getData(id) {
  let { data: Blogs, error } = await supabase
    .from("Blogs")
    .select("*")
    .eq("uuid", id);
  var ss = { data: Blogs };
  const yy = ss?.data;
  return yy;
}

export default async function Page({ params }) {
  const data = await getData(params.id);

  return (
    <div className="h-full w-full pt-14 flex flex-col ">
      {data?.map((xx) => (
        <div key={xx}>
          <div className="h-44 w-full overflow-hidden">
            <Image
              src={xx.image}
              height={1080}
              width={1920}
              className="h-80 w-full"
              style={{ objectFit: "cover" }}
              alt="Picture of the Blog Post"
            />
          </div>
          <div className="p-4 max-w-[640px] mx-auto flex flex-col">
            <div className="text-3xl text-accent mt-2 font-semibold">
              {xx.title}
            </div>
            <div className="text-xl text-accent mt-1">
              Published on :- {xx.date}
            </div>
            <div className="text-2xl text-accent mt-1">{xx.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
