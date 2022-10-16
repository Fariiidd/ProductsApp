import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle` 
    * {
        box-sizing: 0;
        padding: 0;
        margin: 0;
        font-family: 'Poppins', sans-serif;
    }
`;

export const Container = styled.div`
    z-index: 1;
    max-width: 1300px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 50px;
    padding-left: 50px;

    @media screen and (max-width: 991px) {
        padding-right: 30px;
        padding-left: 30px;
    }
`;

export default GlobalStyles;