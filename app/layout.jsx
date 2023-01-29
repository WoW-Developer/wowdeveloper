import "./global.css";
import NAV from "./NAV";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body lang="en">
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
