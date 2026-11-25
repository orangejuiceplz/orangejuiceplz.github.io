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
                    justifyContent: 'space-between',
                    gap: '40px',
                    margin: '20px auto',
                    width: '90%',
                    maxWidth: '1000px',
                    minHeight: '250px',
                    padding: '40px',
                    cursor: hovered ? 'crosshair' : 'pointer',
                    border: hovered ? '2px solid red' : '2px solid white',
                    backgroundColor: hovered ? 'grey' : 'transparent',
                    borderRadius: '12px',
                }}


            >

                <div
                    id="left"
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}

                >

                    <div

                        style={{
                            fontSize: '28px',
                            fontWeight: 'bold',
                            paddingBottom: '8px',
                        }}

                    >

                        {position} at {company}

                    </div>

                    <div

                        style={{
                            fontSize: '16px',
                            color: 'grey',
                            paddingBottom: '20px',
                        }}

                    >
                        {start} - {end ? end : "present"}
                    </div>

                    <div
                        style={{
                            fontSize: '18px',
                        }}
                    >
                        {description}
                    </div>
                </div>

                <div
                    id={"right"}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}

                >
                    {imgSrc && <img src={imgSrc} alt={company} style={{width: '250px', height: '150px'}}/>}
                </div>


            </div>

        </>
    )


}