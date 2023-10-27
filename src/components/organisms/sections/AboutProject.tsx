import styled from "styled-components";
import { AppFlexLayout, DevData } from "../..";
import { useNavigate } from "react-router-dom";

const StyledAboutProject = styled.section`
    flex: 0.55;
    height: 100%;
    padding: 3rem 12rem 3rem 6rem;
    background-color: var(--white);
    > div {
        height: 100%;
        > div {
            &:first-of-type {
                > h6 {
                    color: var(--purple-dark);
                }
                > h3 {
                    color: var(--purple-darker);
                }
                > p {
                    color: var(--gray-darker);
                    text-align: justify;
                }
                > a {
                    display: flex;
                    gap: 8px;
                    cursor: pointer;
                    img {
                        width: 16px;
                        height: 16px;
                    }
                    span {
                        text-decoration: underline;
                    }
                }
            }
        }
    }
`;

const AboutProject: React.FunctionComponent = () => {

    const navigate = useNavigate();

    return (
        <StyledAboutProject>
            <AppFlexLayout $column justify="space-between">
                <AppFlexLayout $column align="flex-start" gap={24}>
                    <h6>FALA DEV <span role="img" aria-label="hi">👋</span></h6>
                    <h3>Boas-vindas ao projeto <br/>Shorts Summary</h3>
                    <p>
                        Shorts Summary é uma aplicação web para criar resumo de 
                        vídeos shorts do Youtube utilizando Inteligência Artificial 
                        para transcrever o conteúdo do vídeo e realizar o resumo do conteúdo. 
                        Esse projeto é desenvolvido na trilha Foundations na edição NLW IA.
                    </p>
                    <a onClick={() => navigate("/home")}>
                        <img src="src/assets/icons/arrow-up-right.svg"/>
                        <span>Home</span>
                    </a>
                </AppFlexLayout>
                <DevData/>
            </AppFlexLayout>
        </StyledAboutProject>
    );

};

export default AboutProject;