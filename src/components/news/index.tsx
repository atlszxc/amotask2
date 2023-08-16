import { BUTTON_TYPE } from "../../const"
import Button from "../button"
import Topic from "../topic"

import Controller from '../../assets/Controller.svg'
import Navi from '../../assets/NAVI.svg'
import RX from '../../assets/RX.svg'
import A1 from '../../assets/A1.svg'
import Keyboard from '../../assets/Keyboard.svg'

const news = [
    {
        img: Controller,
        title: 'Esports Group teams up with the Indianapolis Colts',
        date: 'April 2, 2021',
    },
    {
        img: Navi,
        title: 'NAVI reveals s1mple fifth anniversary',
        date: 'April 2, 2021',
    },
    {
        img: A1,
        title: 'A1esports Shares new picture',
        date: 'April 2, 2021',
    },
    {
        img: Keyboard,
        title: 'T1 unveil partnership with Razer',
        date: 'April 2, 2021',
    },
    {
        img: RX,
        title: 'RX secures content partnership with',
        date: 'April 2, 2021',
    },
]

const News = () => {
    return (
       <section className="bg-black py-[130px] w-full">
        <section className="container mx-auto">
            <header className="flex justify-between">
                <div>
                    <Topic title="FUTURE OF eSPORTS" />
                    <p className="text-white text-[64px] capitalize mt-[22px]">
                        Latest News & <br /> Articles
                    </p>
                </div>
                <div className="hidden sm:flex justify-end items-end">
                    <Button title="Read More" variant={BUTTON_TYPE.ACCENT} />
                </div>
            </header>
            <section className="flex flex-col justify-center lg:grid lg:grid-cols-4 lg:grid-rows-2 lg:gap-6 mt-[64px]">
                {
                    news.map((n, id) => (
                        <div key={id} className="first:row-span-2 first:col-span-2">
                            <img src={n.img} alt="" />
                            <p className={`text-[#57B8FF] ${id === 0? 'text-lg mt-[54px]' : 'mt-[30px] text-base'}`}>
                                { n.date }
                            </p>
                            <p className={`text-white ${id === 0? 'text-4xl mt-[28px]' : 'text-2xl mt-[20px]'}`}>
                                { n.title }
                            </p>
                        </div>
                    ))
                }
            </section>
        </section>
       </section>
    )
}

export default News