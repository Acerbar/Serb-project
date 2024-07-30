import { useState } from "react";
import { Paragraph, TitleH3 } from "../../texts/Titles/Titles";
import TabButton from "./tabButton";
import "./serviceSection.css";
import{serviceElemsContent} from "./serviceElemData"

export default function Services(){
    const [content, setContent] = useState("risk")

    function handleClick(type){
        setContent(type)
    }
    return(
        <section className="services">
            <div className=" container service-container">
                <TitleH3>What we do_</TitleH3>
                <Paragraph><span>&gt; </span>We offer simple solutions to secure, optimize, and advance complex procurement operations, supply chains, production cycles, sales pipelines, and customer services for different industries.
                </Paragraph> 
                <Paragraph><span>&gt; </span>Through customized development and integration of innovative IT and cloud software solutions, we help our customers reinvent their business processes and implement approaches to new levels of innovation and efficiency. This results in the reduction of operational costs and significantly improves the direct flawless management and control of business processes.
                </Paragraph>
                <Paragraph><span>&gt; </span>We offer not only off-the-shelf market products but also carefully tailored integrations with turnkey solutions for vital operational processes in businesses. And with our experience and adaptation of new AI technologies and Data Analysis tools, we extend our services and custom solutions to focus on sensitive business matters. 
                </Paragraph>
                <div className="tabs-buttons-div">
                <TabButton isActive={content === "risk" } onClick={() => handleClick("risk")}>Security and Risk Assessment and Background Checks</TabButton>
                <TabButton isActive={content === "procurement" } onClick={() => handleClick("procurement")}>Procurement and Sourcing Services</TabButton>
                <TabButton isActive={content === "optimization" } onClick={() => handleClick("optimization")}>Production Optimization</TabButton>
                <TabButton isActive={content === "CRM" } onClick={() => handleClick("CRM")}>Sales pipeline and CRM</TabButton>
                </div>
                <div className="tabscontent">
                    <p>{serviceElemsContent[content]}</p>
                </div>
            </div>
        </section>
    )
}