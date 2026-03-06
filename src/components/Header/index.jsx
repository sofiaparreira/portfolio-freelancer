import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import PrimaryButton from "../PrimaryButton";
import { smoothScrollTo } from "../../utils/smoothScrollTo";

const navItems = [
    { label: "Sobre mim", href: "#inicio" },
    { label: "Serviços", href: "#servicos" },
    { label: "Projetos", href: "#projetos" },
];

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 z-50 w-full border-b border-zinc-200/60 bg-white/85 backdrop-blur-md">
            <nav className="flex items-center justify-between px-6 py-3 md:px-10 lg:px-12">
                <div className="flex items-center gap-3 text-zinc-900">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-code-slash" viewBox="0 0 16 16">
                        <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0" />
                    </svg>
                    <span className="text-xs font-semibold uppercase tracking-[0.2em]">Sofia P</span>
                </div>

                <ul className="hidden items-center gap-8 text-sm font-medium text-zinc-800 lg:flex">
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <a
                                href={item.href}
                                onClick={(event) => {
                                    event.preventDefault();
                                    smoothScrollTo(item.href);
                                }}
                                className="cursor-pointer transition-colors hover:text-zinc-950"
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="hidden lg:block">
                    <PrimaryButton text="Contato" href="#contato" />
                </div>

                <button
                    type="button"
                    onClick={() => setIsOpen(true)}
                    className="inline-flex h-11 w-11 items-center justify-center border border-zinc-300 bg-white text-zinc-900 transition-colors hover:bg-zinc-100 lg:hidden"
                    aria-label="Abrir menu"
                >
                    <Menu size={20} />
                </button>
            </nav>

            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            className="fixed inset-0 z-40 bg-black/55 lg:hidden"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                        />

                        <motion.aside
                            className="fixed right-0 top-0 z-50 flex h-screen w-[84%] max-w-sm flex-col justify-between border-l border-zinc-700/80 bg-zinc-950 p-6 text-white lg:hidden"
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", stiffness: 320, damping: 30 }}
                        >
                            <div>
                                <div className="mb-10 flex items-center justify-between">
                                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-300">Menu</span>
                                    <button
                                        type="button"
                                        onClick={() => setIsOpen(false)}
                                        className="inline-flex h-10 w-10 items-center justify-center border border-zinc-700 bg-zinc-900 text-zinc-200"
                                        aria-label="Fechar menu"
                                    >
                                        <X size={18} />
                                    </button>
                                </div>

                                <ul className="space-y-4">
                                    {navItems.map((item) => (
                                        <li key={item.href}>
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    smoothScrollTo(item.href);
                                                    setIsOpen(false);
                                                }}
                                                className="w-full border border-zinc-700 bg-zinc-900 px-4 py-3 text-left text-sm font-medium uppercase tracking-[0.15em] text-zinc-100 transition-colors hover:bg-zinc-800"
                                            >
                                                {item.label}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <PrimaryButton
                                text="Contato"
                                className="w-full justify-center"
                                isLight
                                href="#contato"
                            />
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;