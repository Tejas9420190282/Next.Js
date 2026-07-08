
import "@/app/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">
        <p>Hello from root Layout</p>

        {children}
      </body>
    </html>
  );
}
