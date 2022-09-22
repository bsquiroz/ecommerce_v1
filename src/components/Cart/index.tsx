import React from "react";
import { useEcommerceContext } from "../../hooks/useEcommerceContext";
import Trash from "/images/icon-delete.svg";
import "./styles.css";

export const Cart = () => {
    const { isCartShow, handleCartShow, numberProducts, handleNumberProducts } =
        useEcommerceContext();

    const styleCart = isCartShow ? "cart cart_show" : "cart";

    return (
        <div className={styleCart}>
            <h4>Cart</h4>

            {numberProducts === 0 ? (
                <p className="textEmpty">Your car is empty</p>
            ) : (
                <>
                    <div className="cart_item">
                        <div className="cart_item-img">
                            <img
                                src="/images/image-product-1-thumbnail.jpg"
                                alt="imagen"
                            />
                        </div>
                        <div>
                            <p>Fall Limited Editin Sneakers</p>
                            <p>
                                $125.00 x {numberProducts}{" "}
                                <span>${125 * numberProducts}.00</span>
                            </p>
                        </div>
                        <img
                            className="iconTrash"
                            src={Trash}
                            alt="trash"
                            onClick={() => handleNumberProducts(0)}
                        />
                    </div>

                    <div
                        className="btn cart_button"
                        onClick={() => {
                            handleCartShow();
                            handleNumberProducts(0);
                        }}
                    >
                        <p>Checkout</p>
                    </div>
                </>
            )}
        </div>
    );
};
