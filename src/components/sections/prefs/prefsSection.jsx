import {TitleH3, Paragraph} from "../../texts/Titles/Titles"
import PrefElem from "./prefElem.jsx"
import { prefElemsContent } from "./prefElemData"
import "./prefsSection.css"


export default function Preferences (){
    return(
        <section className="preferences">
            <div className="prefs-container container">
                <TitleH3>Why us_</TitleH3>
                <Paragraph>_Even though implementing custom software solutions takes more time than off-the-shelf products, in the long run, you will always feel the effect of your business processes accelerating while saving costs.</Paragraph>
                <Paragraph>_This plays well in all industries, from production to logistics, and other components of different businesses.</Paragraph>
                <Paragraph>_Our experienced specialists guarantee that our customized services will be introduced in the minimum time and have maximum efficiency. Our properly deployed and integrated into business operations cloud-based solutions (SaaS, IaaS, PaaS) unveil unique opportunities of limitless automatization and control potential while smoothing workflows and bringing clients many other advantages and benefits: </Paragraph>
                <div className="pref-elements">
                    <PrefElem image="/test.jpg" {...prefElemsContent[0]}/>
                    <PrefElem image="/access.jpg" {...prefElemsContent[1]}/>
                    <PrefElem image="/dataProtection.jpg" {...prefElemsContent[2]}/>
                    <PrefElem image="/serviceVolume.jpg" {...prefElemsContent[3]}/>
                </div>
            </div>
        </section>
    )
}