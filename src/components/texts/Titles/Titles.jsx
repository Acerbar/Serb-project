import styled from "styled-components"
const H2 = styled.h2`
    text-align: center;
    font-family: var(--fontFamily-1);
    font-size: clamp(10px, 1.8vw, 14px);
    letter-spacing: .1em;
    color: var(--whiteColor);
    text-shadow: 1px 1px var(--blackColor);
    `;
const H3 = styled.h3`
    display: block;
    position: relative;
    text-align: left;
    font-family: var(--fontFamily-1);
    font-size: clamp(16px, 2.5vw, 24px);
    color: var(--brightGreen);
    text-transform: uppercase;
    text-shadow: 1px 1px var(--blackColor);
    margin: 2em 0 4em;

    @media(width <=769px){
        margin: 2em auto 4em;
    }

    &::before{
        display: block;
        content: "";
        position: absolute;
        top: 50%;
        right: 102%;
        width: 5em;
        height: 3px;
        background-color: var(--greenColor);
        z-index: 10;
        transform: translateY(-50%);
    }

    &::after{
        display: none;
        content: "";
        position: absolute;
        top: 50%;
        left: 100%;
        width: 5em;
        height: 3px;
        background-color: var(--greenColor);
        z-index: 10;
        transform: translateY(-50%);
    }

    @media(width <=769px){
        &::before{
            right: 115%;
        };
        &::after{
        display: block;
        left: 105%;
    }
    `;

    const H4 = styled.h4`
    display: block;
    margin: 2em auto;
    font-family: var(--fontFamily-1);
    font-size: clamp(18px, 2vw, 26px);
    color: var(--whiteColor);
    text-shadow: 1px 1px 1px #000;
    `;

    const H5 = styled.h5`
    text-align: center;
    width: fit-content;
    max-width: 70%;
    font-family: var(--fontFamily-1);
    font-size: clamp(12px, 1.5vw, 18px);
    letter-spacing: .1em;
    color: var(--whiteColor);
    position: relative;

    @media(width <=769px){
        max-width: 100%;
    }

    &.left{
        align-self: flex-start;
    }

    &.right{
        align-self: flex-end;
    }
    `;

    const H6 = styled.h6`
    text-align: center;
    font-family: var(--fontFamily-3);
    font-size: clamp(12px, 1.5vw, 18px);
    padding: 0 15px;
    color: #000;

    @media(width <=769px){
        max-width: 100%;
    }

    &.left{
        align-self: flex-start;
    }

    &.right{
        align-self: flex-end;
    }
    `;

    const Text = styled.p`
        display: block;
        font-family: var(--fontFamily-4);
        font-size: clamp(14px, 2vw, 22px);
        font-weight: bold;
        line-height: 1.5em;
        letter-spacing: .1em;
        color: oklch(94.67% 0 20.12);
        width: 100%;
        margin-bottom: 1em;
    `;
export function TitleH2({children}){
    return(
        <H2>{children}</H2>
    )
}

export function TitleH3({children}){
    return(
        <H3>{children}</H3>
    )
}
export function TitleH4({children}){
    return(
        <H4>{children}</H4>
    )
}

export function TitleH5({gridClass, children}){
    return(
        <H5 className={`${gridClass}`}>{children}</H5>
    )
}
export function TitleH6({children}){
    return(
        <H6>{children}</H6>
    )
}
export function Paragraph({children}){
    return(
        <Text className="paragraph">{children}</Text>
    )
    
}