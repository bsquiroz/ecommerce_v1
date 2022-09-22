import React from "react";
import { GallerySidebar } from "../gallerySidebar";
import { InfoProduct } from "../infoProduct";
import "./styles.css";

export const MainGallery = () => {
    return (
        <div className="main">
            <GallerySidebar />
            <InfoProduct />
        </div>
    );
};
