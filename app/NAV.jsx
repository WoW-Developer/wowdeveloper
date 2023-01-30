import Link from "next/link";
import Mobilenav from "./mobilenav";

const NAV = () => {
  return (
    <main>
      <div className="fixed w-full shadow-primary drop-shadow-2xl bg-primary">
        <div className="w-full max-w-[1080px] flex items-center mx-auto justify-between pr-3 h-14">
          {/* Logo Name */}
          <h1 className="hover:text-white cursor-pointer text-white tracking-tight pl-4 pr-4  text-2xl sm:text-2xl ">
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
