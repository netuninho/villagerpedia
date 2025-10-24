"use client";

import { useState } from "react";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: Props) {
  const [inputValue, setInputValue] = useState(value);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onChange(inputValue.trim());
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto mb-10 relative w-full"
    >
      <input
        type="text"
        placeholder="Search by name, species or personality..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="w-full p-3 rounded-full border border-cadetBlue bg-darkVanilla text-liberty placeholder:text-cadetBlue focus:outline-none focus:ring-2 focus:ring-parrotPink pr-10"
      />
      <button
        type="submit"
        className="absolute right-3 top-1/2 -translate-y-1/2 text-cadetBlue hover:text-parrotPink transition-all cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
          className="w-5 h-5 fill-current"
          role="img"
          aria-labelledby="search-icon-title"
        >
          <title id="search-icon-title">Search icon</title>
          <path d="M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" />
        </svg>
      </button>
    </form>
  );
}
