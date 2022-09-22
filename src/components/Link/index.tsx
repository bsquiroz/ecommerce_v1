import React from "react";
import "./styles.css";

interface interfaceLink {
    path: string;
    text: string;
}

export const Link = ({ path, text }: interfaceLink) => {
    return (
        <li className="link">
            <a href={path}>{text}</a>
            <div className="line"></div>
        </li>
    );
};
