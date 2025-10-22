"use client";

import { useState } from "react";

interface PaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  page,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const [inputPage, setInputPage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const num = Number(inputPage);
    if (num >= 1 && num <= totalPages) {
      onPageChange(num);
      setInputPage("");
    }
  }

  return (
    <div className="flex flex-col justify-center items-center gap-4 mt-10">
      <div className="flex flex-wrap justify-center items-center gap-4">
        <button
          type="button"
          disabled={page === 1}
          onClick={() => onPageChange(page - 1)}
          className="px-4 py-2 rounded-full bg-cadetBlue text-darkVanilla hover:bg-liberty hover:text-parrotPink transition-all disabled:opacity-50 disabled:cursor-default cursor-pointer"
        >
          ← Prev
        </button>

        <span className="text-liberty font-semibold">
          Page {page} / {totalPages}
        </span>

        <button
          type="button"
          disabled={page === totalPages}
          onClick={() => onPageChange(page + 1)}
          className="px-4 py-2 rounded-full bg-cadetBlue text-darkVanilla hover:bg-liberty hover:text-parrotPink transition-all disabled:opacity-50 disabled:cursor-default cursor-pointer"
        >
          Next →
        </button>
      </div>

      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <div className="flex overflow-hidden rounded-full border border-cadetBlue bg-darkVanilla focus-within:ring-2 focus-within:ring-parrotPink transition-all">
          <input
            type="number"
            min={1}
            max={totalPages}
            value={inputPage}
            onChange={(e) => setInputPage(e.target.value)}
            placeholder="Go to..."
            className="w-20 p-1.5 text-sm text-liberty bg-transparent text-center outline-none"
          />
          <button
            type="submit"
            className="px-3 py-1.5 text-sm font-medium bg-cadetBlue text-darkVanilla hover:bg-liberty hover:text-parrotPink transition-all cursor-pointer"
          >
            🔍
          </button>
        </div>
      </form>
    </div>
  );
}
