import { styled } from "styled-components"
import { Colors } from "../../tokens/Colors"
import { IsModalType } from "types/types"


const Section = styled.section<IsModalType>`
    position: absolute;
    display: ${({isModal}) => isModal ? "block" : "none"};
    opacity: 0.8;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: ${Colors.gr01};
    transition: .3s ease-in-out;
`

const Filter = ({isModal}: IsModalType) => {
    return <Section isModal={isModal}/>
}

export default Filter