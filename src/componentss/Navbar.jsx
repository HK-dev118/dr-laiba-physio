function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/70 border-b border-white/30 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">

        {/* Logo */}
        <a href="#home" className="group">
          <h1 className="text-3xl font-bold text-[#2E3A2F] group-hover:text-[#6D8B74] transition">
            Dr. <span className="text-[#6D8B74]">Laiba</span>
          </h1>

          <p className="text-[11px] tracking-[5px] text-gray-500 uppercase">
            Physiotherapist
          </p>
        </a>

        {/* Navigation */}
        <ul className="hidden md:flex items-center gap-10 font-medium text-[#2E3A2F]">

          <li>
            <a
              href="#home"
              className="relative hover:text-[#6D8B74] transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#6D8B74] after:transition-all hover:after:w-full"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="relative hover:text-[#6D8B74] transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#6D8B74] after:transition-all hover:after:w-full"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#services"
              className="relative hover:text-[#6D8B74] transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#6D8B74] after:transition-all hover:after:w-full"
            >
              Services
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="relative hover:text-[#6D8B74] transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#6D8B74] after:transition-all hover:after:w-full"
            >
              Contact
            </a>
          </li>

        </ul>

        {/* Book Button */}
        <a
          href="#appointment"
          className="bg-[#6D8B74] hover:bg-[#597260] hover:scale-105 transition duration-300 text-white px-7 py-3 rounded-full shadow-lg"
        >
          Book Appointment
        </a>

      </div>
    </nav>
  );
}

export default Navbar;