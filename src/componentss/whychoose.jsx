import { ShieldCheck, House, HeartHandshake, Clock } from "lucide-react";

function WhyChoose() {
  const features = [
    {
      icon: <ShieldCheck size={36} className="text-[#6D8B74]" />,
      title: "Professional Care",
      text: "Evidence-based physiotherapy tailored to your needs."
    },
    {
      icon: <House size={36} className="text-[#6D8B74]" />,
      title: "Home Visits",
      text: "Comfortable treatment in your own home."
    },
    {
      icon: <HeartHandshake size={36} className="text-[#6D8B74]" />,
      title: "Patient-Centered",
      text: "Every treatment plan is personalized for recovery."
    },
    {
      icon: <Clock size={36} className="text-[#6D8B74]" />,
      title: "Flexible Booking",
      text: "Convenient appointment scheduling."
    },
  ];

  return (
  <section
  id="why-choose"
  className="py-24 bg-white"
>
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[4px] text-[#6D8B74]">
            Why Choose Dr. Laiba?
          </p>

          <h2 className="text-5xl font-bold text-[#2E3A2F] mt-4">
            Care You Can Trust
          </h2>

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto">
            Combining compassionate care with modern physiotherapy techniques to
            help you recover with confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-[#FAF8F4] rounded-3xl p-8 text-center hover:shadow-xl transition"
            >
              <div className="flex justify-center mb-5">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold text-[#2E3A2F]">
                {item.title}
              </h3>

              <p className="mt-4 text-gray-600">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;