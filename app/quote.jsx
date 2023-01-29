import React from "react";

export async function getdata() {
  const res = await fetch(`https://type.fit/api/quotes`, {
    next: { revalidate: 60 },
  });
  const data = await res.json();
  var ln = Object.keys(data).length;

  let x = Math.floor(Math.random() * ln - 1);
  const finaldata = await data[x];
  return finaldata; // will be passed to the page component as props}
}

const herodiv = async () => {
  const finaldata = await getdata();
  return (
    <>
      <section className="text-bold text-black  flex flex-col mx-3 justify-center">
        <h1 className="text-3xl sm:text-5xl break-words font-bold text-center ">
          {finaldata.text}
        </h1>
        <h1 className="text-xl sm:text-2xl  text-center mt-5 underline underline-offset-8">
          &quot;{finaldata!=null&&finaldata.author.length > 0 ? finaldata.author : "Un-known"}
          &quot;
        </h1>
      </section>
    </>
  );
};

export default herodiv;
