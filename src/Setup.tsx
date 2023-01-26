import React from "react";
import styled from "styled-components";
import { BG } from "./constants/colors";

const BlackBackdrop = styled('div')`
    position: absolute;
    height: 100vh;
    width: 100vw;
    background-color: #0008;
    
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(5px);
`

const Layout = styled('div')`
    width: 80vw;
    height: 80vh;
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
`

const Title = styled('a')`
    justify-self: start;
    color: red;
    font-weight: 900;
    grid-column-start: 0;
    grid-column-end: 4;
    align-content: center;
    text-align: center;
    font-size: 4vw;
    text-shadow: 0px 0px 8px #000;
    text-decoration: none;
`

export const Setup: React.FC = () => {
    return (
        <BlackBackdrop>
            <Layout>
                <Title>
                    Nastavení Chemického pexesa
                </Title>
                <br></br>
                <Button href="/#/Game?pieces=10&name=p">
                    Hrát
                </Button>
                <br></br>
                <input type="file" multiple name="Obrázky" accept=".png,.png" onChange={
                    (e) => {
                        console.log(e.target.files)
                    }
                }/>
            </Layout>
        </BlackBackdrop>
    )
}
