import { TypeAnimation } from 'react-type-animation';
import profilePic from '../../assets/profile-image-hero-removebg.png';
import { AiFillGithub, AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai';
import Container from '../Container';
import Button from '../Button';

const Hero = () => {
    return (
        <Container>
            <div
                className="h-[80vh] 
                flex
                flex-col
                justify-between
                ">
                    <div className='my-auto'>
                <div
                    className="
                bg-gray-300
                flex
                flex-col-reverse
                sm:flex-row
                justify-between
                border-solid 
                border-2 
                border-orange-600
                ">
                    <div
                        className="
                    border-solid 
                    border-2 
                    border-orange-600
                    flex-col
                    my-auto
                    mx-auto
                    ">
                        <p className="text-sm">I'M GLAD YOU'RE HERE</p>
                        <p
                            className="
                        text-xl
                        sm:text-5xl
                        md:text-4xl
                        font-bold
                        ">
                            Hello i'm <span className="text-orange-600">Keotshepile</span> A
                        </p>
                        <h1
                            className="
                        text-xl
                        sm:text-4xl
                        md:text-5xl
                        font-bold
                        ">
                            Frontend Developer
                        </h1>
                        <div>I have experience building interactive web applications</div>
                        <div>using JavaScript and other cool frameworks.</div>
                        <div className="flex flex-between my-7">
                            <div className="text-5xl flex justify-center gap-3">
                                <AiFillLinkedin />
                                <AiFillGithub />
                                <AiFillTwitterSquare />
                            </div>
                            <div>
                                <Button label="Let's Chat" />
                            </div>
                        </div>
                    </div>
                    <div className="my-auto mx-auto">
                        <img
                            src={profilePic}
                            className="
                        w-[350px]
                        object-cover
                        rounded-full
                        border-solid 
                        border-2 
                        border-orange-600
                        "
                        />
                    </div>
                </div>
                <div>
                    <span>Tech Stack  |</span>
                    <span>ddffd</span>
                </div>
                </div>
            </div>
        </Container>
    );
};

export default Hero;
