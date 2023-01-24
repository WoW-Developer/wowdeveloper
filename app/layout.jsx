import "./global.css";
import { Raleway } from "@next/font/google";
import NAV from "./NAV";

const raleway = Raleway({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body className={raleway.className}>
        <div className="flex flex-col">
          <NAV />
          <div className="fixed w-screen h-screen  overflow-y-scroll ">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
