import {useState} from 'react'
import Project from "./Project.tsx";
import Skills from "./Skills.tsx";
import HeaderItem from "./HeaderItem.tsx";
import WorkExperience from "./WorkExperience.tsx";
import CopyWebsite from "./assets/copy.png";
import Calc from './assets/calc.png';
import NibbleCode from './assets/NibbleCode.png';

function App() {
    const [display, setDisplay] = useState<string>("Home");
    const [hovered, setHovered] = useState<boolean>(false)

    return (
        <>
            <ul
                style={{
                    display: 'flex',
                    listStyle: 'none',
                    width: '100%',
                    position: 'sticky',
                    margin: '0',
                    padding: '0',
                    top: '0',
                    left: '0',
                    backgroundColor: 'black',
                }}
            >
                <HeaderItem name={"Home"} selected={display === "Home"} setSelected={setDisplay}/>
                <HeaderItem name={"Projects"} selected={display === "Projects"} setSelected={setDisplay}/>
                <HeaderItem name={"Skills"} selected={display === "Skills"} setSelected={setDisplay}/>
                <li

                    onMouseOver={() => setHovered(true)}
                    onMouseOut={() => setHovered(false)}
                    style={{
                        marginLeft: 'auto',
                        fontSize: "20px",
                        color: hovered ? "gold" : "white",
                        padding: "20px",
                    }}

                >
                    Shiven Kishore
                </li>
            </ul>

            {
                display === "Home" ?
                    <Home/>
                    :
                    display === "Projects" ?
                        <Projects/>
                        :
                        display === "Skills" ?
                            <>
                                <Skills skills={["Java", "Javascript", "HTML", "React", "CSS", "opsec"]}/>
                            </>
                            :

                            display === "Work Experience" ?
                                <Home/>
                                :

                                <>
                                    Oops, something went wrong
                                </>
            }
        </>
    );
}

function Home() {
    const [hovered, setHovered] = useState<boolean>(false)
    return (
        <>
            <div style={{
                display: 'grid',
                gridTemplateRows: 'repeat(3, auto)',
                justifyItems: 'center',
                gap: '8px',
                paddingTop: '80px',
                paddingBottom: '40px',
            }}>
                <p
                    onMouseOver={() => setHovered(true)}
                    onMouseOut={() => setHovered(false)}
                    style={{
                        margin: '0',
                        lineHeight: '70px',
                        fontSize: hovered ? "56px" : "48px",
                        fontWeight: 'bold',
                        color: hovered ? "gold" : "grey",
                    }}
                >Shiven Kishore</p>
                <p style={{margin: '0', fontSize: '22px'}}>Class of 2027</p>
                <p style={{margin: '0', fontSize: '18px'}}>Freehold High School</p>
            </div>

            <h2 style={{textAlign: 'center', fontSize: '32px', margin: '0'}}>Experience</h2>

            <WorkExperience position={"President"}
                            start={"9-28-2026"}
                            description={"Chartering the future operations of NibbleCode Inc."}
                            link={"https://nibblecode.org"}
                            company={"NibbleCode Inc."}
                            imgSrc={NibbleCode}
            />

        </>
    )

}

function Projects() {
    return (
        <>
            <Project
                projName={"Copy Website"}
                projDescription={"The first major project that we did in Honors Senior Seminar: Web Data and AI where we needed to copy the model website using our newfound knowledge of HTML, CSS, and JS"}
                projImg={CopyWebsite}
                projLink={"https://orangejuiceplz.github.io/Copy-Website"}
            />
            <Project
                projName={"Calculator"}
                projDescription={"The second major project that we did in class where we needed to recreate a calculator that we designed. It tested our skill with both stying and using JS"}
                projImg={Calc}
                projLink={"https://orangejuiceplz.github.io/Calculator"}
            />
        </>
    )
}

export default App