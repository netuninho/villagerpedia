"use client";

import Image from "next/image";
import type { Villager } from "@/types/villager";
import { useEffect, useState } from "react";

interface Props {
  villager: Villager;
  onClick?: () => void;
}

export default function VillagerCard({ villager, onClick }: Props) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setIsFavorite(favorites.some((v: Villager) => v.name === villager.name));
  }, [villager.name]);

  function toggleFavorite(e: React.MouseEvent) {
    e.stopPropagation();
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    let updatedFavorites: Villager[];

    if (isFavorite) {
      updatedFavorites = favorites.filter(
        (v: Villager) => v.name !== villager.name,
      );
    } else {
      updatedFavorites = [...favorites, villager];
    }

    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setIsFavorite(!isFavorite);
  }

  return (
    <button
      onClick={onClick}
      type="button"
      tabIndex={0}
      className="relative bg-softMist rounded-2xl p-4 text-center shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-parrotPink cursor-pointer"
    >
      <button
        type="button"
        onClick={toggleFavorite}
        aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        className={`absolute top-3 right-3 text-xl transition-all duration-200 ${
          isFavorite
            ? "text-parrotPink scale-110"
            : "text-cadetBlue hover:text-parrotPink"
        }`}
      >
        {isFavorite ? "❤️" : "🤍"}
      </button>

      <div className="mx-auto flex items-center justify-center mb-3 overflow-hidden">
        <Image
          src={villager.image_url}
          alt={villager.name}
          width={96}
          height={96}
          className="object-contain"
        />
      </div>

      <h2 className="text-liberty text-lg font-semibold whitespace-nowrap overflow-hidden text-ellipsis">
        {villager.name}
      </h2>
      <p className="text-parrotPink text-sm">{villager.personality}</p>
    </button>
  );
}
