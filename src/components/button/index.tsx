import { BUTTON_TYPE } from "../../const"

type ButtonProp = {
    title: string,
    variant?: string,
    extraOptions?: Object | null
}

const Button = ({ title, variant='default', extraOptions=null }: ButtonProp) => {
    if(variant === BUTTON_TYPE.OUTLINE) {
        return (
            <button 
                className={`px-[32px] py-[16px] border-solid border-2 border-white font-normal text-lg leading-[30px] text-white ${extraOptions && Object.values(extraOptions).map(opt => opt).join(' ')}`}
            >
                { title }
            </button>
        )
    }

    if(variant === BUTTON_TYPE.ACCENT) {
        return (
            <button className="px-[32px] py-[16px] bg-[#57B8FF] text-white">{ title }</button>
        )
    }

    if(variant === BUTTON_TYPE.DEFAULT) {
        return (
            <button className="px-[32px] py-[16px] text-white">{ title }</button>
        )
    }
}

export default Button