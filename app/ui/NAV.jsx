import Link from "next/link";
import Mobilenav from "./mobilenav";

const NAV = () => {
  return (
    <main>
      <div className="fixed top-0 left-0 right-0 w-full mt-[-1] pt-1 shadow-primary drop-shadow-2xl z-[21100] bg-primary">
        <div className="w-full max-w-[1080px] flex items-center mx-auto justify-between pr-3 h-14">
          {/* Logo Name */}
          <h1
            className="hover:text-neutral-content
 cursor-pointer text-neutral-content
 tracking-tight pl-4 pr-4  text-2xl sm:text-2xl "
          >
            <Link href={"/"}>WoW Developer</Link>
          </h1>
          <nav>
            {/* Menu Desktop */}
            <ul className="flex-row hidden sm:flex text-white cursor-pointer">
              <li className="hover:text-white hover:align-top p-2 rounded-lg">
                <Link href={"/blog"}>Blog</Link>
              </li>
              <li className="hover:text-white hover:align-top p-2 rounded-lg">
                <Link href={"/support"}>Support</Link>
              </li>
              <li className="hover:text-white hover:align-top p-2 rounded-lg">
                <Link href={"/request"}>Request</Link>
              </li>
            </ul>
          </nav>

          {/* Menu mobile Button */}

          <>
            <Mobilenav />
          </>
        </div>
      </div>
    </main>
  );
};

export default NAV;
