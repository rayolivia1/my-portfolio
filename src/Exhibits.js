//Exhibits.js

import './Background.css';
import './Exhibits.css';
import TextType from './Text-Type-For-Exhibit/Text-Type';

function Exhibits() {
    return (
        <div>
            <div className="exhibit-page-container"></div>
            <div className="center-container">
                <TextType
                    textColors="#b53324"
                    text={["Greetings.", "2025 Exhibition Coming This November.", "Stay Tuned."]}
                    typeSpeed={75}
                    pauseDuration={1500}
                    showCursor={true}
                    cursorCharacter="_"
                />
            </div>
            <div className = "background-center-container">Background</div>
            <div className = "exhibit-center-container"><p>The HIV/AIDS epidemic in the 80’s was a devastating crisis, taking the lives of an estimated 500,000 Americans, exacerbated by a lack of urgency on the part of the US government for medical research funding. However developing life saving medication was not the end of the story. Once medication did become available, not all communities received relief from the epidemic equally. In the 12 years since AZT, a drug designed to treat HIV/AIDS was FDA approved in 1987, the percentage of White, non-Hispanic people with AIDS dropped from 50.4% to 34% while the percentage of Black, non-Hispanic people with AIDS increased from 31.2% to 44.9% and the percentage of Hispanic people with AIDS increased 14% to 19.7%. Despite there being medication that was clearly helping treat HIV, AIDS cases rose in the Black and Hispanic communities. </p></div>
            <div className = "exhibit-center-container"><p>We believe that this discrepancy can partially be explained by the access to health information each group had. By evaluating Chicago-based print news sources including “Windy City Times”, targeted towards the anglophone, queer community concentrated on the north side of Chicago, and  “La Raza”, targeted towards the Spanish speaking community concentrated on the south and west side of Chicago, we will identify patterns in health information or the lack thereof between different publications accessible to different linguistic groups.</p></div>
            <div className = "exhibit-center-container"><p>Inequity in access to health information and care continues to be a pressing issue. Today, there are spending cuts to public health, including the Trump administration’s proposal to cut $400 million from PEPFAR, which specifically provides relief from HIV/AIDS. Based on the latest data, Hispanic and Black individuals each accounted for more than a third of new HIV infections in 2023. More updated information is unavailable as there is a pause on reporting by the CDC. A direct quote from the CDC states,</p></div>
            <div className = "exhibit-center-container"><p>“ The CDC is unable to resume PrEP coverage reporting at this time, due to a reduction in force affecting the Division of HIV Prevention (DHP). As part of this staffing reduction, the DHP branches that produced HIV incidence estimates and provided the statistical expertise needed to assess PrEP coverage were eliminated. CDC is currently evaluating plans and capacity to resume this work”.</p></div>
        </div>
    );
}

export default Exhibits;