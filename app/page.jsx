import Quote from "./quote";

export default function Page() {
  const finaldata = getdata();
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
        className="h-screen sm:p-14 w-full snap-center flex items-center justify-center mx-auto
        text-xl sm:text-2xl"
      >
        <Quote quote={finaldata.text} author={finaldata.author} />
      </section>
    </div>
  );
}
