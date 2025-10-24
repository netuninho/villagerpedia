export const metadata = {
  title: "About — Villagerpedia",
  description:
    "Learn more about the Villagerpedia project and the Nookipedia API.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-darkVanilla text-liberty p-8 flex flex-col items-center">
      <section className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold mb-4 text-liberty">
          About Villagerpedia
        </h1>
        <p className="text-lg text-cadetBlue text-balance mb-8">
          Villagerpedia is a personal project built with love using{" "}
          <span className="text-parrotPink font-semibold">Next.js</span> and{" "}
          <span className="text-parrotPink font-semibold">Tailwind</span>
          . It serves as an interactive encyclopedia for Animal Crossing
          villagers, combining accessibility, design, and creativity into one
          cozy experience.
        </p>

        <div className="text-left bg-softMist rounded-3xl p-6 shadow-md space-y-4 transition-all duration-200 hover:scale-105">
          <h2 className="text-2xl font-semibold text-liberty mb-2">
            About the API
          </h2>
          <p>
            This project uses the{" "}
            <a
              href="https://api.nookipedia.com/doc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-parrotPink underline hover:text-liberty transition-all"
            >
              Nookipedia API
            </a>
            , a public API that provides detailed information about every
            villager from the <em>Animal Crossing</em> series — including their
            name, species, birthday, and more.
          </p>
          <p>
            Data is fetched directly from the Nookipedia database and displayed
            through dynamic components that follow accessibility and performance
            standards.
          </p>
        </div>

        <div className="text-left mt-8 bg-lavenderPurple/30 rounded-3xl p-6 shadow-md space-y-4 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-parrotPink">
          <h2 className="text-2xl font-semibold text-liberty mb-2">
            Project Goals
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Create an accessible and delightful experience for Animal Crossing
              fans.
            </li>
            <li>
              Combine creative design with solid front-end development
              practices.
            </li>
            <li>
              Learn about API integration, pagination, and filtering with real
              data.
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
