import styled from "styled-components";
import { AppFlexLayout, Main, Presentation } from "..";

const StyledHome = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: black;
    > div {
        &:first-of-type {
            height: 97.5%;
            flex-basis: 1;
        }
        &:nth-of-type(2) {
            height: 2.5%;
            background: linear-gradient(90deg, #0B0726 0%, #342C66 24.96%, #7142C9 49.91%, #A29AF5 83.85%, #DEE0FC 99.82%);
        }
    }
`;

const Home: React.FunctionComponent = () => {
    return (
        <StyledHome>
            <AppFlexLayout justify="center" align="center" gap={0}>
                <Presentation />
                <Main />
            </AppFlexLayout>
            <div/>
        </StyledHome>
    );
}

export default Home;