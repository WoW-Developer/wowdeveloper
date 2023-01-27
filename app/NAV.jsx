import { Lexend } from "@next/font/google";
import Link from "next/link";
const bgshoulder = Lexend({ subsets: ["latin"] });
import Mobilenav from "./mobilenav";

const NAV = () => {
  return (
    <main className={bgshoulder.className}>
      <div className="fixed w-full bg-primary">
        <div className="w-full max-w-[1080px] flex items-center mx-auto justify-between pr-3 h-14">
          {/* Logo Name */}
          <h1 className="hover:text-black cursor-pointer text-white tracking-tight pl-4 pr-4  text-2xl sm:text-2xl ">
            <Link href={"/"} >
              WoW Developer
            </Link>
          </h1>
          <nav>
            {/* Menu Desktop */}
            <ul className="flex-row hidden sm:flex text-white cursor-pointer">
              <li className="hover:text-black hover:align-top p-2 rounded-lg">
                <Link href={"/blog"} >
                  Blog
                </Link>
              </li>
              <li className="hover:text-black hover:align-top p-2 rounded-lg">
                <Link href={"/support"} >
                  Support
                </Link>
              </li>
              <li className="hover:text-black hover:align-top p-2 rounded-lg">
                <Link href={"/request"} >
                  Request
                </Link>
              </li>
              <li className="hover:text-black hover:align-top p-2 rounded-lg">
                <Link href={"/report"} >
                  Report
                </Link>
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
