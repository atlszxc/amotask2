import Logo from "../navbar/components/Logo"


const Footer = () => {
    return (
        <footer className="block md:flex bg-[#222730] px-[60px] pt-[130px] pb-[175px] w-full">
            <div className="mr-[150px]">
                <Logo />
                <p className='mt-[35px] text-base text-[#999] leading-[25px] max-w-[290px]'>
                    Lorem ipsum dolor amet, consectetur adipiscing elit. Eget nisl nunc quam ac sed turpis volutpat. Cursus sed massa non .
                </p>
            </div>
            <div className="mr-[150px]">
                <span className="text-white text-lg leading-[30px]">Menu Items</span>
                <ul className="mt-[24px]">
                    <li>
                        <span className="text-[#999999]">About</span>
                    </li>
                    <li className="mt-[12px]">
                        <span className="text-[#999999]">Blog</span>
                    </li>
                    <li className="mt-[12px]">
                        <span className="text-[#999999]">Shop</span>
                    </li>
                    <li className="mt-[12px]">
                        <span className="text-[#999999]">Contact Us</span>
                    </li>
                </ul>
            </div>
            <div className="mr-[150px]">
                <span className="text-white text-lg leading-[30px]">Other Pages</span>
                <ul className="mt-[24px]">
                    <li>
                        <span className="text-[#999999]">Styleguide</span>
                    </li>
                    <li className="mt-[12px]">
                        <span className="text-[#999999]">Changelog</span>
                    </li>
                    <li className="mt-[12px]">
                        <span className="text-[#999999]">Licenses</span>
                    </li>
                    <li className="mt-[12px]">
                        <span className="text-[#999999]">Team</span>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer