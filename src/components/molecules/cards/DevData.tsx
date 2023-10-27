import styled from "styled-components"
import DevDataType from "../../../models/dev-data.model";
import { Dev } from "../../../data/dev.data";
import { AppFlexLayout } from "..";

const StyledDevData = styled.div`
    width: 100%;
    padding-top: 1rem;
    border-top: 1px solid var(--gray-light);
    > div {
        h6 {
            color: var(--purple-dark);
        }
        > div {
            img {
                width: 112px;
                height: 112px;
                border: 1px solid var(--purple-dark);
                border-radius: 56px;
            }
            > div {
                h6 {
                    color: var(--purple-darker);
                }
                p {
                    font-weight: 400;
                    color: var(--gray-darker);
                }
                a {
                    color: var(--gray-darker);
                }
            }
        }
    }
`;

const DevData: React.FunctionComponent = () => {

    const devData: DevDataType = Dev;

    return (
        <StyledDevData>
            <AppFlexLayout $column align="flex-start" gap={20}>
                <h6>CRIADO POR:</h6>
                <AppFlexLayout justify="flex-start" align="center" gap={16}>
                    <img src="src/assets/imgs/profile.jpg" />
                    <AppFlexLayout $column justify="space-between" align="flex-start">
                        <h6>{ devData.name }</h6>
                        <p>{ devData.role }</p>
                        <a href={ devData.github } target="_blank">Github</a>
                    </AppFlexLayout>
                </AppFlexLayout>
            </AppFlexLayout>
        </StyledDevData>
    );

};

export default DevData;