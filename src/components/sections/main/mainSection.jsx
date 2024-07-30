import logo from "/logo.jpg"
import {TitleH2, TitleH5} from "../../texts/Titles/Titles"
import "./mainSection.css"

export default function MainSection (){

    return(
        <section className="intro">
            <div className="container intro-container">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="title">
                    <TitleH2>Digital Key to Efficiency</TitleH2>
                </div>
                <div className="main-content">
                    <TitleH5 gridClass="left">We believe that every business is <span className="green-text">unique</span> and has its <span className="green-text">specific needs</span><span className="line-span"></span></TitleH5>
                    <TitleH5 gridClass="right">That's why our company specializes in developing <span className="green-text">custom IT solutions</span> that respond precisely to <span className="green-text">your organization's demands</span><span className="line-span"></span></TitleH5>
                </div>
            </div>
        </section>
    )
}