const NavLinkList = [
    {
        title: 'Home',
    },
    {
        title: 'About',
    },
    {
        title: 'Team',
    },
    {
        title: 'Shop',
    },
    {
        title: 'Pages',
    },
]

type NavLinksProps = {
    selectedPage: number,
    changeSelectedPage(id: number): void
}

const NavLinks = ({ selectedPage, changeSelectedPage }: NavLinksProps) => {
    return (
        <ul className="hidden lg:flex justify-between items-center">
            {
                NavLinkList.map((link, id) => (
                    <li key={id} className="mr-[60px] last:mr-0" onClick={() => changeSelectedPage(id)}>
                        <span className={`cursor-pointer ${id === selectedPage? 'text-[#FAC422]' : 'text-white'} text-white text-base leading-[26px]`}>{ link.title }</span>
                    </li>
                ))
            }
        </ul>
    )
}

export default NavLinks