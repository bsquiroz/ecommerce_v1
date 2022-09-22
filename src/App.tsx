import React from "react";
import { Container, Footer, MainGallery, Navbar } from "./components";
import { Cart } from "./components/Cart";

export const App = () => {
    return (
        <>
            <Container>
                <Navbar />
                <MainGallery />
                <Cart />
            </Container>
            <Footer />
        </>
    );
};
