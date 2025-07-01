"use client";

import ComingSoon from "../comingSoon";
import { useState } from "react";

export default function Home() {
  const [textarea, setTextarea] = useState("");

  return (
    <div className="px-4 py-8 max-w-3xl w-full mx-auto">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 mb-6">
        Contact Us
      </h2>

      <form
        method="POST"
        action={`mailto:dolaredandiya@unc.edu?subject=Contact Us&body=${encodeURIComponent(
          textarea
        )}`}
      >
        <textarea
          className="w-full min-h-[200px] p-4 text-base text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-prussian-500 resize-none"
          placeholder="Your message..."
          value={textarea}
          onChange={(e) => setTextarea(e.target.value)}
          required
        />

        <div className="flex justify-end mt-4">
          <button
            type="submit"
            className="px-6 py-2 text-white rounded-lg bg-prussian-500 hover:scale-105 transition-transform"
          >
            Send message
          </button>
        </div>
      </form>
    </div>
  );
}
