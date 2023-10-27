import styled from "styled-components";
import { AppFlexLayout } from "../..";

const StyledPresentation = styled.section`
    flex: 0.6;
    padding-left: 8rem;
    > div {
        h1 {
            color: var(--white);
        }
        h2 {
            color: var(--gray);
        }
        img {
            &:first-of-type {
                height: 4.5rem;
            }
            &:nth-of-type(2) {
                height: 7.5rem;
            }
        }
    }
`;

const Presentation: React.FunctionComponent = () => {

    return (
        <StyledPresentation>
            <AppFlexLayout $column justify="space-between" align="flex-start" gap={32}>
                <img src="src/assets/logos/rocketseat.svg"/>
                <h1>
                    Shorts Summary
                </h1>
                <h2>Trilha Foundations</h2>
                <img src="src/assets/logos/nlw.svg"/>
            </AppFlexLayout>
        </StyledPresentation>
    );

};

export default Presentation;