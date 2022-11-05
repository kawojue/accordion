import { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'


const Faq = ({ quest, ans }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <article className="cards">
            <div className="cards-quest">
                <h5 className="md:text-[1.2rem] md:leading-normal">
                    {quest}
                </h5>
                <div className="icon-container" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ?
                        <AiOutlineMinus /> :
                        <AiOutlinePlus />}
                </div>
            </div>
            {isOpen &&
                <p className="md:text-[0.9rem]">
                    {ans}
                </p>}
        </article>
    )
}

export default Faq