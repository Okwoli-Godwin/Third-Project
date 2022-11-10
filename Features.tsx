import React from 'react'
import styled from 'styled-components'
import {AiOutlineBulb} from "react-icons/ai"
import {MdOutlineColorLens} from "react-icons/md"
import {BsCodeSlash} from "react-icons/bs"
import image from "./Assets/feature.png"

const Features = () => {
  return (
    <Container id='features'>
        <Top>Our Features</Top>
        <Card></Card>
        <CardHold>
            <Left>
                <Up>
                    <L>
                        <Circle>
                            <AiOutlineBulb/>
                        </Circle>
                    </L>
                    <R>
                        <I>Idea & Analysis</I>
                        <P>Praesent tincidunt congue est ut <br /> hendrerit. Pellentesque et eros sit <br /> amet ipsum venenatis.</P>
                    </R>
                </Up>
                <Down>
                    <L>
                        <Circle>
                            <MdOutlineColorLens/>
                        </Circle>
                    </L>
                    <R>
                        <I>Designing</I>
                        <P>Praesent tincidunt congue est ut <br /> hendrerit. Pellentesque et eros sit <br /> amet ipsum venenatis.</P>
                    </R>
                </Down>
            </Left>
            <Mid>
                <Me src={image} />
            </Mid>
            <Right>
                <Up>
                    <L>
                        <Circle>
                            <BsCodeSlash/>
                        </Circle>
                    </L>
                    <R>
                        <I>Development</I>
                        <P>Praesent tincidunt congue est ut <br /> hendrerit. Pellentesque et eros sit <br /> amet ipsum venenatis.</P>
                    </R>
                </Up>
                <Down>
                    <L>
                        <Circle>
                            <MdOutlineColorLens/>
                        </Circle>
                    </L>
                    <R>
                        <I>Testing and Launching</I>
                        <P>Praesent tincidunt congue est ut <br /> hendrerit. Pellentesque et eros sit <br /> amet ipsum venenatis.</P>
                    </R>
                </Down>
            </Right>
        </CardHold>
    </Container>
  )
}

export default Features
const Right = styled.div`
    width: 370px;
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const Me = styled.img`
    height: 85%;
    object-fit: cover;
`
const Mid = styled.div`
    width: 370px;
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 15px;
`
const Down = styled.div`
    width: 100%;
    height: 45%;
    display: flex;
`
const P = styled.div`
    margin-top: 12px;
    color: #1F2470;
`
const I = styled.h2`
    color: #1F2470;
    margin: 0;
`
const R = styled.div`
    width: 240px;
    height: 100%;
    display: flex;
    flex-direction: column;
`
const Circle = styled.div`
    width: 85px;
    height: 85px;
    display: flex;
    color: white;
    font-size: 40px;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    background-image: linear-gradient(to right, #1E1E61, #53267D);
`
const L = styled.div`
    width: 100px;
    height: 100%;
    display: flex;
`
const Up = styled.div`
    width: 100%;
    height: 45%;
    display: flex;
`
const Left = styled.div`
    width: 370px;
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-right: 15px;
`
const Card = styled.div`
    height: 8px;
    border-radius: 50px;
    width: 200px;
    background-image: linear-gradient(90deg, hsl(335, 87%, 51%), hsl(29, 99%, 67%));
`

const Top = styled.h1`
    font-size: 40px;
    color: #1F2470;
`

const CardHold = styled.div`
    width: 85%;
    display: flex;
    justify-content: center;
    margin-top: 50px;
`

const Container = styled.div`
    width: 100%;
    height: 580px;
    display: flex;
    align-items: center;
    flex-direction: column;
`