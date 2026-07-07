function About() {
  return (
   <section
  id="about"
  className="bg-white py-24"
>
      <div
  className="max-w-4xl mx-auto px-8 text-center"
  data-aos="fade-up"
>
        {/* Right Side - Content */}
        <div>

          <p className="uppercase tracking-[4px] text-[#6D8B74] mb-3">
            About Dr. Laiba
          </p>

          <h2 className="text-5xl font-bold text-[#2E3A2F] leading-tight">
            Compassionate Care,
            <br />
            Personalized Recovery.
          </h2>

          <p className="mt-8 text-gray-600 leading-8">
            Dr. Laiba Kayani is a Doctor of Physical Therapy (DPT)
            who is currently doing her clinical house job at Holy Family Hospital,
            Rawalpindi. She is dedicated to helping patients restore movement,
            reduce pain, and regain confidence through evidence-based
            physiotherapy.
          </p>

          <p className="mt-6 text-gray-600 leading-8">
            She provides personalized treatment plans for stroke rehabilitation,
            pain management, neck pain, knee pain, sciatica, and offers home
            physiotherapy sessions across Rawalpindi and Islamabad.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-6">

            <div className="bg-[#FAF8F4] rounded-2xl p-5 shadow-sm">
              <h3 className="text-3xl font-bold text-[#6D8B74]">5-Year</h3>
              <p className="text-gray-600 mt-2">Doctor of Physical Therapy</p>
            </div>

            <div className="bg-[#FAF8F4] rounded-2xl p-5 shadow-sm">
              <h3 className="text-3xl font-bold text-[#6D8B74]">🏡</h3>
              <p className="text-gray-600 mt-2">Home Sessions Available</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;