"use client";

import { useEffect, useState } from "react";
import VillagerCard from "@/components/VillagerCard";
import type { Villager } from "@/types/villager";

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<Villager[]>([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavorites(stored);
  }, []);

  return (
    <main className="min-h-screen bg-darkVanilla text-liberty p-8">
      <h1 className="text-3xl font-bold text-liberty mb-6 text-center">
        Favorite Villagers
      </h1>

      {favorites.length > 0 ? (
        <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
          {favorites.map((villager) => (
            <VillagerCard key={villager.name} villager={villager} />
          ))}
        </div>
      ) : (
        <p className="text-center text-black mt-10">
          You haven't favorited any villagers yet. Go back and add some!
        </p>
      )}
    </main>
  );
}
