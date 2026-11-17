import {useState} from "react";
import SkillImages from "./SkillImages";

export default function Skills({ skills }: { skills: string[] }) {
    const [hovering, setHovering] = useState<(string | null)> (null)

    return (
        <div
            id="skills-container"
            style={{
                paddingTop: '20px',
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '40px',
            }}
        >
            {skills.map((skill) => (
                <Skill skill={skill} setHovering={setHovering} />
            ))}

            <div

                style= {{
                    fontSize: "20px",
                    maxWidth: "50x",
                    maxHeight: "50px",
            }}
            >
                {hovering && <SkillImages skill={hovering}/>}
            </div>
        </div>
    );
}

export function Skill({ skill, setHovering}: { skill: string, setHovering: (arg0:string | null)=>void }) {
    return (
        <div
            className="skill-box"
            onMouseOver={() => setHovering(skill)}
            onMouseLeave={() => setHovering(null)}
            style={{
                display: 'flex',
                color: 'white',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '30px',
                border: '2px solid white',
            }}




        >
            - {skill}
        </div>
    );
}
