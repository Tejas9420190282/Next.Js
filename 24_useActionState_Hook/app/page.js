// page.js

"use client";

import { useActionState } from "react";
import insert_Action from "./action";

function Home() {
  const [state, submitForm, isPending] = useActionState(insert_Action, null);

  return (
    <>
      <form
        action={submitForm}
        className="flex flex-col justify-center items-center gap-3 mt-15"
      >
        <div className="bg-white p-1 w-52 rounded">
          <input
            type="text"
            placeholder="Enter user's Name"
            className="text-black bg-white border-none outline-none focus:outline-none focus:ring-0"
            name="name"
            required
          />
        </div>

        <div className="bg-white p-1 w-52 rounded">
          <input
            type="number"
            placeholder="Enter user's STD"
            className="text-black bg-white border-none outline-none focus:outline-none focus:ring-0"
            name="std"
            required
          />
        </div>

        <div className="bg-white p-1 w-52 rounded">
          <input
            type="text"
            placeholder="Enter user's Skills"
            className="text-black bg-white border-none outline-none focus:outline-none focus:ring-0"
            name="skills"
            required
          />
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="bg-blue-400 p-2 rounded text-black font-bold"
        >
          {isPending ? <span>Loading....</span> : <spam>Submit form</spam>}
        </button>
      </form>

      <section>
        {
            state && (
                <p className={`${state.success ? "bg-green-500" : "bg-red-500"}`}>{state.message}</p>
            )
        }
      </section>
    </>
  );
}

export default Home;
