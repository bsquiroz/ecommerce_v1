import React, { useState } from "react";
const photos = [
    {
        id: 1,
        imgBig: "/images/image-product-1.jpg",
        imgSmoll: "/images/image-product-1-thumbnail.jpg",
        style: "gallery_item gallery_item-active",
        name: "image1",
    },
    {
        id: 2,
        imgBig: "/images/image-product-2.jpg",
        imgSmoll: "/images/image-product-2-thumbnail.jpg",
        style: "gallery_item",
        name: "image2",
    },
    {
        id: 3,
        imgBig: "/images/image-product-3.jpg",
        imgSmoll: "/images/image-product-3-thumbnail.jpg",
        style: "gallery_item",
        name: "image3",
    },
    {
        id: 4,
        imgBig: "/images/image-product-4.jpg",
        imgSmoll: "/images/image-product-4-thumbnail.jpg",
        style: "gallery_item",
        name: "image4",
    },
];

export const useGallery = () => {
    const [galleryItem, setGalleryItem] = useState(photos);

    const photoBig = galleryItem.find(
        (item) => item.style === "gallery_item gallery_item-active"
    );

    const handleGalleryItem = (id: number) => {
        if (photoBig?.id === id) return;

        const newArray = galleryItem.map((item) =>
            item.style === "gallery_item gallery_item-active"
                ? {
                      ...item,
                      style: "gallery_item",
                  }
                : item.id === id
                ? {
                      ...item,
                      style: "gallery_item gallery_item-active",
                  }
                : item
        );

        setGalleryItem(newArray);
    };
    return { galleryItem, photoBig, handleGalleryItem };
};
