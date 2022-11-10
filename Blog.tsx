import React from 'react'
import styled from 'styled-components'
import image from "./Assets/woman.png"
import image2 from "./Assets/lady.png"

const Blog = () => {
  return (
    <Container id='blog'>
        <Top2>Our Blog</Top2>
        <Card1></Card1>
        <Wrapper>
            <Left>
                <Top>Fri Nov 04 2022</Top>
                <P>A Typical Day in the Life of a Product Manager</P>
                <T>Hi, my name is Joyce Temilolu Daramola; I prefer to be called Temi. Before we go <br />
                 further, let's dive a bit into my background. </T>
                 <Tt>I studied ...</Tt>
                 <Button>Read More</Button>
            </Left>
            <Right>
                <Img src={image} />
            </Right>
        </Wrapper>
        <Wrapper2>
            <Left>
                <Top>Mon Sep 13 2021</Top>
                <P>Why You Need to Upskill For The Future of Work</P>
                <T>The future of work has never been as explosive as it is now. Aside from the fact <br />
                 that covid-19 has forced us to adopt  remote work. Technology is disrupting all...</T>
                 <Tt>I studied ...</Tt>
                 <Button>Read More</Button>
            </Left>
            <Right>
                <Img src={image2} />
            </Right>
        </Wrapper2>
    </Container>
  )
}

export default Blog
const Card1 = styled.div`
    height: 8px;
    border-radius: 50px;
    width: 150px;
    background-image: linear-gradient(90deg, hsl(335, 87%, 51%), hsl(29, 99%, 67%));
`

const Top2 = styled.h1`
    font-size: 40px;
    color: #1F2470;
`
const Img = styled.img`
    width: 80%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
`
const Right = styled.div`
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 450px;
    border-radius: 10px;
`
const Button = styled.div`
  height: 45px;
  width: 170px;
  background-image: linear-gradient(90deg, hsl(335, 87%, 51%), hsl(29, 99%, 67%));
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 20px;
  border-top-right-radius: 20px;
  color: white;
  font-weight: bold;
  font-size: 15px;
  margin-top: 55px;
`
const Tt = styled.div`
    font-size: 1rem;
    color: #36216e;
    margin-top: 30px;
`
const T = styled.div`
    font-size: 1rem;
    color: #36216e;
    margin-top: 30px;
`
const P = styled.div`
    font-size: 1.5rem;
    color: #1F2470;
    font-weight: bold;
    margin-top: 90px;
`
const Top = styled.div`
    font-size: .9375rem;
    color: #1F2470;
    font-weight: bold;
`
const Left = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
`
const Wrapper = styled.div`
    width: 85%;
    display: flex;
    margin-top: 70px;
`
const Wrapper2 = styled.div`
    width: 85%;
    display: flex;
    margin-top: 70px;
`
const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`