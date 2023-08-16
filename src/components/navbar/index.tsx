import { useState } from "react"
import { BUTTON_TYPE } from "../../const"
import Button from "../button"
import CartIcon from "./components/CartIcon"
import Logo from "./components/Logo"
import NavLinks from "./components/NavLinks"

const Navbar = () => {
    const [selectedPage, setSelectedPage] = useState<number>(0)

    return (
        <nav className="container hidden lg:flex justify-between items-center left-[50%] translate-x-[-50%] mt-[20px] absolute z-10">
            <Logo />
            <NavLinks selectedPage={selectedPage} changeSelectedPage={setSelectedPage} />
            <div className="flex items-center">
                <CartIcon />
                <Button title="Contact Us" variant={BUTTON_TYPE.OUTLINE} extraOptions={{ margin: 'ml-[32px]' }} />
            </div>
        </nav>
    )
}

export default Navbar