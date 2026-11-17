import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import Project from "./Project.tsx";
import Skills from "./Skills.tsx";
import HeaderItem from "./HeaderItem.tsx";

function App() {
/*  const [count, setCount] = useState(0) */
    const [display, setDisplay] = useState<string>("Home");
/* goal: scroll without the usage of ids or fragments, scroll observer or something, no outside library; either scrollx or something else thats more efficient / cleaner, assuming thats its split into section project and skills  */
    const [hovered, setHovered] = useState<boolean>(false)

    return (
        <>

            <ul style = {{
              display: 'flex',
              listStyle: 'none',
              width: '100vw',
              position: 'sticky',
              top: '0',
              left: '0',
                backgroundColor: 'black',

            }}

            >

                <HeaderItem name={"Home"} selected={display==="Home"} setSelected={setDisplay}/>
                <HeaderItem name={"Projects"} selected={display==="Projects"} setSelected={setDisplay} />
                <HeaderItem name={"Skills"} selected={display==="Skills"} setSelected={setDisplay}/>


            </ul>

            <div style={{
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
                        fontSize: "20px",
                        color: hovered ? "gold" : "grey",
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
