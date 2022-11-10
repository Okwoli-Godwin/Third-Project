import React from 'react'
import styled from 'styled-components'
import image from "../Components/Assets/table2.png"

const Body = () => {
  return (
    <Container id="about">
        <Wrapper>
            <First>
                <Me src={image} />
            </First>
            <Second>
                <Bold>Why Our Agency</Bold>
                <Card></Card>
                <P>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, provident <br />
                 beatae, repellat asperiores sequi error esse assumenda quibusdam <br />
                 cumque, alias non earum explicabo sit officiis dignissimos architecto <br />
                 accusantium natus dolore nobis blanditiis consequatur! Sunt, at!
                </P>
                <Px>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, quaerat. <br />
                    Quos reiciendis officiis nulla beatae illo deleniti molestias distinctio eius?
                </Px>
                <Down>
                    <Hold>
                        <Num>9875</Num>
                        <D>Satisfied Clients</D>
                    </Hold>
                    <Hold>
                        <Num>7894</Num>
                        <D>Project Lunched</D>
                    </Hold>
                    <Hold>
                        <Num>75</Num>
                        <D>Years Completed</D>
                    </Hold>
                </Down>
            </Second>
        </Wrapper>
    </Container>
  )
}

export default Body
const D = styled.div`
    color: hsl(236, 26%, 43%);
`
const Num = styled.h1`
    color: #1F2470;
    margin: 0;
`
const Hold = styled.div`
    width: 170px;
    margin-top: 40px;
    border-radius: 5px;
    height: 90px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    margin-left: 40px;
    box-shadow: rgba(80, 80, 107, 0.2) 0px 7px 29px 0px;
`
const Down = styled.div`
    width: 100%;
    display: flex;
`
const Px = styled.div`
    margin-left: 40px;
    color: hsl(236, 26%, 43%);
    margin-top: 30px;
`
const P = styled.div`
    margin-left: 40px;
    color: hsl(236, 26%, 43%);
    margin-top: 50px;
`
const Card = styled.div`
    height: 8px;
    border-radius: 50px;
    width: 240px;
    background-image: linear-gradient(90deg, hsl(335, 87%, 51%), hsl(29, 99%, 67%));
    margin-left: 40px;
`
const Bold = styled.h1`
    font-weight: bold;
    margin-left: 40px;
    color: #1F2470;
    font-size: 40px;
`
const Second = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
`
const Me = styled.img`
    height: 75%;
`
const First = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Wrapper = styled.div`
    width: 83%;
    height: 100%;
    display: flex;
`

const Container = styled.div`
    width: 100%;
    height: 600px;
    justify-content: center;
    display: flex;
`