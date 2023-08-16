import HeroImage from '../../../assets/Hero.svg'

const Rignt = () => {
    return (
        <div className="w-0 h-0 lg:w-[46%] lg:bg-[#57B8FF] lg:h-[100vh] relative">
            <img src={HeroImage} alt=""  className='absolute top-1/2 translate-y-[-50%] left-[-90px]'/>
        </div>
    )
}

export default Rignt