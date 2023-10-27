import styled from "styled-components";
import { AppFlexLayout, AppGrid, Indicator } from "../..";
import IndicatorModel from "../../../models/indicator.model";
import { Indicators } from "../../../data/indicators.data";

const StyledAboutRockeseat = styled.section`
    flex: 0.45;
    height: 100%;
    padding: 5rem;
    > div {
        h3, p {
            color: white;
        }
    }
`;

const AboutRockeseat: React.FunctionComponent = () => {

    const indicators: IndicatorModel[] = Indicators;

    return (
        <StyledAboutRockeseat>
            <AppFlexLayout $column justify="center" gap={40}>
                <h3>
                    Por quê utilizar IAs?
                </h3>
                <p>
                    As Inteligências Artificiais (IAs) estão vivendo um período de 
                    grande popularidade e estão sendo amplamente noticiadas por diversas razões, 
                    refletindo os avanços e aplicações cada vez mais diversificadas dessa tecnologia inovadora.
                    Vamos explorar algumas das principais razões que explicam essa popularidade.
                </p>
                <AppGrid>
                    {
                        indicators.map((value) => <Indicator indicator={value} key={value.id}/>)
                    }
                </AppGrid>
            </AppFlexLayout>
        </StyledAboutRockeseat>
    );

};

export default AboutRockeseat;