import { useCallback, useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { BG } from './constants/colors';
import { CoverImage } from './CoverImage';
import { PieceState } from './types/PieceState';

const Layout = styled('div')`
    display: flex;
`

const GameLayout = styled('div')`
    display: grid;
    grid-template-columns: min(20vh, 12vw) min(20vh, 12vw) min(20vh, 12vw) min(20vh, 12vw) min(20vh, 12vw);
    grid-template-rows: auto;
    column-gap: 20px;
    row-gap: 20px;
    background-color: ${BG};
    height: 100vh;
    width: 75vw;
    justify-content: center;
    align-content: center;
`

const PexesoPiece = styled('div')`
    width: min(20vh, 12vw);
    height: min(20vh, 12vw);
    background-color: #111;
    border-radius: 2vw;
    display: flex;
    justify-content: center;
    align-items: center;
`

const PexesoPieceImage = styled('img')`
    width: min(16.6vh, 10vw);
    height: min(16.6vh, 10vw);
    background-color: ${BG};
    border-radius: 1.5vw;
    object-fit: cover;
    
`

const PexesoHiddenSide = styled('div')`
    color: white;
    font-size:min(10vh, 6vw);
`

const PlayerLayout = styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #111;
    height: 100vh;
    width: 25vw;
`

const PlayerBorder = styled('div')`
    height: 20vw;
    width: 20vw;
    background-color: #2f2;
    margin: 20px;
    border-radius: 3vw;

    display: flex;
    justify-content: center;
    align-items: center;
`

const Player = styled('div')`
    height: 16vw;
    width: 16vw;
    background-color: ${BG};
    margin: 20px;
    border-radius: 2vw;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const PlayerName = styled('div')`
    font-weight: 900;
    font-size: 2vw;
`

const Score = styled('div')`
    font-weight: 900;
    font-size: 1.5vw;
    color: #ddd;
`

const HideButton = styled('div')`
    color: white;
    font-weight: 900;
    grid-column-start: 0;
    grid-column-end: 4;
    align-content: center;
    text-align: center;
    font-size: 2vw;
    text-shadow: 0px 0px 8px #000;
`
/*
border-radius: 2vw;
    background-color: #111;
    height: 6vw;
    width: 18vw;
*/

type Params = {
    name: string,
	pieces: number,
};

export const Game: React.FC = () => {
    const [params] = useSearchParams()
    const tempPieces = params.get("pieces")
    const pieces: number = parseInt(tempPieces ? tempPieces : "0")
    const name = params.get("name")
    
    const [activePlayer, setActivePlayer] = useState<number>(1)
    const [stateArray, setStateArray] = useState<PieceState[]>()
    const [piecesArray, setPiecesArray] = useState<JSX.Element[]>()
    const [piecesNumberArray, setPiecesNumberArray] = useState<number[]>()

    const [score1, setScore1] = useState<number>(0)
    const [score2, setScore2] = useState<number>(0)

    const [selectedPiece, setSelectedPiece] = useState<number>()
    const [selectedIndex, setSelectedIndex] = useState<number>()
    const [selectedIndex2, setSelectedIndex2] = useState<number>()

    const [showHideButton, setShowHideButton] = useState<boolean>(false)

    const [coverImageNum, setCoverImageNum] = useState<number>(0)
    const [hideCoverImage, setHideCoverImage] = useState<boolean>(true)


    const setState = useCallback((index: number, state: PieceState) => {
        if (!stateArray) return;
        stateArray[index] = state;
        setStateArray(stateArray.concat())
    }, [stateArray])

    const shuffle = useCallback((array: number[]) => {
        let currentIndex = array.length, randomIndex;

        // While there remain elements to shuffle.
        while (currentIndex !== 0) {

            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        return array;

        // Method found: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    }, [])

    // initial state
    useEffect(() => {
        const tempPiecesNumberArray: number[] = []
        const tempStateArray: PieceState[] = []
        for (let i = 0; i < pieces; i++) {
            // needs to be twice, for both pieces in the pair
            tempStateArray.push(PieceState.HIDDEN)
            tempStateArray.push(PieceState.HIDDEN)
            tempPiecesNumberArray.push(i)
            tempPiecesNumberArray.push(i)
        }

        setPiecesNumberArray(shuffle(tempPiecesNumberArray))

        setStateArray(tempStateArray)

    }, [pieces, shuffle])

    const pexesoClicked = useCallback((i: number) => {
        if (stateArray?.at(i) === PieceState.HIDDEN && !showHideButton) {
            if (selectedPiece !== undefined && selectedIndex !== undefined) {
                if (selectedPiece === piecesNumberArray?.at(i)) {
                    setState(selectedIndex, activePlayer === 1 ? PieceState.PLAYER_1 : PieceState.PLAYER_2)
                    setState(i, activePlayer === 1 ? PieceState.PLAYER_1 : PieceState.PLAYER_2)

                    if (activePlayer === 1) {
                        setScore1(score1 + 1)
                    }
                    else if (activePlayer === 2) {
                        setScore2(score2 + 1)
                    }

                    setSelectedPiece(undefined)
                    setSelectedIndex(undefined)
                }
                else {
                    setState(i, PieceState.SELECTED)
                    setSelectedIndex2(i)
                    setShowHideButton(true)
                }
            }
            else if (piecesNumberArray){
                setState(i, PieceState.SELECTED)
                setSelectedPiece(piecesNumberArray[i])
                setSelectedIndex(i)
            }
        }
        else if(stateArray?.at(i) !== PieceState.HIDDEN){
            setHideCoverImage(false);
            const temp = piecesNumberArray?.at(i);
            if(temp) setCoverImageNum(temp)
        }
    }, [piecesNumberArray, activePlayer, score1, score2, selectedIndex, selectedPiece, setState, showHideButton, stateArray])

    // updating the pieces on state change
    useEffect(() => {
        if (!piecesNumberArray) return
        const tempPiecesArray: JSX.Element[] = []
        for (let i = 0; i < pieces * 2; i++) {
            tempPiecesArray.push(
                <PexesoPiece
                    key={i}
                    onClick={() => {
                        pexesoClicked(i)
                    }}
                    style={{
                        backgroundColor:
                            stateArray?.at(i) === PieceState.HIDDEN ? '#111' :
                            stateArray?.at(i) === PieceState.PLAYER_1 ? '#3262a8' :
                            stateArray?.at(i) === PieceState.PLAYER_2 ? '#b32929' :
                            '#fff'
                    }}>
                    <PexesoPieceImage
                        key={i}
                        hidden={stateArray?.at(i) === PieceState.HIDDEN}
                        src={require(`./assets/${name}${piecesNumberArray?.at(i)}.png`)}
                    />

                    <PexesoHiddenSide hidden={stateArray?.at(i) !== PieceState.HIDDEN}>{i + 1}</PexesoHiddenSide>
                </PexesoPiece>);
        }

        setPiecesArray(tempPiecesArray)
    }, [pieces, stateArray, setState, piecesNumberArray, pexesoClicked])

    return (
        <Layout>
            <GameLayout>
                {piecesArray}
                <HideButton hidden={!showHideButton}
                    onClick={() => {
                        if (selectedIndex === undefined || selectedIndex2 === undefined) return;
                        setState(selectedIndex, PieceState.HIDDEN)
                        setState(selectedIndex2, PieceState.HIDDEN)

                        setSelectedIndex(undefined)
                        setSelectedIndex2(undefined)
                        setSelectedPiece(undefined)

                        setActivePlayer(activePlayer === 1 ? 2 : 1)
                        setShowHideButton(false)
                    }}>Schovat</HideButton>
            </GameLayout>
            <PlayerLayout>
                <PlayerBorder style={{ backgroundColor: activePlayer === 1 ? '#3262a8' : '#333' }}
                    onClick={() => { setActivePlayer(1) }}>
                    <Player>
                        <PlayerName style={{ color: '#3262a8' }}>Tým vodík</PlayerName>
                        <Score>Skóre: {score1}</Score>
                    </Player>
                </PlayerBorder>
                <PlayerBorder style={{ backgroundColor: activePlayer === 2 ? '#b32929' : '#333' }}
                    onClick={() => { setActivePlayer(2) }}>
                    <Player>
                        <PlayerName style={{ color: '#b32929' }}>Tým hélium</PlayerName>
                        <Score>Skóre: {score2}</Score>
                    </Player>
                </PlayerBorder>
            </PlayerLayout>
            {!hideCoverImage && <CoverImage imageNum={coverImageNum} onClick={() => { setHideCoverImage(true) }}/>}
        </Layout>
    )
}