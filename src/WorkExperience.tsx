import {useState} from "react";

export default function WorkExperience(
    {

        company,
        position,
        start,
        end,
        description,
        imgSrc,
        link
    }:
        {

            company: string;
            position: string;
            start: string;
            end?: string;
            description: string;
            imgSrc?: string;
            link?: string;
        }
) {

    const [hovered, setHovered] = useState<boolean>(false);

    return (


        <>
            <div


                onClick={() => link && window.open(link)}
                onMouseOver={() => setHovered(true)}
                onMouseOut={() => setHovered(false)}
                style={{
                    display: "flex",
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '20px auto',
                    width: '90%',
                    maxWidth: '800px',
                    minHeight: '250px',
                    padding: '24px',
                    fontSize: '24px',
                    cursor: hovered ? 'crosshair' : 'pointer',
                }}


            >

                <div
                    id="left"
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        marginLeft: '40px',
                    }}

                >

                    <div>

                        {position} at {company}

                    </div>

                    <div>
                        {start} - {end ? end : "present"}
                    </div>

                    <div>
                        {description}
                    </div>
                </div>

                <div
                    id ={"right"}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}

                >
                    {imgSrc && <img src={imgSrc} alt={company} style={{ width: '50vw', height: '75vh'}} />}
                </div>


            </div>

        </>
    )


}