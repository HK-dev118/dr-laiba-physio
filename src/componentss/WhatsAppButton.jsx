import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/923441667551"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-xl hover:scale-110 hover:bg-green-600 transition duration-300 z-50"
    >
      <FaWhatsapp size={30} />
    </a>
  );
}

export default WhatsAppButton;