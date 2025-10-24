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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              className="w-5 h-5 fill-current"
              role="img"
              aria-labelledby="goto-icon-title"
            >
              <title id="goto-icon-title">Go to page icon</title>
              <path d="M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}
