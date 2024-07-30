import styled from "styled-components";

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 45%;
min-width: 280px;
height: 25dvh;
text-wrap: balance;
margin: 1em auto;
border: 3px solid grey;
text-align: center;
background-image: url(${props => props.$image});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
position: relative;

&::after {
display: block;
content: "";
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0,.8);
}`;

const Paragraph = styled.p`
font-family: var(--fontFamily-4);
position: relative;
z-index: 2;
font-Size: 18px;
margin: 1em;
color: var(--greenColor);
`;

const PrefElem = ({ image, title}) => {


return (
    <Container $image={image}>
        <Paragraph>{title}</Paragraph>
    </Container>
);
};

export default PrefElem;