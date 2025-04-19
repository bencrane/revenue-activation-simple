export default function Hero() {
  return (
    <section className="min-h-[90vh] flex flex-col items-center justify-center text-center px-6 bg-black">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white">
          Revenue Activation
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium text-emerald-500 mb-8">
          The GTM Engineering Firm
        </h2>
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
          We surface the revenue paths your team is currently blind to.
        </p>
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
          Using proprietary signal detection and relational mapping infrastructure, we identify the accounts and buyers your CRM, paid motion, and outbound efforts are missing.
        </p>
        <a
          href="#request-access"
          className="inline-block bg-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-emerald-700 transition-colors duration-200"
        >
          Request Access
        </a>
      </div>
    </section>
  );
}
  