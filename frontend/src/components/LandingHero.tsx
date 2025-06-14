import Image from "next/image";

export default function LandingHeroSection() {
  return (
    <section className="min-h-[500px] py-10 grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-4 sm:px-6">
      <div className="p-4 text-center md:text-left animate-fadeInUp">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-100 mb-4">
          Sheffield Anime Group
        </h1>
        <p className="text-gray-100 text-base sm:text-lg">
          Join Sheffield&apos;s most vibrant anime community! Watch, discuss, and
          celebrate anime with fellow fans in the Steel City. Join the Discord.
        </p>
      </div>
      <div className="relative w-full h-[250px] sm:h-[300px] md:h-full overflow-hidden rounded-lg animate-zoomIn">
        <Image
          src="/landing_hero.jpg"
          alt="Hero image"
          fill
          className="object-cover rounded-lg"
          sizes="(min-width: 768px) 50vw, 100vw"
          priority
        />
      </div>
    </section>
  );
}
