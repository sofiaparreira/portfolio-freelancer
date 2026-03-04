import PrimaryButton from "../PrimaryButton";

const Header = () => {
    return (
        <header>
            <nav className="flex justify-between items-center py-2 px-8">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-code-slash" viewBox="0 0 16 16">
                    <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0" />
                </svg>
                <ul className="flex gap-8 items-center text-zinc-800 font-medium text-sm">
                    <li>Sobre mim</li>
                    <li>Serviços</li>
                    <li>Projetos</li>
                </ul>
                <button
                    className={`py-3 cursor-pointer hover:bg-[#3A3A3A] duration-300 px-4 text-xs uppercase tracking-[0.15em] font-medium bg-[var(--primary-dark)] text-white`}>
                    Contato
                </button>
            </nav>
        </header>
    )
}

export default Header;