import React, { useState } from "react";
import { useEcommerceContext } from "../../hooks/useEcommerceContext";
import "./styles.css";

import IconCart from "/images/icon-cart.svg";
import IconMinus from "/images/icon-minus.svg";
import IconPlus from "/images/icon-plus.svg";

export const InfoProduct = () => {
    const { handleNumberProducts } = useEcommerceContext();
    const [amountProduct, setAmountProduct] = useState(0);

    const handleAmountProduct = (value: number) => {
        if (amountProduct + value < 0) return;
        setAmountProduct(amountProduct + value);
    };

    const handleBuy = () => {
        handleNumberProducts(amountProduct);
        setAmountProduct(0);
    };

    return (
        <div className="infoProduct">
            <h5 className="infoProduct_subtitle">SNEAKER COMPANY</h5>
            <h2 className="infoProduct_title">Fall Limited Edition Sneakers</h2>
            <p className="infoProduct_paragraph">
                These loew-profile sneakers are your perfect casual wear
                companion. Featuring a durable rubber outer sole. they'll
                withstand everything the weather can offer
            </p>

            <div className="infoProduct_price">
                <span className="withPercent">$125.00</span>
                <span className="Percent">50%</span>
                <p className="withNoPercent">$250.00</p>
            </div>

            <div className="optionsCart">
                <div className="options">
                    <div
                        className="btn rest"
                        onClick={() => handleAmountProduct(-1)}
                    >
                        <img src={IconMinus} alt="delete" />
                    </div>
                    <span>{amountProduct}</span>
                    <div
                        className="btn add"
                        onClick={() => handleAmountProduct(1)}
                    >
                        <img src={IconPlus} alt="plus" />
                    </div>
                </div>

                <div className="btn boxAddCart" onClick={handleBuy}>
                    <img src={IconCart} alt="cart" />
                    <span>Add to cart</span>
                </div>
            </div>
        </div>
    );
};
