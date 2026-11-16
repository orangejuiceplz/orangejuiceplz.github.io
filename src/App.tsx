import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import Project from "./Project.tsx";
import Skills from "./Skills.tsx";

function App() {
/*  const [count, setCount] = useState(0) */

    const [hovered, setHovered] = useState<boolean>(false)

    return (
        <>
            <div id="topBar" style={{
                display: 'grid',
                gridTemplateRows: 'repeat(3, auto)',
                gap: '12px',
                paddingTop: '5%',
                paddingBottom: '5%'
            }}>
                <p
                    onMouseOver={() => setHovered(true)}
                    onMouseOut={() => setHovered(false)}

                    style={{
                        fontSize: hovered ? "75px" : "20px",
                        color: hovered ? "gold" : "white",
                        marginBottom: hovered ? "50px" : "0px",
                    }}

                >Shiven Kishore</p>
                <p>Class of 2027</p>
                <p>Freehold High School</p>
            </div>


            <div>

                <Project
                    projName={"Copy Website"}
                    projDescription={"The first major project that we did in Honors Senior Seminar: Web Data and AI where we needed to copy the model website using our newfound knowledge of HTML, CSS, and JS"}
                    projImg={"src/assets/copywebsite.png"}
                    projLink={"https://orangejuiceplz.github.io/Copy-Website"}
                />

                <Project
                    projName={"Calculator"}
                    projDescription={"The second major project that we did in class where we needed to recreate a calculator that we designed. It tested our skill with both stying and using JS"}
                    projImg={"src/assets/calc.png"}
                    projLink={"https://orangejuiceplz.github.io/Calculator"}
                />

                <Skills skills={["Java", "Javascript", "HTML", "React", "CSS", "opsec"]}
                />
            </div>

        </>
    );
}

export default App
