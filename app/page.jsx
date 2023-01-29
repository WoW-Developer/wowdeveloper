import Quote from "./quote";
import { Suspense } from "react";
import SAXS from "./scrollto";
import Loading from "./blog/loading";

export default async function Page() {
  return (
    <div className="w-full flex flex-col pl-3 pr-3 justify-center">
      {/* Section */}
      <section
        className="h-screen sm:pt-14 w-full flex-col  flex items-center justify-center mx-auto
        text-xl sm:text-2xl"
      >
        <h1 className="text-black font-bold self-center text-center max-w-[800px] text-3xl sm:text-5xl">
          Welcome to WoW Developer.
        </h1>
        <h1 className="text-black self-center text-center max-w-[800px] p-2 bold  text-xl sm:text-2xl">
          I'm a full stack web developer specializing in React, React Native,
          Android, and Next.js. Ready to create the future of web development!
        </h1>
        <Suspense fallback={<Loading/>}>
        <SAXS />
        </Suspense>
      </section>

      {/* Section */}

      <section
        id="quote"
        className="h-screen max-w-[1000px] sm:pt-14 w-full snap-center flex items-center justify-center mx-auto
        text-xl sm:text-2xl"
      >
        <Suspense fallback={<Loading />}>
          <Quote />
        </Suspense>
      </section>
    </div>
  );
}
