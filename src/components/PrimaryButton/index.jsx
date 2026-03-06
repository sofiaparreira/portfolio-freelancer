import { motion } from "framer-motion";
import { smoothScrollTo } from "../../utils/smoothScrollTo";

const PrimaryButton = ({
  text,
  isLight,
  href,
  target,
  rel,
  onClick,
  icon,
  className = "",
}) => {
  const baseClasses = `
    inline-flex items-center gap-2 rounded-none
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
    ${className}
  `;

  if (href) {
    const isSectionLink = href.startsWith("#") && !target;

    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        onClick={(event) => {
          if (isSectionLink) {
            event.preventDefault();
            smoothScrollTo(href);
          }
        }}
        whileHover={{ y: -3 }}
        whileTap={{ y: 0, scale: 0.98 }}
        transition={{ type: "spring", stiffness: 300, damping: 18 }}
        className={baseClasses}
      >
        {icon}
        {text}
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ y: -3 }}
      whileTap={{ y: 0, scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 18 }}
      className={baseClasses}
    >
      {icon}
      {text}
    </motion.button>
  );
};

export default PrimaryButton;