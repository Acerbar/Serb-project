import styled from "styled-components";

const FooterElem = styled.footer`
    background-color: #000;
    min-height: 50px;
    padding: 30px 0;
`;

const FooterText = styled.p`
    display: block;
    color:  oklch(94.67% 0 20.12);
    font-family: var(--fontFamily-2);
    font-size: clamp(10px, 1.5vw, 12px);
    line-height: 1.8em;

    
    @media(width <= 769px){
        margin: 0 auto;
    }
`

export default function Footer(){
    return(
        <FooterElem>
            <div className="container">
                <FooterText>Racionalna Industrija DOO Cara Lazara 5-7 Beograd 6</FooterText>
                <FooterText>general@rationalindustry.com</FooterText>
            </div>
            
        </FooterElem>
    )
}