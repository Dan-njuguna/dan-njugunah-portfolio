import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import AIChatButton from "./AIChatButton";

export default function Navbar() {
    return <header className="sticky top-0 bg-background">
        <div className="nax-w-3x1 mx-auto flex flex-wrap justify-between gap-3">
            <nav className="space-x-4 font-medium">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/services">Services</Link>
                <Link href="/pricing">Pricing</Link>
                <Link href="/contact">Contact</Link>
            </nav>
            <div className="flex items-center gap-4">
                <AIChatButton />
                <ThemeToggle />
            </div>
        </div>
    </header>
}