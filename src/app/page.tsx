import FilterGroup from "@/components/FilterGroup";
import VillagerCard from "@/components/VillagerCard";
import { getVillagers } from "@/lib/api";

export default async function Home() {
  const villagers = await getVillagers();

  return (
    <main className="flex flex-col md:flex-row min-h-screen bg-darkVanilla text-liberty">

      {/* Sidebar / Filters */}
      <aside className="w-full md:w-1/4 p-6 border-b md:border-b-0 md:border-r border-cadetBlue bg-lavenderPurple/30">
        <h2 className="text-xl font-semibold mb-6 text-liberty">Filters</h2>

        <FilterGroup
          title="Species"
          options={["All", "Cat", "Dog"]}
        />

        <FilterGroup
          title="Personality"
          options={["All", "Cat", "Dog"]}
        />

        <FilterGroup
          title="Hobby"
          options={["All", "Cat", "Dog"]}
        />
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

        {/* Card of villagers */}
        <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
          {villagers.map((v) => (
            <VillagerCard key={v.name} villager={v}/>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-2 mt-10">
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              type="button"
              className="px-4 py-2 rounded-full cursor-pointer bg-cadetBlue text-darkVanilla hover:bg-liberty hover:text-parrotPink transition-all"
            >
              {n}
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}
