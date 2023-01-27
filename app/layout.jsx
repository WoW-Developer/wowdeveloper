import "./global.css";
import { Lexend } from "@next/font/google";
import NAV from "./NAV";
const lex = Lexend({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  
  
  return (
    <html>      
      <head />
      <body className={lex.className}>
        <div className="flex flex-col tracking-tight">
          <div className="w-full h-screen ">
            <NAV />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
