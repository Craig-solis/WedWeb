import "./globals.css";

export default function Home() {
  return (
    <section className="flex flex-col pt-28 items-center w-screen h-screen text-[var(--foreground)]">
      <div className="bg-[url('/20250802_011945000_iOS.jpg')] bg-cover bg-no-repeat bg-[position:center_10%] w-full max-w-4xl h-150 rounded-lg border-10 border-[var(--foreground)] mt-4"></div>
      <div className="w-full h-40 flex items-center justify-center">
        <h1 className="text-2xl sm:text-4xl font-bold">Welcome to the Home Page</h1>
      </div>
    </section>
  );
}
