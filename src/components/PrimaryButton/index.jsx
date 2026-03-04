import { motion } from "framer-motion";

const PrimaryButton = ({ text, isLight }) => {
  return (
    <motion.button
      whileHover={{ y: -3 }}
      whileTap={{ y: 0, scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 18 }}
      className={`
        py-3.5 px-8 cursor-pointer
        text-xs uppercase tracking-[0.15em] font-medium
        transition-colors duration-300
        ${isLight
          ? `
            bg-white 
            text-[var(--primary-dark)] 
            border border-zinc-200 
            hover:bg-zinc-50 
            hover:border-zinc-300
          `
          : `
            bg-[var(--primary-dark)] 
            text-white 
            hover:bg-[#3A3A3A]
          `
        }
      `}
    >
      {text}
    </motion.button>
  );
};

export default PrimaryButton;