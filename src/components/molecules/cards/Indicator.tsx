import styled from "styled-components";
import IndicatorType from "../../../models/indicator.model";
import { AppFlexLayout } from "..";

type IndicatorProps = {
    indicator: IndicatorType
}

const StyledIndicator = styled.div`
    > div {
        p {
            strong {
                color: var(--green-light);
            }
        }
        span {
            color: var(--white);
        }
    }
`;

const Indicator: React.FunctionComponent<IndicatorProps> = (props) => {
    
    const { indicator } = props;

    return (
        <StyledIndicator>
            <AppFlexLayout $column gap={8} justify="flex-start" align="flex-start">
                <p>
                    <strong>{ indicator.amount }</strong>
                    { ' ' + indicator.unity }
                </p>
                <span>{ indicator.description }</span>
            </AppFlexLayout>
        </StyledIndicator>
    );

};

export default Indicator;