import { metaData } from "@/metaData";

export default function CallToActionSection() {
  return (
    <section className="bg-purple-800 text-white py-16 px-4 text-center rounded-2xl">
      <h2 className="text-4xl font-bold mb-4">Join Us</h2>
      <p className="text-lg mb-6">
        Be part of Sheffield’s most passionate anime community. Watch, chat, and
        connect with fellow fans!
      </p>
      <a
        href={metaData.discordLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-white text-purple-800 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-purple-100 transition"
      >
        Join Our Discord
      </a>
    </section>
  );
}
