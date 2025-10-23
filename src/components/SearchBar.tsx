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
        className="absolute right-3 top-1/2 -translate-y-1/2 text-cadetBlue cursor-pointer"
      >
        🔍
      </button>
    </form>
  );
}
