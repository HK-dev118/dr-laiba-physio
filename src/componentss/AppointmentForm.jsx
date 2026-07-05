import { useState } from "react";
import emailjs from "@emailjs/browser";

function AppointmentForm() {
  const [form, setForm] = useState({
    from_name: "",
    phone: "",
    location: "",
    date: "",
    time: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (
      !form.from_name ||
      !form.phone ||
      !form.location ||
      !form.date ||
      !form.time ||
      !form.service
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    setLoading(true);
    setSuccess("");

    emailjs
      .send(
        "service_zxr8gbe",
        "template_0go1liz",
        form,
        "9R6j73PhQgGqRUla9"
      )
      .then(() => {
        setSuccess("✅ Appointment submitted successfully!");

        setForm({
          from_name: "",
          phone: "",
          location: "",
          date: "",
          time: "",
          service: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Something went wrong. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section id="appointment" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-8">
        <div className="text-center mb-12">
          <p className="uppercase tracking-[4px] text-[#6D8B74]">
            Appointment
          </p>

          <h2 className="text-5xl font-bold text-[#2E3A2F] mt-4">
            Book Your Session
          </h2>

          <p className="mt-4 text-gray-600">
            Fill in your details and Dr. Laiba will contact you shortly.
          </p>
        </div>

        <form onSubmit={sendEmail} className="space-y-6">
          <input
            type="text"
            name="from_name"
            placeholder="Full Name"
            value={form.from_name}
            onChange={handleChange}
            className="w-full border rounded-xl p-4"
            required
          />

          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="w-full border rounded-xl p-4"
            required
          />

          <input
            type="time"
            name="time"
            value={form.time}
            onChange={handleChange}
            className="w-full border rounded-xl p-4"
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="w-full border rounded-xl p-4"
            required
          />

          <input
            type="text"
            name="location"
            placeholder="Location"
            value={form.location}
            onChange={handleChange}
            className="w-full border rounded-xl p-4"
            required
          />

          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            className="w-full border rounded-xl p-4"
            required
          >
            <option value="">Select Service</option>
            <option value="Stroke Rehabilitation">Stroke Rehabilitation</option>
            <option value="Pain Management">Pain Management</option>
            <option value="Neck Pain">Neck Pain</option>
            <option value="Knee Pain">Knee Pain</option>
            <option value="Sciatica">Sciatica</option>
            <option value="Home Session">Home Session</option>
          </select>

          <textarea
            rows="5"
            name="message"
            placeholder="Describe your condition..."
            value={form.message}
            onChange={handleChange}
            className="w-full border rounded-xl p-4"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#6D8B74] text-white py-4 rounded-xl hover:bg-[#5c7763] transition disabled:opacity-50"
          >
            {loading ? "Sending..." : "Submit Appointment"}
          </button>

          {success && (
            <p className="text-center text-green-600 font-semibold">
              {success}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default AppointmentForm;