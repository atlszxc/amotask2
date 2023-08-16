const LinksList = [
    {
        title: 'Twitch'
    },
    {
        title: 'Instagram'
    },
    {
        title: 'Facebook'
    },
]

const Links = () => {
    return (
        <div className="hidden md:flex flex-col justify-center items-center h-[100vh] w-fit ml-[20px]">
            <ul className="">
                {
                    LinksList.map((link, id) => (
                        <li key={id} className="-rotate-90 mb-[80px] last:mb-0">
                            <span className="text-[#80858F] text-xs cursor-pointer hover:text-white duration-200">{ link.title }</span>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Links