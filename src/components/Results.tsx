import { motion } from 'framer-motion';

export default function Results() {
  const results = [
    "Lower CAC",
    "Higher reply rates",
    "Shorter sales cycles",
    "Less wasted spend",
    "More confidence in where your revenue is actually coming from"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-16 px-6 bg-[#111827]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          What Happens When It's Plugged In
        </motion.h2>

        <motion.div 
          className="grid gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {results.map((result, index) => (
            <motion.div 
              key={index}
              className="p-6 bg-black rounded-xl border border-emerald-900 shadow-lg"
              variants={itemVariants}
            >
              <p className="text-lg font-medium text-emerald-500">{result}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="text-lg text-gray-300">
            This isn't a creative experiment.
          </p>
          <p className="text-lg font-medium text-emerald-500">
            It's infrastructure.
          </p>
        </motion.div>
      </div>
    </section>
  );
} 