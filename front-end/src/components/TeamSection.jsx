import TeamCard from "./molecules/TeamCard";
import tomiPic from "../assets/imgs/tomi.jpg"

const TeamMembers = [
    {
        name: "Tomi Bello",
        img: tomiPic
    },
    {
        name: "Tomi Bello",
        img: tomiPic
    }, 
    {
        name: "Tomi Bello",
        img: tomiPic
    },
    {
        name: "Tomi Bello",
        img: tomiPic
    },
]
const TeamSection = () => {
    return (
        <div className="container mx-auto mb-[10vh] flex flex-col items-center md:flex-row gap-12">
            {
                TeamMembers.map((item) => {
                    const {img, name} = item
                    return (
                        <TeamCard imgUrl={img} name={name} />
                    )
                })
            }
        </div>
    )
}

export default TeamSection;

