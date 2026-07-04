import { Phone, Mail, MapPin } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-[#2E3A2F] text-white py-12">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-3xl font-bold">
          Dr. Laiba Kayani
        </h2>

        <p className="text-gray-300 mt-2">
          Physiotherapist | Home Physiotherapy Services
        </p>

        <div className="mt-8 space-y-3">

          <div className="flex items-center gap-3">
            <Phone size={18}/>
            <span>+92 344 1667551</span>
          </div>

          <div className="flex items-center gap-3">
            <Mail size={18}/>
            <span>laibakayania18@gmail.com</span>
          </div>

          <div className="flex items-center gap-3">
            <MapPin size={18}/>
            <span>Rawalpindi & Islamabad</span>
          </div>

        </div>

        <hr className="my-8 border-gray-600"/>

        <p className="text-center text-gray-400">
          © 2026 Dr. Laiba Kayani. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;