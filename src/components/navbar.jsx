import { useState } from "react";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* NAVBAR */}
            <nav className="flex items-center justify-between px-6 md:px-12 py-6 relative z-50">

                {/* LEFT LINKS (Desktop) */}
                <ul className="hidden md:flex gap-8 text-lg font-medium cursor-pointer">
                    <li className="hover:text-purple-500">Services</li>
                    <li className="hover:text-purple-500">Work</li>
                    <li className="hover:text-purple-500">About</li>
                </ul>

                {/* LOGO */}
                <h2 className="text-2xl font-bold flex items-center gap-2">
                    ✨ Astratto
                </h2>

                {/* RIGHT CTA (Desktop) */}
                <div className="hidden md:flex items-center text-lg font-medium gap-8">
                    <span className="cursor-pointer hover:text-purple-500">Careers</span>
                    <button className="px-5 py-2 rounded-full border border-purple-500 text-purple-600 hover:bg-purple-500 hover:text-white transition">
                        Contact Us ↗
                    </button>
                </div>

                {/* HAMBURGER (Mobile) */}
                <button
                    onClick={() => setOpen(true)}
                    className="md:hidden text-3xl"
                >
                    ☰
                </button>
            </nav>

            {/* MOBILE SLIDE MENU */}
            <div
                className={`fixed top-0 right-0 h-full w-[75%] bg-white shadow-2xl transform transition-transform duration-300 z-50
                ${open ? "translate-x-0" : "translate-x-full"}`}
            >
                {/* CLOSE */}
                <button
                    onClick={() => setOpen(false)}
                    className="absolute top-6 right-6 text-3xl"
                >
                    ✕
                </button>

                {/* MENU ITEMS */}
                <ul className="flex flex-col items-center justify-center h-full gap-10 text-xl font-semibold">
                    <li onClick={() => setOpen(false)}>Services</li>
                    <li onClick={() => setOpen(false)}>Work</li>
                    <li onClick={() => setOpen(false)}>About</li>
                    <li onClick={() => setOpen(false)}>Careers</li>

                    <button className="mt-6 px-6 py-3 rounded-full bg-purple-500 text-white">
                        Contact Us ↗
                    </button>
                </ul>
            </div>

            {/* BACKDROP */}
            {open && (
                <div
                    onClick={() => setOpen(false)}
                    className="fixed inset-0 bg-black/40 z-40"
                />
            )}
        </>
    );
};

export default Navbar;
