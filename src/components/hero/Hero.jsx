import { TypeAnimation } from 'react-type-animation';
import profilePic from '../../assets/profile-image-hero.jpg';
import { AiFillGithub, AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai';
import Container from '../Container';

const Hero = () => {
    return (
        <Container>
        <div>
            <div
                className="
                bg-gray-200
                h-[80vh]
                mx-auto
                flex
                flex-col-reverse
                sm:flex-row
                justify-center
                align-center
                pt-4
            ">
                <div
                    className="
                bg-blue-300
                flex-col
                my-auto
                mx-auto
                ">
                    <p
                        className="
                    text-xl
                    sm:text-5xl
                    md:text-4xl
                    font-bold
                    text-gray-200
                    ">
                        Hi! I am Keotshepile Maje
                    </p>
                    <h1
                        className="
                    text-4xl
                    sm:text-6xl
                    md:text-7xl
                    font-bold
                    ms:py-6
                    ">
                        <TypeAnimation
                            sequence={['Frontend Developer', 1000]}
                            wrapper="span"
                            speed={40}
                            cursor={true}
                            repeat={Infinity}
                        />
                    </h1>
                    <div className='flex gap-3'>
                        <AiFillLinkedin />
                        <AiFillGithub />
                        <AiFillTwitterSquare />
                    </div>
                </div>
                <div>
                    <img
                        src={profilePic}
                        className="
                        object-cover
                    w-[300px]
                    sm:w-[500px]
                    mx-auto
                    h-auto
                    rounded-full
                    "
                    />
                </div>
            </div>
        </div>
        </Container>
    );
};

export default Hero;
