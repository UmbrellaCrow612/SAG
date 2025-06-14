export default function WhatWeDoSection() {
  return (
    <section className="px-4 py-12 flex flex-col md:flex-row items-center gap-8">
      <div className="w-full md:w-1/2">
        <img
          src="/landing_hero_2.jpg"
          alt="Sheffield Anime Group"
          className="w-full h-auto rounded-2xl"
        />
      </div>

      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl font-bold mb-4 text-gray-100">What We Do</h2>
        <p className="text-gray-100 text-lg mb-4">
          Sheffield Anime Group is a community of passionate fans who gather to
          explore the best of anime together. We host regular watch parties,
          cosplay events, and discussions around both classic and new series.
          Whether you&apos;re a seasoned fan or just getting started, there&apos;s a place
          for you in our welcoming community.
        </p>
        <p className="text-gray-100 text-lg">
          Join us for themed nights, quizzes, creative showcases, and much more.
          We&apos;re here to celebrate anime culture in all its forms!
        </p>
      </div>
    </section>
  );
}
