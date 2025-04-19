import { FiTarget, FiTrendingUp, FiBarChart2 } from 'react-icons/fi';

export default function Features() {
  const features = [
    {
      title: "Precision Targeting",
      description: "Identify high-value accounts with precision-engineered algorithms that analyze buyer intent and company fit.",
      icon: <FiTarget className="w-10 h-10 text-gray-400" />
    },
    {
      title: "Revenue Acceleration",
      description: "Transform your pipeline with AI-powered insights that surface the most promising opportunities at the right time.",
      icon: <FiTrendingUp className="w-10 h-10 text-gray-400" />
    },
    {
      title: "Performance Analytics",
      description: "Track and optimize your revenue metrics with real-time dashboards that highlight what's working and what needs attention.",
      icon: <FiBarChart2 className="w-10 h-10 text-gray-400" />
    }
  ];

  return (
    <section className="py-24 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            What We Do
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Revenue Furnace transforms your go-to-market strategy with precision-engineered solutions designed for B2B revenue teams.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gray-800 p-8 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors duration-200"
            >
              <div className="mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 