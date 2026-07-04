function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-[#FAF8F4] flex items-center pt-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT SIDE */}
        <div data-aos="fade-right">

          <p className="uppercase tracking-[5px] text-[#6D8B74] font-semibold mb-4">
            Professional Physiotherapy Care
          </p>

          <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-[#2E3A2F]">
            Expert
            <span className="text-[#6D8B74]"> Physiotherapy </span>
            Care for a
            Healthier Life.
          </h1>

          <p className="mt-8 text-lg text-gray-600 leading-8 max-w-xl">
            Providing compassionate and evidence-based physiotherapy
            for stroke rehabilitation, pain management,
            posture correction, neck pain, knee pain,
            sciatica, and home physiotherapy services
            across Rawalpindi & Islamabad.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">

           <a
  href="#appointment"
  className="bg-[#6D8B74] text-white px-8 py-4 rounded-full shadow-xl hover:bg-[#587160] hover:scale-105 duration-300"
>
  Book Appointment
</a>

            <a
              href="#services"
              className="border-2 border-[#6D8B74] text-[#6D8B74] px-8 py-4 rounded-full hover:bg-[#6D8B74] hover:text-white duration-300"
            >
              Explore Services
            </a>

          </div>

          {/* Small Info */}
          <div className="mt-12 flex flex-wrap gap-8">

            <div>
              <h3 className="text-4xl font-bold text-[#6D8B74]">
                5
              </h3>

              <p className="text-gray-600">
                Years Clinical Training
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-[#6D8B74]">
                100%
              </h3>

              <p className="text-gray-600">
                Personalized Care
              </p>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div
          className="relative flex justify-center items-center"
          data-aos="fade-left"
        >

          {/* Decorative Background */}
          <div className="absolute w-[430px] h-[430px] rounded-full bg-[#DCE8DD] blur-3xl opacity-60"></div>

          {/* Doctor Image */}
          <img
            src="/laiba.png"
            alt="Dr. Laiba Kayani"
            className="relative w-[420px] rounded-[40px] shadow-2xl border-8 border-white"
          />

          {/* Home Visit Card */}
          <div className="absolute bottom-8 -right-8 bg-white px-6 py-5 rounded-2xl shadow-xl">

            <h3 className="font-bold text-[#2E3A2F]">
              🏡 Home Visits
            </h3>

            <p className="text-gray-600 text-sm mt-1">
              Rawalpindi & Islamabad
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;