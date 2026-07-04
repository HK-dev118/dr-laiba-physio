import {
  Activity,
  HeartPulse,
  Bone,
  PersonStanding,
  House,
  Accessibility,
} from "lucide-react";

function Services() {
  const services = [
    {
      icon: <HeartPulse size={34} className="text-[#6D8B74]" />,
      title: "Stroke Rehabilitation",
      description:
        "Helping patients regain movement, balance, and independence after neurological conditions.",
    },
    {
      icon: <Activity size={34} className="text-[#6D8B74]" />,
      title: "Pain Management",
      description:
        "Evidence-based treatment plans to relieve chronic and acute pain safely.",
    },
    {
      icon: <Bone size={34} className="text-[#6D8B74]" />,
      title: "Neck & Knee Pain",
      description:
        "Specialized therapy to reduce stiffness, improve mobility, and restore function.",
    },
    {
      icon: <Accessibility size={34} className="text-[#6D8B74]" />,
      title: "Sciatica Treatment",
      description:
        "Targeted exercises and manual therapy to relieve nerve pain effectively.",
    },
    {
      icon: <PersonStanding size={34} className="text-[#6D8B74]" />,
      title: "Posture Correction",
      description:
        "Improve posture, prevent recurring pain, and enhance daily movement.",
    },
    {
      icon: <House size={34} className="text-[#6D8B74]" />,
      title: "Home Physiotherapy",
      description:
        "Professional physiotherapy sessions delivered comfortably at your home.",
    },
  ];

  return (
    <section
      id="services"
      className="py-28 bg-[#FAF8F4]"
    >
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-20">
          <p className="uppercase tracking-[5px] text-[#6D8B74] font-semibold">
            Our Services
          </p>

          <h2 className="text-5xl lg:text-6xl font-bold text-[#2E3A2F] mt-4">
            Helping You
            <span className="text-[#6D8B74]"> Move Better</span>
          </h2>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg leading-8">
            Personalized physiotherapy treatments designed to reduce pain,
            restore movement, and improve your quality of life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (

            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300"
            >

              <div className="w-16 h-16 rounded-2xl bg-[#EEF6EF] flex items-center justify-center mb-6">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-[#2E3A2F]">
                {service.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                {service.description}
              </p>

             <a
  href="#appointment"
  className="mt-8 inline-block text-[#6D8B74] font-semibold hover:translate-x-2 transition"
>
  Book This Service →
</a>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Services;