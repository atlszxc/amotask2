import Navbar from "../navbar"
import Left from "./components/Left"
import Rignt from "./components/Right"

import ApexLegend from '../../assets/ApexLegend.svg'
import Topic from "../topic"
import GameList from "./components/GameList"

const Hero = () => {
    return (
        <section className="relative w-full">
            <Navbar />
            <section className="md:flex">
                <Left />
                <Rignt />
            </section>
            <section className="block lg:flex bg-[#2A313C]">
                <div className="w-full lg:w-1/2 pl-[60px]">
                    <img src={ApexLegend} alt="Selected game" />
                </div>
                <div className="w-full lg:w-1/2">
                    <div className="px-[64px] py-[84px]">
                        <Topic title="FUTURE OF eSPORTS" />
                        <p className="hidden sm:inline-block text-white text-7xl leading-[74px] mt-[12px]">
                            Customize your Own Character
                        </p>
                        <p className="hidden sm:inline-block text-[#999999] text-lg mt-[38px]">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.
                        </p>
                        <GameList />
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Hero