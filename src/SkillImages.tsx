import javaLogo from './assets/java.png'
import cssLogo from './assets/css-transparent.png'
import htmlLogo from './assets/html.png'
import jsLogo from './assets/js.png'
import reactLogo from './assets/react.png'
import opsec from './assets/opsec.png'


// "Java", "Javascript", "HTML", "React", "CSS"
const imageMap: {
    [skill: string]: string
} = {
    "Java": javaLogo,
    "CSS": cssLogo,
    "Javascript": jsLogo,
    "HTML": htmlLogo,
    "React": reactLogo,
    "opsec": opsec,
}

export default function SkillImages({skill}: { skill: string }) {
    const image = imageMap[skill];
    return (
        <img
            src={image}
            alt={skill}
            style={{
                maxHeight: "50px",
                maxWidth: "50px",
                marginLeft: "75%",
            }}
        />
    );
}