import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
const Header = () => {
	const [show, setShow] = React.useState(false);

	const changeHeaderColor = () => {
		if (window.scrollY >= 70) {
			setShow(true);
		} else {
			setShow(false);
		}
	};

	window.addEventListener("scroll", changeHeaderColor);

	return (
		<>
			{show ? (
				<Container bg='white' cl='black' br="gray">
					<Logo>Resolution</Logo>
					<Navigation>
						<Nav smooth={true} duration={500} to='home'>
							Home
						</Nav>
						<Nav smooth={true} duration={500} to='about'>
							About
						</Nav>
						<Nav smooth={true} duration={500} to='services'>
							Services
						</Nav>
						<Nav smooth={true} duration={500} to='features'>
							Features
						</Nav>
						<Nav smooth={true} duration={500} to='blog'>
							Blog
						</Nav>
						<Nav smooth={true} duration={500} to='contact'>
							Contact Us
						</Nav>
						<Button>Get a Quote</Button>
					</Navigation>
				</Container>
			) : (
				<Container bg='#36216E' cl='white' br="#36216E">
					<Logo>Resolution</Logo>
					<Navigation>
						<Nav smooth={true} duration={500} to='home'>
							Home
						</Nav>
						<Nav smooth={true} duration={500} to='about'>
							About
						</Nav>
						<Nav smooth={true} duration={500} to='services'>
							Services
						</Nav>
						<Nav smooth={true} duration={500} to='features'>
							Features
						</Nav>
						<Nav smooth={true} duration={500} to='blog'>
							Blog
						</Nav>
						<Nav smooth={true} duration={500} to='contact'>
							Contact Us
						</Nav>
						<Button>Get a Quote</Button>
					</Navigation>
				</Container>
			)}
		</>
	);
};

export default Header;
const Logo = styled.div`
	margin-left: 40px;
	font-size: xx-large;
	font-weight: bold;
`;
const Navigation = styled.div`
	margin-right: 70px;
	display: flex;
	align-items: center;
`;
const Nav = styled(Link)`
	margin-left: 10px;
	margin-right: 10px;
	cursor: pointer;
	transition: all 350ms;
	:hover {
		/* padding: 10px 10px; */
		border-bottom: 1px solid orange;
		transition: all 350ms;
		color: silver;
	}
`;
const Button = styled.div`
	height: 50px;
	width: 150px;
	margin-left: 10px;
	margin-right: 10px;
	background-image: linear-gradient(
		90deg,
		rgba(230, 37, 125, 1) 49%,
		rgba(242, 112, 4, 1) 94%
	);
	display: flex;
	justify-content: center;
	align-items: center;
	/* border-radius: 0px 20px 0px 20px; */
	border-top-right-radius: 20px;
	border-bottom-left-radius: 20px;
	cursor: pointer;
	transition: all 350ms;
	:hover {
		transform: scale(0.91);
	}
`;

const Container = styled.div<{ bg: string; cl: string; br: string }>`
	height: 70px;
	width: 100%;
	background-color: ${(props) => props.bg};
	color: ${(props) => props.cl};
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: sticky;
	top: 0;
	z-index: 19189;
	transition: all 350ms;
  border-bottom: 1px solid ${(props) => props.br};
`;