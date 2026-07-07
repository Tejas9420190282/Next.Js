import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">
        <p>Hello from root Layout of Admin</p>
        
        {children}
      </body>
    </html>
  );
}
