import TopicIcon from '../../assets/TopicIcon.svg'

type TopicProps = {
    title: string
}

const Topic = ({ title }: TopicProps) => {
    return (
        <div className='hidden sm:flex items-center'>
            <img src={TopicIcon} alt="Topic" width={32} height={32} className='mr-[8px]' />
            <span className='text-[#57B8FF] text-base uppercase'>{ title }</span>
        </div>
    )
}

export default Topic