import { AiFillGithub } from 'react-icons/ai';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import Heading from '../Heading';
import { truncateText } from '../../utils/truncate';

const Card = ({ image, title, description, techUsed }) => {
    const truncatedDescription = truncateText(description)
    return (
        <div
            className="rounded-md
            border
            border-orange-600
            flex
            flex-col
            md:flex-row
            w-[100%]
            h-[300px]
        ">
            <div
                className="max-w-xs
                bg-blue-300
                rounded-md
                border
                border-orange-600
                basis-1/2
                overflow-hidden
                shadow-lg
                object-cover
                m-4
                ">
                <img
                    src={image}
                    alt={title}
                    className="
                    w-[100%]
                    h-[100%]
                    object-cover
                rounded-md
                transition-transform
                group-hover:scale-110
                duration-200
                "
                />
            </div>
            <div className="basis-1/2 flex flex-col justify-center gap-2 my-auto mx-auto ">
                <Heading title={title} center />
                <div>{truncatedDescription}</div>
                <div className='text-center font-bold'>{techUsed}</div>
                <div className="flex justify-center gap-4">
                    <span className="flex items-center gap-2">
                        Code <AiFillGithub />
                    </span>
                    <span className="flex items-center gap-2">
                        Live Demo <BsBoxArrowUpRight />
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Card;
