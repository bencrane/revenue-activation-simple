import { motion } from 'framer-motion';

export default function FinalCTA() {
  return (
    <section id="request-access" className="py-16 px-6 bg-black text-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          We're onboarding a limited number of early teams.
        </motion.h2>
        <motion.p 
          className="text-lg text-gray-300 mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          If you believe your pipeline is leaving winnable revenue on the table — we'll show you where.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a
            href="#request-access"
            className="inline-block bg-[#10B981] text-white px-6 py-3 rounded-xl text-lg font-medium hover:bg-[#0EA271] hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Request Access
          </a>
        </motion.div>
      </div>
    </section>
  );
} 