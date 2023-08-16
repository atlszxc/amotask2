import { BUTTON_TYPE } from "../../../const"
import Button from "../../button"
import Topic from "../../topic"
import Links from "./Links"
import UnderlineText from "./UndelineText"

const Left = () => {
    return (
        <div className="w-[100vw] lg:w-[54%] bg-black h-[100vh] flex">
            <Links />
            <div className="flex flex-col justify-center pr-[80px]">
                <Topic title="FUTURE OF eSPORTS" />
                <p className="text-white text-7xl leading-[86px]">
                    Unleash the <br /> Next <UnderlineText /> <br /> of Gaming
                </p>
                <p className="text-[#999999] text-lg mt-[43px] pr-[100px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis, nec donec in morbi pulvinar. Enim non pulvinar neque.
                </p>
                <footer className="mt-[54px]">
                    <Button title="Explore more" variant={BUTTON_TYPE.ACCENT} />
                    <Button title="View our team" />
                </footer>
            </div>
        </div>
    )
}

export default Left