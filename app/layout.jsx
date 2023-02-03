import "./global.css";
import NAV from "./ui/NAV";

export default function RootLayout({ children }) {
  return (
    <html data-theme="pastel" lang="en">
      <head />
      <body lang="en">
        <div className="flex flex-col tracking-tight">
          <div className="w-full min-w-[320px] h-screen ">
            <NAV />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
