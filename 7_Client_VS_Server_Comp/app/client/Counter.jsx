import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-row mt-20 mb-20  items-center justify-center gap-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setCount(count + 1)}
        >
          +1
        </button>
        <p>Count : {count}</p>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setCount(count - 1)}
        >
          -1
        </button>
      </div>
    </>
  );
}
