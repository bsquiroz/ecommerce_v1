import React, { useState } from "react";
import { useEcommerceContext } from "../../hooks/useEcommerceContext";
import { useGallery } from "../../hooks/useGallery";

import "./styles.css";

export const Gallery = () => {
    const { handleModal } = useEcommerceContext();

    const { galleryItem, handleGalleryItem, photoBig } = useGallery();

    return (
        <div>
            <div className="principalPhoto" onClick={() => handleModal(true)}>
                <img src={photoBig?.imgBig} alt="imagen_grande" />
            </div>

            <div className="gallery">
                {galleryItem.map(({ id, name, imgSmoll, style }) => (
                    <div
                        key={id}
                        className={style}
                        onClick={() => handleGalleryItem(id)}
                    >
                        <img src={imgSmoll} alt={name} />
                    </div>
                ))}
            </div>
        </div>
    );
};
