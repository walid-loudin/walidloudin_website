export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6 text-black">
      <div className="w-full max-w-5xl text-center">
        <p className="mb-8 text-2xl font-black uppercase tracking-[0.35em] sm:text-3xl md:text-4xl">
          Walid Loudin
          <br />
          Software Engineer
        </p>

        <h1 className="text-6xl font-black leading-none tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
          Website Coming Soon
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-xl font-semibold leading-9 sm:text-2xl md:text-3xl">
          I&apos;m currently building a new website. <br />
          Check back soon to see my
          latest projects and work.
        </p>

        <div className="mt-12">
          <span className="inline-flex rounded-full border-4 border-black px-8 py-4 text-2xl font-black uppercase tracking-wide sm:text-3xl">
            Launching Soon
          </span>
        </div>
      </div>
    </main>
  );
}