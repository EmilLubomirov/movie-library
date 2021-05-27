import React from "react";
import Header from "../header";

const PageLayout = (props) => {

    return (
        <>
            <Header/>
            <main>
                {props.children}
            </main>
        </>
    )
};

export default PageLayout;
