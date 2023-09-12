import styled from "styled-components"
import { DevData } from "../../../models/dev-data.model"

type DevDataProps = {
    data: DevData
}

const StyledDevData = styled.div`

`;

const DevData: React.FunctionComponent<DevDataProps> = (props) => {

    return (
        <StyledDevData>

        </StyledDevData>
    );

};

export default DevData;