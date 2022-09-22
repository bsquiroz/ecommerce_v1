import React, { useContext } from "react";
import { EcommerceContext } from "../context/EcommerceContext";

export const useEcommerceContext = () => {
    return useContext(EcommerceContext);
};
