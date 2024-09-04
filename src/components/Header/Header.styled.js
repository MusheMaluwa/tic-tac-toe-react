import styled from "styled-components";
import { MdOutlineLightMode, MdOutlineDarkMode} from "react-icons/md";


export const HeaderWrapper = styled.header`
   display: flex;
   justify-content: space-between;
   align-items: center;
   height: 10vh;
   padding: 2rem;
   

   .logo{
    height: 4%.5;
    fill: ${(props) => props.theme.colors.text};
    margin-top: 30px;

   }

`
export const LightModeIcon = styled(MdOutlineLightMode)`
    color: ${(props) => props.theme.colors.text};
    font-size: 2rem;
    cursor: pointer;
`
export const DarkModeIcon = styled(MdOutlineDarkMode)`
    color: ${(props) => props.theme.colors.text};
    font-size: 2rem;
    cursor: pointer;
`