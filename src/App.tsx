import {useState} from 'react'
import Project from "./Project.tsx";
import Skills from "./Skills.tsx";
import HeaderItem from "./HeaderItem.tsx";
import WorkExperience from "./WorkExperience.tsx";

function App() {
    const [display, setDisplay] = useState<string>("Home");
    const [hovered, setHovered] = useState<boolean>(false)

    return (
        <>
            <ul
                style={{
                    display: 'flex',
                    listStyle: 'none',
                    width: '100vw',
                    position: 'sticky',
                    margin: '0',
                    padding: '0',
                    top: '0',
                    left: '0',
                    backgroundColor: 'black',
                }}
            >
                <li

                    onMouseOver={() => setHovered(true)}
                    onMouseOut={() => setHovered(false)}
                    style={{
                        fontSize: "20px",
                        color: hovered ? "gold" : "white",
                    }}

                >
                    Shiven Kishore
                </li>
                <HeaderItem name={"Home"} selected={display === "Home"} setSelected={setDisplay}/>
                <HeaderItem name={"Projects"} selected={display === "Projects"} setSelected={setDisplay}/>
                <HeaderItem name={"Skills"} selected={display === "Skills"} setSelected={setDisplay}/>
                <HeaderItem name={"Work Experience"} selected={display === "Work Experience"} setSelected={setDisplay}/>
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
                gap: '12px',
                paddingTop: '5%',
                paddingLeft: '50%'
            }}>
                <p
                    onMouseOver={() => setHovered(true)}
                    onMouseOut={() => setHovered(false)}
                    style={{
                        fontSize: "20px",
                        color: hovered ? "gold" : "grey",
                    }}
                >Shiven Kishore</p>
                <p>Class of 2027</p>
                <p>Freehold High School</p>
            </div>

            <WorkExperience position={"President"}
                            start={"9-28-2026"}
                            description={"doing nonsnese"}
                            link={"https://nibblecode.org"}
                            company={"NibbleCode Inc."}
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
                projImg={"src/assets/calc.png"}
                projLink={"https://orangejuiceplz.github.io/Copy-Website"}
            />
            <Project
                projName={"Calculator"}
                projDescription={"The second major project that we did in class where we needed to recreate a calculator that we designed. It tested our skill with both stying and using JS"}
                projImg={"src/assets/calc.png"}
                projLink={"https://orangejuiceplz.github.io/Calculator"}
            />
        </>
    )
}

export default App

