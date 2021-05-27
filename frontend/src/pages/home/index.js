import React from "react";
import PageLayout from "../../components/page-layout";
import HeroSection from "../../components/hero-section";

const HomePage = () => {

    return (
        <PageLayout>
            <HeroSection/>
            <h2 style={{textAlign: "center"}}>Your Favorites</h2>
        </PageLayout>
    )
};

export default HomePage;