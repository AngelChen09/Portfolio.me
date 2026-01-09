"use client";
import './Navbar.css';

export interface linksProps {
    links: string[];
}

export default function Navbar({links} : linksProps) {
    return (
        <div className="nav">
            <div className="linktexts">
                {links.map((link) => (
                    <button key={link} type="button" onClick={() => {
                        document.getElementById(link.toLowerCase())?.scrollIntoView({behavior:"smooth"});
                    }}>
                        {link}
                    </button>
                ))}
            </div>
        </div>
    )
}