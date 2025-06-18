import Image from "next/image";
import Link from "next/link";
export default function Footer() {
    const footerLinks = [
                    { src: "/socials/insta.png", alt: "Instagram Logo", href: "https://www.instagram.com/uncdrd/" },
                    { src: "/socials/facebook.png", alt: "Facebook Logo", href: "https://www.facebook.com/DolaReDandiya" },
                    { src: "/socials/tiktok.png", alt: "Tiktok Logo", href: "https://www.tiktok.com/@dolaredandiya" },
                    { src: "/socials/youtube.png", alt: "YouTube Logo", href: "https://www.youtube.com/playlist?app=desktop&list=PLQwRtHjfTgb2jZnq9-qRpawKJuzywCWpo" },
                ];
    return (
    <footer className="bg-prussian-500 h-24 w-full">
        <div className="h-full flex items-center justify-center">
            <ul className="flex space-x-12 text-champagne-500 justify-center items-center">
                {footerLinks.map((item, idx) => (
                    <li key={idx}>
                        <Link href={item.href} target="_blank" rel="noopener noreferrer">
                            <Image src={item.src} alt={item.alt} width={48} height={48} />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    </footer>
    );
}