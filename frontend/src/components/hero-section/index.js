import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

const Wrapper = styled.section`
    background-image: url(https://keyword-hero.com/wp-content/uploads/2017/04/20170227_Keyword-Hero-Logo-hoch.png);
    background-repeat: no-repeat;
`;

const StyledContent = styled.div`
    padding: 30px;
    max-width: 500px;
`;

const HeroSection = () => {

    return (
        <Wrapper>
            <StyledContent>
                <h2>Heading</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    A animi commodi distinctio dolore dolorem eius, eos et exercitationem illo
                    iste laudantium minima molestias optio perferendis provident quae recusandae sint veritatis.</p>
                <Button color="primary" variant="contained">Search</Button>
            </StyledContent>
        </Wrapper>
    )
};

export default HeroSection;