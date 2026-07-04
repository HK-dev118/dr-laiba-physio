import { FaWhatsapp } from "react-icons/fa";

function AppointmentCTA() {
  return (
    <section className="py-24 bg-[#6D8B74]">
      <div className="max-w-6xl mx-auto px-8 text-center">

        <h2 className="text-5xl font-bold text-white">
          Ready to Start Your Recovery?
        </h2>

        <p className="text-white/80 mt-6 text-lg max-w-2xl mx-auto">
          Book your physiotherapy session today and receive professional,
          personalized care in the comfort of your home.
        </p>

        <div className="flex justify-center gap-6 mt-10">
<a
  href="#appointment"
  className="bg-[#6D8B74] text-white px-8 py-4 rounded-full shadow-lg hover:bg-[#587160] hover:scale-105 transition duration-300"
>
  Book Appointment
</a>

          <a
            href="https://wa.me/923441667551"
            target="_blank"
            rel="noreferrer"
            className="border border-white text-white px-8 py-4 rounded-full flex items-center gap-3 hover:bg-white hover:text-[#6D8B74] transition"
          >
            <FaWhatsapp />
            WhatsApp
          </a>

        </div>

      </div>
    </section>
  );
}

export default AppointmentCTA;