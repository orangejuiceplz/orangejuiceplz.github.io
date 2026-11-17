import {useState} from "react";


export default function HeaderItem(
    {
        name,
        selected,
        setSelected
    } :

    {
            name: string;
            selected: boolean;
            setSelected: (arg0: string) => void;
    }
) {
    const [isHovered, setHov] = useState<boolean>(false);
    return (
        <>

            <li

                onMouseOver={()=> setHov(true)}
                onMouseLeave={()=> setHov(false)}
                onClick={() => setSelected(name)}

                style={{
                padding:'25px',
                cursor: 'pointer',
                color: selected? 'yellow' :isHovered? 'red' : 'white',
            }}>
                {name}
            </li>

    </>

    );
}