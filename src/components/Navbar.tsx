"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import AIChatButton from "./AIChatButton";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (navRef.current && !navRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <header className="sticky top-0 bg-background w-full">
            <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center p-4">
                <div className="flex justify-between w-full md:w-auto" ref={navRef}>
                    <nav className={`space-y-4 font-medium ${isOpen ? "block" : "hidden"} md:flex md:space-y-0 md:space-x-4`}>
                        <Link href="/">Home</Link>
                        <Link href="/about">About</Link>
                        <Link href="/projects">Projects</Link>
                        <Link href="/services">Services</Link>
                        <Link href="/pricing">Pricing</Link>
                        <Link href="/contact">Contact</Link>
                    </nav>
                    <button
                        className="md:hidden text-xl"
                        onClick={toggleMenu}
                    >
                        ☰
                    </button>
                </div>
                <div className="flex items-center gap-4">
                    <AIChatButton />
                    <ThemeToggle />
                </div>
            </div>
        </header>
    );
}