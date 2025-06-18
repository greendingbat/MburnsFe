"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 columns-1">
      <h1 className="text-4xl font-bold">Counter Page</h1>
      <p className="mt-4 text-lg">Client page with interactivity</p>
      <div className="mt-8 flex flex-col items-center justify-center">
        <p className="text-2xl">Count: {count}</p>
        <div>
          <button
            onClick={() => setCount(count + 1)}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Increment
          </button>
          <button
            onClick={() => setCount(count - 1)}
            className="ml-4 px-4 py-2 bg-red-500 text-white rounded"
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}
