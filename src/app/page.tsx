"use client";

import { useEffect, useState } from "react";
import FilterGroup from "@/components/FilterGroup";
import Pagination from "@/components/Pagination";
import VillagerCard from "@/components/VillagerCard";
import VillagerModal from "@/components/VillagerModal";
import { getVillagers } from "@/lib/api";
import type { Villager } from "@/types/villager";

export default function Home() {
  const [villagers, setVillagers] = useState<Villager[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [selectedVillager, setSelectedVillager] = useState<Villager | null>(
    null,
  );

  const itemsPerPage = 20;

  useEffect(() => {
    async function fetchData() {
      setLoading(true);

      try {
        const data = await getVillagers();
        setVillagers(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const villagersToShow = villagers.slice(startIndex, endIndex);
  const totalPages = Math.ceil(villagers.length / itemsPerPage);

  return (
    <main className="flex flex-col md:flex-row min-h-screen bg-darkVanilla text-liberty">
      {/* Sidebar / Filters */}
      <aside className="w-full md:w-1/4 p-6 border-b md:border-b-0 md:border-r border-cadetBlue bg-lavenderPurple/30">
        <h2 className="text-xl font-semibold mb-6 text-liberty">Filters</h2>

        <FilterGroup title="Species" options={["All", "Cat", "Dog"]} />
        <FilterGroup title="Personality" options={["All", "Lazy", "Cranky"]} />
      </aside>

      {/* Main content */}
      <section className="flex-1 p-8">
        {/* Search bar */}
        <div className="max-w-xl mx-auto mb-10">
          <input
            type="text"
            placeholder="Search villager..."
            className="w-full p-3 rounded-full border border-cadetBlue bg-darkVanilla text-liberty placeholder:text-cadetBlue focus:outline-none focus:ring-2 focus:ring-parrotPink"
          />
        </div>

        {/* Cards */}
        {loading ? (
          <p className="text-center text-parrotPink">Loading villagers...</p>
        ) : (
          <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
            {villagersToShow.map((v) => (
              <VillagerCard
                key={v.name}
                villager={v}
                onClick={() => setSelectedVillager(v)}
              />
            ))}
          </div>
        )}

        {/* Pagination */}
        <Pagination
          page={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      </section>

      {selectedVillager && (
        <VillagerModal
          villager={selectedVillager}
          onClose={() => setSelectedVillager(null)}
        />
      )}
    </main>
  );
}
