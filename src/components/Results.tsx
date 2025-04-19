import { FiCheck } from 'react-icons/fi';

export default function Results() {
  const results = [
    "Lower CAC",
    "Higher reply rates",
    "Shorter sales cycles",
    "Less wasted spend",
    "More confidence in where your revenue is actually coming from"
  ];

  return (
    <section className="py-24 px-6 bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">
          What Happens When It's Plugged In
        </h2>

        <div className="grid gap-6 mb-16">
          {results.map((result, index) => (
            <div 
              key={index}
              className="p-6 bg-black rounded-lg border border-emerald-900"
            >
              <p className="text-xl font-medium text-emerald-500">{result}</p>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <p className="text-xl text-gray-300">
            This isn't a creative experiment.
          </p>
          <p className="text-xl font-medium text-emerald-500">
            It's infrastructure.
          </p>
        </div>
      </div>
    </section>
  );
} 