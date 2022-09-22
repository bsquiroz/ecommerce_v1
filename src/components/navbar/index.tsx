import React, { useState } from "react";
import "./styles.css";

import Logo from "/images/logo.svg";
import IconCart from "/images/icon-cart.svg";
import IconHamburguesa from "/images/icon-menu.svg";
import Avatar from "/images/image-avatar.png";

import { Link } from "../Link";
import { useEcommerceContext } from "../../hooks/useEcommerceContext";

interface interfaceRootes {
    id: number;
    path: string;
    text: string;
}

const rootes: interfaceRootes[] = [
    {
        id: 0,
        path: "#",
        text: "Colections",
    },
    {
        id: 1,
        path: "#",
        text: "Men",
    },
    {
        id: 2,
        path: "#",
        text: "Women",
    },
    {
        id: 3,
        path: "#",
        text: "About",
    },
    {
        id: 4,
        path: "#",
        text: "Contact",
    },
];

export const Navbar = () => {
    const { handleCartShow, numberProducts } = useEcommerceContext();

    const [showMenu, setShowMenu] = useState(false);

    const styleMenu = showMenu ? "navbar_menu navbar_menu-show" : "navbar_menu";
    return (
        <div className="content_navbar">
            <nav className="navbar">
                <div className="logo">
                    <img
                        className="iconMenu"
                        src={IconHamburguesa}
                        alt="menu"
                        onClick={() => setShowMenu(true)}
                    />
                    <a href="#">
                        <img src={Logo} alt="logo" />
                    </a>
                </div>

                <ul className={styleMenu}>
                    <div
                        className="iconClose"
                        onClick={() => setShowMenu(false)}
                    >
                        X
                    </div>
                    {rootes.map(({ id, path, text }) => (
                        <Link key={id} path={path} text={text} />
                    ))}
                </ul>

                <div className="navbar_user">
                    <div className="btn boxCart" onClick={handleCartShow}>
                        {numberProducts !== 0 && (
                            <span className="amount">{numberProducts}</span>
                        )}

                        <img src={IconCart} alt="icono carrito" />
                    </div>
                    <div className="boxUser">
                        <img src={Avatar} alt="user" />
                    </div>
                </div>
            </nav>
        </div>
    );
};
