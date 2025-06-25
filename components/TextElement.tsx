"use client";

import { Copy } from "lucide-react";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function TextElement() {
  const [value, setValue] = useState("Hello World");

  async function copyToClipboard() {
    try {
      const styledHtml = `<h2>${value}</h2>`;
      await navigator.clipboard.write([
        new ClipboardItem({
          "text/html": new Blob([styledHtml], { type: "text/html" }),
          "text/plain": new Blob([styledHtml], { type: "text/plain" }),
        }),
      ]);
      toast.success("Copied to clipboard!");
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error("An error occurred: ", error);
      }
      toast.error("An error occurred, check console for more details.");
    }
  }

  return (
    <>
      <Toaster />
      <div className="max-w-4xl mx-auto border border-gray-300 rounded-lg shadow flex flex-col">
        <div className="w-full p-4">
          <input
            type="text"
            value={value}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setValue(e.currentTarget.value);
            }}
            className="w-full outline-none border border-gray-500 p-2 rounded-lg"
          />
        </div>
        <div className="border-t border-gray-100 p-4 flex justify-end items-center gap-2">
          <button
            onClick={copyToClipboard}
            className="cursor-pointer text-sm flex items-center gap-2 border border-foreground px-4 p-2 rounded-lg bg-foreground text-background hover:bg-foreground/90 hover:scale-95 transition duration-200 ease-in-out"
          >
            <Copy size={20} />
            <span>Copy Element</span>
          </button>
        </div>
      </div>
    </>
  );
}
