import Link from "next/link";

export default function Footer() {
    return <footer>
        <nav className="max-w-3x1 mx-auto flex gap-3 p-3">
            <Link href="/privacy">Privacy Policy</Link>
        </nav>
    </footer>
}