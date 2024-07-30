import { useRef, useState, useEffect } from "react";
import { TitleH6 } from "../../texts/Titles/Titles"
import TabButton from "../services/tabButton"
import { createPortal } from "react-dom";
import styled from "styled-components";

const DialogWrapper = styled.dialog`
    width: min(600px, 90%);
    height: 30dvh;
    // background-color: var(--greenColor);
    position: fixed;
    top: 50%;
    left: 50%;
    z-index:10;
    transform: translate(-50%, -50%);
    border-radius: 20px;
    border: 3px solid var(--greenColor);

    &::backdrop{
        background-color: rgba(0, 0, 0, 0.7);
    }
`;

const DialogInner = styled.div`
display: flex;
flex-direction: column;
gap: 2em;
align-items: center;
justify-content: center;
width: 100%;
height: 100%;
`;
const ButtonHovered = styled(TabButton)`
margin: 0 auto;
width: 40%;
&:hover {
    transform: scale(1.05);
}`;

const Dialog = ({open, onClose}) => {
    const modal = useRef()

    useEffect(() => {
        if(open) {
            modal.current.showModal()
        }
        else{
            modal.current.close()
        }
    }, [open])

    
    return createPortal(
        <><DialogWrapper autoFocus ref={modal}>
            <DialogInner>
                <TitleH6>Thank you for your correspondence, we will respond as soon as possible!</TitleH6>
                <ButtonHovered isActive onClick={onClose}>Close</ButtonHovered>
            </DialogInner>
        </DialogWrapper>
        </>,
        document.getElementById('modal')
    )
}

export default Dialog;