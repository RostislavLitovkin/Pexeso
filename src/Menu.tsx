import React from "react";
import styled from "styled-components";
import { BG } from "./constants/colors";
import textsJson from './assets/texts.json';

const BlackBackdrop = styled('div')`
    position: absolute;
    height: 100vh;
    width: 100vw;
    background-color: #0008;
    
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(5px);
    overflow: scroll;
`

const Layout = styled('div')`
    width: 80vw;
    min-height: 80vh;
    margin: auto;
    margin-top: 80px;
    margin-bottom: 80px;
    border-radius: 1.5vw;
    background-color: ${BG};

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Button = styled('a')`
    color: white;
    font-weight: 900;
    grid-column-start: 0;
    grid-column-end: 4;
    align-content: center;
    text-align: center;
    font-size: 2vw;
    text-shadow: 0px 0px 8px #000;
    text-decoration: none;
    margin-bottom: 10px;
`

const Title = styled('a')`
    justify-self: start;
    color: #03befc;
    font-weight: 900;
    grid-column-start: 0;
    grid-column-end: 4;
    align-content: center;
    text-align: center;
    font-size: 4vw;
    text-shadow: 0px 0px 8px #000;
    text-decoration: none;
`

export const Menu: React.FC = () => {
    return (
        <BlackBackdrop>
            <Layout>
                <br></br>
                <Title>
                    Chemické pexeso
                </Title>
                <br></br>
                {
                    textsJson.map((item, index) => <Button href={`/#/Game?variation=${index}`}>
                        {item.name}
                    </Button>)
                }
                <br></br>
            </Layout>
        </BlackBackdrop>
    )
}