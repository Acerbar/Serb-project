import styled from "styled-components"

const Button = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 25%;
    padding: 1em;
    position: relative;
    background-color: oklch(94% 0 262.59 / 80%);
    font-size: 16px;
    font-family: var(--fontFamily-1);
    line-height: 1.4em;
    color: var(--blackColor);
    border: 1px grey solid;
    border-radius: 4px 4px 0 0;
    text-wrap: balance;
    transition: all .2s linear;


    @media(width<=980px){
        width: 50%;
    };
    @media(width<=630px){
        width: 100%;
    };
    `;

    const ButtonActive = styled(Button)`
    background-color: var(--greenColor);
    color: oklch(91.33% 0 39.18);
    `
  


export default function TabButton({children, isActive, ...props}){
    const ActiveButton = isActive ? ButtonActive : Button;
    return(
        <ActiveButton {...props}>{children}</ActiveButton>
    )
}
