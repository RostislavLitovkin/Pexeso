import { MouseEventHandler } from "react"
import styled from "styled-components"

export const BlackBackdrop = styled('div')`
    position: absolute;
    height: 100vh;
    width: 100vw;
    background-color: #0008;
    
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(5px);

    color: white;
    font-size: 5vw;
    font-weight: 900;
`

const Image = styled('img')`
    width: 80vw;
    height: 80vh;
    border-radius: 1.5vw;
    object-fit: contain;
`
export const CoverImage: React.FC<{imageNum: number, onClick: MouseEventHandler}> = ({imageNum, onClick}) => {
    return (
        <BlackBackdrop onClick={onClick}>
            <Image src={require(`./assets/p${imageNum}.png`)}>

            </Image>
        </BlackBackdrop>
    )
}
