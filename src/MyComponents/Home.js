import React from 'react'
import styled from 'styled-components';
/* import styled from "styled-components"; */
import Section from "./Section";
const Home=() =>{
    return (
        <Container>
            <Section
                title="Model S"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-s.jpg"
                leftBtnText="Custom Order"
                RightBtnText="Existing Inventory">
            </Section>
            <Section 
                title="Model Y"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-y.jpg"
                leftBtnText="Custom Order"
                RightBtnText="Existing Inventory"></Section>
            <Section
                title="Model 3"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-3.jpg"
                leftBtnText="Custom Order"
                RightBtnText="Existing Inventory">
            </Section>
            <Section
                title="Model X"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-x.jpg"
                leftBtnText="Custom Order"
                RightBtnText="Existing Inventory">
            </Section>
            <Section 
                title="Solar Panel"
                description="Money-back guarantee"
                backgroundImg="solar-panel.jpg"
                leftBtnText="Order now"
                RightBtnText="Learn more">
            </Section>
            <Section 
                title="Solar Roof"
                description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
                backgroundImg="solar-roof.jpg"
                leftBtnText="Order now"
                RightBtnText="Learn more">
            </Section>
            <Section 
                title="Accessories"
                
                backgroundImg="accessories.jpg"
                leftBtnText="Shop now"
                >
            </Section>
        </Container>
    )
}

export default Home

const Container = styled.div`
    height :100vh;

`