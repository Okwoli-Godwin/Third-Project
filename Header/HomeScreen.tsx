import React, {useState} from "react";
import styled from "styled-components";
import image from "../Assets/n.png"
import {AiOutlineArrowUp} from "react-icons/ai"

const Hero = () => {

    const [showScroll, setShowScroll] = useState(false)

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400){
            setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 400) {
            setShowScroll(false)
        }
    }

      const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  window.addEventListener('scroll', checkScrollTop)


  return (
    <div>
      <Container id="home">
        <Wrapper>
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
          
        </Wrapper>
        <Card>
            <Left>
                <P>We are Web Developers from Nigeria</P>
                <Bold>We build and Deploy <br /> websites that Users <br /> Love</Bold>
                <Phe>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, <br />
                 laboriosam. Ad quas odio quibusdam iure reiciendis sapiente, rerum <br />
                  ducimus perspiciatis.</Phe>
                  <Button>Learn More</Button>
            </Left>
            <Right>
                <No src={image} />
                
            </Right>
            <Arr onClick={scrollTop}><AiOutlineArrowUp /></Arr>
        </Card>
      </Container>
    </div>
  );
};

export default Hero;
const Arr = styled.div`
    width: 50px;
    height: 50px;
    display: flex;
    border-radius: 5px;
    position: fixed;
    top: 595px;
    left: 1295px;
    justify-content: center;
    align-items: center;
    font-size: 23px;
    background-color: #EF1F76;
    color: white;
    cursor: pointer;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
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
const Phe = styled.div`
    color: white;
    margin-bottom: -20px;
`
const Bold = styled.h1`
    color: white;
    font-size: 50px;
`
const P = styled.div`
    color: #FFA913;
    font-weight: bold;
    margin-bottom: -20px;
`
const No = styled.img`
    height: 83%;

`
const Left = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
`
const Right = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 100%;
`

const Card = styled.div`
    width: 100%;
    height: 530px;
    display: flex;
    position: absolute;
    justify-content: center;
    margin-bottom: 40px;
    width: 85%;
`

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  

  svg {
    position: relative;
    display: block;
    width: calc(300% + 1.3px);
    height: 700px;
    transform: rotateY(180deg);
  }
  path {
    fill: #36216e;
  }
`;