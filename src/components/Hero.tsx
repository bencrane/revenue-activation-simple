import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex flex-col items-center justify-center text-center px-6 bg-black py-16">
      <motion.div 
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Revenue Activation
        </motion.h1>
        <motion.h2 
          className="text-xl md:text-2xl font-medium text-emerald-500 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          The GTM Engineering Firm
        </motion.h2>
        <motion.p 
          className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          We surface the revenue paths your team is currently blind to.
        </motion.p>
        <motion.p 
          className="text-lg text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Using proprietary signal detection and relational mapping infrastructure, we identify the accounts and buyers your CRM, paid motion, and outbound efforts are missing.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <a
            href="#request-access"
            className="inline-block bg-[#10B981] text-white px-6 py-3 rounded-xl text-lg font-medium hover:bg-[#0EA271] hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Request Access
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
