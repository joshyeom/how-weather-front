import React from "react"
import { styled } from "styled-components"
import { Colors } from "../../tokens/Colors"

const Section = styled.section`
    position: absolute;
    display: ${({isModal}) => isModal ? "block" : "none"};
    opacity: 0.8;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: ${Colors.gr01};
    transition: .3s ease-in-out;
`

const Filter = ({isModal}) => {
    return <Section isModal={isModal}/>
}

export default Filter