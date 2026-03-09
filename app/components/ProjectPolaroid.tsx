import './ProjectPolaroid.css';
import Image from 'next/image';

const tempProjectData = {
    name: ' Insert Project Name',
    description: 'A full-stack productivity app built with React and Firebase, featuring real-time sync and drag-and-drop task management.',
    techs: [
        {
            name: 'Python1',
            icon: '/icons/python_icon.png',
        },
        {
            name: 'Python2',
            icon: '/icons/python_icon.png',
        },
        {
            name: 'Python3',
            icon: '/icons/python_icon.png',
        }
    ],
    photo: '/projects/primepong.jpg',
    horizontal: false,
}

export interface projectPolaroidProps {

}

export default function ProjectPolaroid() {

    const polaroidStats = {

    }


    return (
        <div className={`card ${tempProjectData.horizontal? "w-72":"w-56"}`}>
            <div className="picture">
                <Image
                    src={tempProjectData.photo}
                    alt={tempProjectData.name}
                    width={764}
                    height={573}
                    sizes="(max-width: 764px) 100vw,50vw"
                    className="h-full w-auto"
                />
            </div>
            <div className="details">
                <div className="details-title">
                    {tempProjectData.name}
                </div>
                {/* <div className="details-description">
                    {tempProjectData.description}
                </div> */}
            </div>
            <div className="stack">
                {tempProjectData.techs.map((tech) => (
                    <img src={tech.icon} alt={tech.name} key={tech.name} className="stack-pic"/>
                ))}
            </div>
        </div>
    )
}