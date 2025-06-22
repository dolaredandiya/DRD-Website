"use client";

import ComingSoon from "../comingSoon";
import { useState } from "react";

export default function Home() {
  const [textarea, setTextarea] = useState("");

  return (
    <div className="py-2 px-4 mx-auto max-w-screen-md">
      <h2
        className="mb-4 text-4xl font-extrabold 
       text-center text-gray-900"
      >
        Contact Us
      </h2>

      <form
        method="POST"
        action={
          "mailto:dolaredandiya@unc.edu?subject=Contact Us&body=" + textarea
        }
      >
        <textarea
          className="block px-3 pt-1 pb-10 w-full text-lg text-gray-900 bg-gray-50 
          rounded-lg border border-gray-300 shadow-sm"
          placeholder="Message ..."
          value={textarea}
          onChange={(event) => setTextarea(event.target.value)}
          required
        />

        <button
          type="submit"
          className="mt-2 p-2 float-right text-white  
                                        rounded-lg border-prussian-500 
                                        bg-prussian-500 hover:scale-105"
        >
          Send message
        </button>
      </form>
    </div>
  );
}
