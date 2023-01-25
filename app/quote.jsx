import React from "react";

const herodiv = ({ quote, author }) => {
  return (
    <>
      <section className="text-bold text-black  flex flex-col mx-3 justify-center">
        <h1 className="text-4xl break-words font-bold text-center ">{quote}</h1>
        <h1 className="text-xl  text-center mt-5 underline underline-offset-8">
          &quot;{author.length > 0 ? author : "Un-known"}&quot;
        </h1>
      </section>
    </>
  );
};

export default herodiv;
