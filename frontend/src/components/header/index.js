import React from "react";
import styled from "styled-components";
import SearchSection from "../search-section";

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background-color: whitesmoke;
`;

const Header = () => {

    return (
        <Wrapper>
            <h4>My Movie Collection</h4>
            <SearchSection/>
        </Wrapper>
    )
};

export default Header;