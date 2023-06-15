// import './globals.css'
import { Inter, Comforter } from "next/font/google";
import Link from "next/link";
import Provider from "./provider";

const inter = Inter({ subsets: ["latin"] });
const comforter = Comforter({
    weight: "400",
    style: "normal",
    subsets: ["vietnamese"],
});

export const metadata = {
    title: {
        template: "%s | Next tutorial",
        default: "Next tutorial",
    },
    description: "Web application built with Next.js",
    keywords: ["Next.js"],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <header className="header">
                    <div className="logo">
                        <Link href="/" className={comforter.className}>
                            Logo
                        </Link>
                    </div>

                    <nav className="nav">
                        <Link href="/about">About</Link>
                        <Link href="/articles">Articles</Link>
                        <Link href="/projects">Projects</Link>
                        <Link href="/uses">Uses</Link>
                        <Link href="/posts">Posts</Link>
                    </nav>
                </header>

                <Provider>{children}</Provider>

                <footer className="footer">App Footer</footer>
            </body>
        </html>
    );
}
