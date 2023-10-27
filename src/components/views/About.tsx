import styled from "styled-components";
import { AboutIA, AboutProject, AppFlexLayout } from "..";

const StyledAbout = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: var(--purple-dark);
    > div {
      width: 100%;  
      flex-basis: 1;
    }
`;

const About: React.FunctionComponent = () => {

    return (
        <StyledAbout>
            <AppFlexLayout justify="center" align="center" gap={0}>
                <AboutProject />
                <AboutIA />
            </AppFlexLayout>
        </StyledAbout>
    );

};

export default About;