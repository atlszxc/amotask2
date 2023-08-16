import LogoImg from '../../../assets/Logo.svg'

const Logo = () => {
    return (
        <img src={LogoImg} height={48} width={170} alt="Logo" className='cursor-pointer' />
    )
}

export default Logo