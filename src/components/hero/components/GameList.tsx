import ApexLegenMini from '../../../assets/ApexLegendMini.svg'
import CODMini from '../../../assets/CODMini.svg'
import LOLMini from '../../../assets/LOLMini.svg'

const Games = [
    ApexLegenMini,
    LOLMini,
    CODMini
]

const GameList = () => {
    return (
        <div className='flex mt-[54px]'>
            {
                Games.map((game, id) => (
                    <div key={id} className='rounded-[20px] p-[12px] first:bg-[#3B3D46] mr-[20px] last:mr-[0px]'>
                        <img src={game} alt="" />
                    </div>
                ))
            }
        </div>
    )
}

export default GameList