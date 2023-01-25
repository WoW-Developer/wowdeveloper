import Quote from "./quote";

export async function getdata() {
  const res = await fetch(`https://type.fit/api/quotes`,{next:{revalidate:60}})
  const data = await res.json()
  var ln= Object.keys(data).length;
  
  let x = Math.floor(Math.random() * ln - 1);
  const finaldata = await data[x]
  return finaldata // will be passed to the page component as props}
}
 

export default async function Page() {
  const finaldata = await getdata();
  console.log(finaldata)
  return (
    <div
      className="w-full flex flex-col justify-center
    snap-y"
    >
      <section
        className="h-screen sm:p-14 w-full snap-center flex items-center justify-center mx-auto
        text-xl sm:text-2xl"
      >
        <h1 className="text-black  sm:p-14 self-center text-center max-w-[1000px] blod  text-3xl sm:text-5xl">
          Welcome to WoW Developer.
        </h1>
      </section>
      <section
        className="h-screen max-w-[1000px] sm:p-14 w-full snap-center flex items-center justify-center mx-auto
        text-xl sm:text-2xl"
      >
        <Quote  quote={finaldata.text} author={finaldata.author} />
      </section>
    </div>
  );
}
