import styled from "styled-components";

type FlexLayoutProps = {
    $column?: boolean;
    justify?: string;
    align?: string;
    gap?: number;
}

const AppFlexLayout = styled.div<FlexLayoutProps>`
    display: flex;
    flex-direction: ${props => props?.$column ? 'column' : 'row'};
    justify-content: ${props => props?.justify ? props?.justify : 'center'};
    align-items: ${props => props?.align ? props?.align : 'center'};
    gap: ${props => props.gap ? props.gap : 12}px;
    flex-wrap: nowrap;
`;

export default AppFlexLayout;