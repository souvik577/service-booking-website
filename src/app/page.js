import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-gray-50 min-h-screen">

      {/* TOP BAR */}
      <header className="bg-blue-600 text-white px-6 py-3 flex items-center justify-between">
        <div className="font-bold text-lg">LOGO + NAME</div>

        <div className="hidden md:flex items-center gap-4">
          <select className="text-black px-2 py-1 rounded">
            <option>Select City</option>
            <option>Kolkata</option>
            <option>Delhi</option>
            <option>Mumbai</option>
          </select>

          <input
            type="text"
            placeholder="Search for electrician, plumber..."
            className="px-3 py-1 rounded w-72 text-black"
          />
        </div>

        <Link
          href="/login"
          className="bg-white text-blue-600 px-4 py-1 rounded font-semibold"
        >
          Login / Sign Up
        </Link>
      </header>

      {/* HERO SECTION */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 py-12 bg-white">
        <div className="max-w-xl">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">
            Book Trusted Mechanics & Home Services Near You
          </h1>
          <p className="text-gray-600 mb-6">
            Fast • Verified • Affordable
          </p>

          <div className="flex gap-4">
            <Link
              href="/services"
              className="bg-orange-500 text-white px-6 py-3 rounded font-semibold"
            >
              Book a Service
            </Link>

            <Link
              href="/partner"
              className="bg-blue-600 text-white px-6 py-3 rounded font-semibold"
            >
              Become a Partner
            </Link>
          </div>
        </div>

        {/* Image Placeholder */}
        <div className="hidden md:block">
          <img
            src="/hero.png"
            alt="services"
            className="w-96"
          />
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="px-8 py-10">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Popular Services
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
  {services.map((service) => (
    <div
      key={service.name}
      className="bg-white p-6 rounded-lg shadow hover:shadow-lg text-center cursor-pointer"
    >
      <div className="text-4xl mb-3">{service.icon}</div>
      <p className="text-gray-800 font-semibold text-lg">
        {service.name}
      </p>
    </div>
  ))}
</div>

      </section>

    </main>
  );
}

const services = [
  { name: "Electrician", icon: "⚡" },
  { name: "Mechanic", icon: "🛠️" },
  { name: "AC Repair", icon: "❄️" },
  { name: "Plumbing", icon: "🚰" },
  { name: "Appliance Repair", icon: "📺" },
];
