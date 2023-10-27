import styled from "styled-components";

type GridProps = {
    columns?: number;
    gap?: number;
    rowGap?: number;
    columnGap?: number;
}

const AppGrid = styled.div<GridProps>`
    display: grid;
    grid-template-columns: repeat(${props => props?.columns ? props.columns : 2}, 1fr);
    row-gap: ${props => props?.rowGap ? props.rowGap : 40}px;
    column-gap: ${props => props?.columnGap ? props.columnGap : 40}px;
`;

export default AppGrid;