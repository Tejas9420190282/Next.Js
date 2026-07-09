import Link from "next/link";
import "@/app/globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">
        <div>
          <div>
            <nav>
              <ul className="bg-blue-4000 p-4 text-white flex flex-row justify-center items-center gap-10">
                <li>
                  <Link href="/client">Client component</Link>
                </li>
                <li>
                  <Link href="/server">Server component</Link>
                </li>
              </ul>
            </nav>
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
