import {useState} from "react";

export default function Project({
                                    projName,
                                    projDescription,
                                    projImg,
                                    projLink,
                                }: {
    projName: string;
    projDescription: string;
    projImg: string;
    projLink: string;
}) {
    const [hovered, setHovered] = useState<boolean>(false);

    return (
        <>
            <div
                id="projContainer"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onClick={() => window.open(projLink)}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '20px auto',
                    width: '90%',
                    maxWidth: '800px',
                    minHeight: '250px',
                    padding: '24px',
                    border: hovered ? '2px solid red' : '2px solid white',
                    borderRadius: '12px',
                    fontSize: '24px',
                    cursor: hovered ? 'progress' : 'pointer',
                }}
            >
                <div
                    id="left"
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <div
                        id="imgContainer"
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <img
                            src={projImg}
                            alt={projName}
                            style={{
                                width: '250px',
                                height: '150px',
                                borderRadius: '6px'
                            }}
                        />
                    </div>
                </div>

                <div
                    id="right"
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        marginLeft: '40px',
                    }}
                >
                    <div id="name_right_top" style={{paddingBottom: '16px'}}>
                        <strong>{projName}</strong>
                    </div>
                    <div id="description_right_below_name" style={{fontSize: '18px'}}>
                        {projDescription}
                    </div>
                </div>
            </div>
        </>
    )

}