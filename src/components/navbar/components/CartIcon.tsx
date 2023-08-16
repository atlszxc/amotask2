import { useState } from 'react'
import CartIconImg from '../../../assets/CartIcon.svg'

const CartIcon = () => {
    const [cartCount, setCartCount] = useState<number>(0)

    return (
        <div className='relative cursor-pointer'>
            <div className='flex items-center justify-center absolute top-[-12px] right-[-16px] rounded-full bg-white w-[21px] h-[18px]'>
                { cartCount }
            </div>
            <img src={CartIconImg} width={32} height={32} alt="cart" onClick={() => setCartCount(cartCount + 1)} />
        </div>
    )
}

export default CartIcon