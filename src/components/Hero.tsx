export default function Hero() {
    return (
      <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Build fast. Launch faster.
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-xl mb-6">
          Your infrastructure for modern go-to-market systems. Powered by AI. Delivered with precision.
        </p>
        <a
          href="#"
          className="inline-block bg-black text-white px-6 py-3 rounded-full text-lg hover:bg-gray-900 transition"
        >
          Get Started
        </a>
      </section>
    );
  }
  