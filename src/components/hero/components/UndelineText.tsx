import Underline from '../../../assets/Underline.svg'

const UnderlineText = () => {
    return (
        <div className='relative inline-block'>
            <span>Generation</span>
            <img src={Underline} className='hidden md:block absolute' />
        </div>
    )
}

export default UnderlineText