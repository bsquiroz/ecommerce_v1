import React from "react";
import { useEcommerceContext } from "../../hooks/useEcommerceContext";
import { Gallery } from "../gallery";
import "./styles.css";

export const GallerySidebar = () => {
    const { isModalActive, handleModal } = useEcommerceContext();

    return (
        <div>
            <Gallery />
            {isModalActive && (
                <>
                    <div className="modalProduct">
                        <div
                            className="closeModal"
                            onClick={() => handleModal(false)}
                        >
                            X
                        </div>
                        <div className="content_modal">
                            <Gallery />
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};
