import { motion } from 'framer-motion';

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-16 px-6 bg-black">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            We are a GTM engineering firm.
          </h2>
          <p className="text-lg text-gray-400 mb-4">
            We don't sell dashboards.
          </p>
          <p className="text-lg font-medium text-emerald-500">
            We deliver clarity.
          </p>
        </motion.div>

        <motion.p 
          className="text-lg text-gray-300 text-center mb-16 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Our team operates a proprietary infrastructure stack that layers signal intelligence, buyer graph data, and network overlays into your existing go-to-market motion.
        </motion.p>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {functions.map((func, index) => (
            <motion.div 
              key={index}
              className="bg-[#111827] p-8 rounded-xl border border-emerald-900 hover:border-emerald-700 transition-colors duration-200 shadow-lg"
              variants={itemVariants}
            >
              <h3 className="text-xl font-bold mb-4 text-emerald-500">{func.title}</h3>
              <p className="text-gray-300 leading-relaxed">{func.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 