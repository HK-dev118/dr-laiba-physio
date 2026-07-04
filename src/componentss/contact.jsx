import { Phone, Mail, MapPin } from "lucide-react";

function Contact() {
  return (
   <section
  id="contact"
  className="py-24 bg-[#FAF8F4]"
>
      <div className="max-w-6xl mx-auto px-8">

        <div className="text-center mb-12">
          <p className="uppercase tracking-[4px] text-[#6D8B74]">
            Contact
          </p>

          <h2 className="text-5xl font-bold text-[#2E3A2F] mt-4">
            Get in Touch
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white rounded-3xl p-8 shadow">
            <Phone className="text-[#6D8B74]" size={36} />
            <h3 className="mt-4 text-xl font-semibold">Phone</h3>
            <a
href="tel:+923441667551"
className="hover:text-[#6D8B74]"
>
+92 344 1667551
</a>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow">
            <Mail className="text-[#6D8B74]" size={36} />
            <h3 className="mt-4 text-xl font-semibold">Email</h3>
           <a
href="mailto:laibakayania18@gmail.com"
className="hover:text-[#6D8B74]"
>
laibakayania18@gmail.com
</a>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow">
            <MapPin className="text-[#6D8B74]" size={36} />
            <h3 className="mt-4 text-xl font-semibold">Location</h3>
            <p className="mt-2">
              Rawalpindi & Islamabad
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;