import { motion } from 'framer-motion';

export default function ImagineSection() {
  const signals = [
    "The VP of Sales who just left one of your customers and joined a competitor's pipeline",
    "40 webinar attendees who now work at your top 100 target accounts",
    "Buyers engaging with your investor's portfolio companies",
    "People following your competitor's founders on LinkedIn",
    "Inbound leads who were just promoted into budget-holding roles",
    "Accounts your customers sell to — that you're not selling to"
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
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Imagine if your GTM motion knew to prioritize:
        </motion.h2>
        
        <motion.div 
          className="grid gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {signals.map((signal, index) => (
            <motion.div 
              key={index}
              className="p-6 bg-black rounded-xl border border-emerald-900 hover:border-emerald-700 transition-colors duration-200 shadow-lg"
              variants={itemVariants}
            >
              <p className="text-lg text-gray-300">{signal}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="text-lg text-gray-300 mb-4">
            We built the system to surface these paths.
          </p>
          <p className="text-lg font-medium text-emerald-500">
            We apply it where it matters most.
          </p>
        </motion.div>
      </div>
    </section>
  );
} 