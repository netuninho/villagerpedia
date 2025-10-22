export default function Header() {
  return (
    <header className="p-6 border-b border-cadetBlue flex items-center justify-between">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-liberty">Villagerpedia</h1>
        <p className="text-parrotPink">Animal Crossing Encyclopedia</p>
      </div>

      <nav aria-label="Main menu">
        <ul className="flex gap-6 text-liberty font-medium">
          <li>
            <a
              href="/"
              className="hover:text-parrotPink transition-colors duration-200"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="/about"
              className="hover:text-parrotPink transition-colors duration-200"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="https://api.nookipedia.com"
              rel="noopener noreferrer"
              target="_blank"
              className="hover:text-parrotPink transition-colors duration-200"
            >
              Nookipedia API
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
