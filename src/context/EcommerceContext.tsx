import React, { createContext, useState } from "react";

interface interfaceEcommerce {
    isModalActive: boolean;
    isCartShow: boolean;
    numberProducts: number;
    handleNumberProducts: (number: number) => void;
    handleModal: (value: boolean) => void;
    handleCartShow: () => void;
}

export const EcommerceContext = createContext({} as interfaceEcommerce);

export const EcommerceProvider = ({ children }: any) => {
    const [isModalActive, setIsModalActive] = useState(false);
    const [isCartShow, setIsCartShow] = useState(false);
    const [numberProducts, setNumberProducts] = useState(0);

    const handleModal = (value: boolean) => {
        setIsModalActive(value);
    };

    const handleCartShow = () => {
        setIsCartShow(!isCartShow);
    };

    const handleNumberProducts = (value: number) => {
        setNumberProducts(value);
    };

    const store: interfaceEcommerce = {
        numberProducts,
        isModalActive,
        handleModal,
        isCartShow,
        handleCartShow,
        handleNumberProducts,
    };

    return (
        <EcommerceContext.Provider value={store}>
            {children}
        </EcommerceContext.Provider>
    );
};
