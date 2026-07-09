// app/client/page.jsx

"use client";

import { useEffect, useState } from "react";
import Counter from "./Counter";

export default function Client_Page() {
  const urlLink = "https://jsonplaceholder.typicode.com/posts";

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(urlLink);

        const urlData = await res.json();

        console.log("Fetched data:", urlData);

        setData(urlData);
      } catch (error) {
        console.log("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  const handleClickMe = () => {
    alert("Button clicked!");
  };

  return (
    <>
      <h1>Client Component</h1>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleClickMe}
      >
        Click me
      </button>

      <Counter />

      <div className="mt-4 flex flex-col gap-10">
        {data.length > 0 ? (
          <ul>
            {data.map((item) => (
              <li key={item.id} className="border-b py-2">
                <h2 className="text-lg font-bold">{item.title}</h2>
                <p>{item.body}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
}
