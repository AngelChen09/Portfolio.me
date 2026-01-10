"use client";
import './Navbar.css';
import { useEffect, useState } from 'react';

export interface linksProps {
    links: string[];
}

export default function Navbar({links} : linksProps) {
    const [fadeOut, setFadeOut] = useState(false);
    const [lockNavbar, setLockNavbar] = useState(false);
    
    // useEffect() to moniter scroll input
    useEffect(() => {
    let prevY = window.scrollY;

    // update function to determine navbar appearance (fadeOut)
    const update = () => {
        let currY = window.scrollY;
        if (!lockNavbar) {
            if ((prevY < currY) && (currY > (innerHeight / 4))) {
                setFadeOut(true);
            } else {
                setFadeOut(false);
            }
        }       
        prevY = currY;
    };

    // add update function to windows event listener
    window.addEventListener("scroll", update);
    return () => window.removeEventListener("scroll", update);
    }, [])

    // useEffect() to monitor mouse position
    useEffect(() => {
    const handleMousePos = (e: MouseEvent) => {
        if ((e.clientY < (innerHeight / 4)) && !lockNavbar) {
            setFadeOut(false);
        } else if (e.clientY > (innerHeight / 2) && lockNavbar) {
            setFadeOut(true);
        }
    };

    window.addEventListener("mousemove", handleMousePos);
    return () => window.removeEventListener("mousemove", handleMousePos);

    }, [])

    const handleNavClick = () => {
        setLockNavbar(true);

        setTimeout(() => {
            setLockNavbar(false);
        }, 600);
    }
    
    
    return (
        <div className={`nav ${fadeOut? "-translate-y-[200%]" : "translate-y-0"}`}>
            <div className="linktexts">
                {links.map((link) => (
                    <button key={link} type="button" onClick={() => {
                        handleNavClick();
                        document.getElementById(link.toLowerCase())?.scrollIntoView({behavior:"smooth"});
                    }}>
                        {link}
                    </button>
                ))}
            </div>
        </div>
    )
}