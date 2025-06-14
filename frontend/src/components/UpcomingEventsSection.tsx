import { metaData } from "@/metaData";

export default function UpcomingEventsSection() {
  return (
    <section className="py-16 px-4 text-white rounded-2xl shadow-inner">
      <h2 className="text-4xl font-bold text-center mb-10">Upcoming Events</h2>
      <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2">
        {metaData.events.map((event, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition"
          >
            <p className="text-sm text-gray-400 mb-1">{event.date}</p>
            <h3 className="text-2xl font-semibold mb-2 text-white">{event.title}</h3>
            <p className="text-gray-300 mb-3">{event.description}</p>
            <p className="text-sm text-purple-400 font-medium">
              {event.location}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
