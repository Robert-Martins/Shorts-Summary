import styled from "styled-components";
import { Indicator } from "../../../models/indicator.model";

type IndicatorProps = {
    indicator: Indicator
}

const StyledIndicator = styled.div`

`;

const Indicator: React.FunctionComponent<IndicatorProps> = (props) => {
    
    return (
        <StyledIndicator>

        </StyledIndicator>
    );

};

export default Indicator;