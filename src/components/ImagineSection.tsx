export default function ImagineSection() {
  const signals = [
    "The VP of Sales who just left one of your customers and joined a competitor's pipeline",
    "40 webinar attendees who now work at your top 100 target accounts",
    "Buyers engaging with your investor's portfolio companies",
    "People following your competitor's founders on LinkedIn",
    "Inbound leads who were just promoted into budget-holding roles",
    "Accounts your customers sell to — that you're not selling to"
  ];

  return (
    <section className="py-24 px-6 bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
          Imagine if your GTM motion knew to prioritize:
        </h2>
        
        <div className="grid gap-6">
          {signals.map((signal, index) => (
            <div 
              key={index}
              className="p-6 bg-black rounded-lg border border-emerald-900 hover:border-emerald-700 transition-colors duration-200"
            >
              <p className="text-lg text-gray-300">{signal}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl text-gray-300 mb-4">
            We built the system to surface these paths.
          </p>
          <p className="text-xl font-medium text-emerald-500">
            We apply it where it matters most.
          </p>
        </div>
      </div>
    </section>
  );
} 