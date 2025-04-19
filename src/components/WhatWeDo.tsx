export default function WhatWeDo() {
  const functions = [
    {
      title: "Outbound Activation",
      description: "We map your market and surface accounts with timing, trust, and proximity advantages."
    },
    {
      title: "Inbound Activation",
      description: "We enrich, reroute, and score inbound leads based on social, behavioral, and career signals."
    },
    {
      title: "Sales Intelligence",
      description: "We deliver context and clarity your reps can act on immediately — not a spreadsheet they'll ignore."
    }
  ];

  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            We are a GTM engineering firm.
          </h2>
          <p className="text-xl text-gray-400 mb-4">
            We don't sell dashboards.
          </p>
          <p className="text-xl font-medium text-emerald-500">
            We deliver clarity.
          </p>
        </div>

        <p className="text-lg text-gray-300 text-center mb-16">
          Our team operates a proprietary infrastructure stack that layers signal intelligence, buyer graph data, and network overlays into your existing go-to-market motion.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {functions.map((func, index) => (
            <div 
              key={index}
              className="bg-gray-900 p-8 rounded-lg border border-emerald-900 hover:border-emerald-700 transition-colors duration-200"
            >
              <h3 className="text-xl font-bold mb-4 text-emerald-500">{func.title}</h3>
              <p className="text-gray-300">{func.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 