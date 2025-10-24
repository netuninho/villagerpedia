"use client";

import { useEffect, useState, useMemo } from "react";
import FilterGroup from "@/components/FilterGroup";
import Pagination from "@/components/Pagination";
import SearchBar from "@/components/SearchBar";
import VillagerCard from "@/components/VillagerCard";
import VillagerModal from "@/components/VillagerModal";
import { getVillagers } from "@/lib/api";
import type { Villager } from "@/types/villager";

export default function Home() {
  const [villagers, setVillagers] = useState<Villager[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [allSpecies, setAllSpecies] = useState<string[]>([]);
  const [allPersonalities, setAllPersonalities] = useState<string[]>([]);
  const [selectedSpecies, setSelectedSpecies] = useState<string[]>([]);
  const [selectedPersonality, setSelectedPersonality] = useState<string[]>([]);
  const [appliedFilters, setAppliedFilters] = useState<{
    species: string[];
    personality: string[];
  }>({
    species: [],
    personality: [],
  });

  const [selectedVillager, setSelectedVillager] = useState<Villager | null>(
    null,
  );

  useEffect(() => {
    async function fetchData() {
      setLoading(true);

      try {
        const data = await getVillagers();
        setVillagers(data);
        const speciesList = Array.from(
          new Set(data.map((v) => v.species)),
        ).sort();
        const personalityList = Array.from(
          new Set(data.map((v) => v.personality)),
        ).sort();

        setAllSpecies(speciesList);
        setAllPersonalities(personalityList);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  // biome-ignore lint/correctness/useExhaustiveDependencies: needed to reset pagination on search
  useEffect(() => {
    setPage(1);
  }, [searchTerm]);

  const filteredVillagers = useMemo(() => {
    const term = searchTerm.toLowerCase().trim();

    return villagers.filter((v) => {
      const matchesSearch =
        !term ||
        v.name.toLowerCase().includes(term) ||
        v.species.toLowerCase().includes(term) ||
        v.personality.toLowerCase().includes(term);

      const matchesSpecies =
        appliedFilters.species.length === 0 ||
        appliedFilters.species.includes(v.species);

      const matchesPersonality =
        appliedFilters.personality.length === 0 ||
        appliedFilters.personality.includes(v.personality);

      return matchesSearch && matchesSpecies && matchesPersonality;
    });
  }, [villagers, searchTerm, appliedFilters]);

  const itemsPerPage = 20;
  const totalPages = Math.ceil(filteredVillagers.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const villagersToShow = filteredVillagers.slice(startIndex, endIndex);

  return (
    <main className="flex flex-col md:flex-row min-h-screen bg-darkVanilla text-liberty">
      {/* Sidebar / Filters */}
      <aside className="w-full md:w-1/4 p-6 border-b md:border-b-0 md:border-r border-cadetBlue bg-lavenderPurple/30">
        <h2 className="text-xl text-center font-semibold mb-6 text-liberty">
          Filters
        </h2>

        <div className="flex gap-20 ml-10">
          <FilterGroup
            title="Species"
            options={allSpecies}
            selected={selectedSpecies}
            onChange={setSelectedSpecies}
          />

          <FilterGroup
            title="Personality"
            options={allPersonalities}
            selected={selectedPersonality}
            onChange={setSelectedPersonality}
          />
        </div>

        {/* Botões */}
        <div className="flex flex-col sm:flex-row gap-3 mt-6">
          <button
            type="button"
            onClick={() =>
              setAppliedFilters({
                species: selectedSpecies,
                personality: selectedPersonality,
              })
            }
            className="flex-1 bg-parrotPink text-darkVanilla font-semibold py-2 rounded-lg hover:bg-liberty transition-all hover:text-parrotPink cursor-pointer"
          >
            Apply Filters
          </button>

          <button
            type="button"
            onClick={() => {
              setSelectedSpecies([]);
              setSelectedPersonality([]);
              setAppliedFilters({ species: [], personality: [] });
            }}
            className="flex-1 bg-cadetBlue/40 text-liberty font-medium py-2 rounded-lg hover:bg-cadetBlue/60 transition-all hover:text-parrotPink cursor-pointer"
          >
            Clear
          </button>
        </div>
      </aside>

      {/* Main content */}
      <section className="flex-1 p-8">
        {/* Search bar */}
        <div className="max-w-xl mx-auto mb-10">
          <SearchBar value={searchTerm} onChange={setSearchTerm} />
        </div>

        {/* Cards */}
        {loading ? (
          <p className="text-center text-parrotPink">Loading villagers...</p>
        ) : filteredVillagers.length > 0 ? (
          <>
            <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
              {villagersToShow.map((v) => (
                <VillagerCard
                  key={v.name}
                  villager={v}
                  onClick={() => setSelectedVillager(v)}
                />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <Pagination
                page={page}
                totalPages={totalPages}
                onPageChange={setPage}
              />
            )}
          </>
        ) : (
          <p className="text-center text-parrotPink mt-8">No villagers found</p>
        )}
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
