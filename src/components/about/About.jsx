import Heading from "../Heading";
import profileImg from '../../assets/profile-image.jpg'
import Container from "../Container";

const About = () => {
    return (
        <Container>
            <div className="py-10 h-auto" id="about">
                <div
                    className="
            flex 
            flex-col
            md:flex-row
            items-center
            md:gap-6
            gap-12
            px-10
            max-w-6xl
            mx-auto
            ">
                    <div className="w-full w-max-[400px] h-max-[300px]">
                        <img
                            src={profileImg}
                            alt="profile pic"
                            className="
                    object-cover
                    rounded-lg
                    "
                        />
                    </div>
                    <div>
                        <div className="p-2">
                            <Heading title="About Me" />
                            <p className="text-justify leading-7 w-11/12 mx-auto">
                                I am a highly motivated entry-level Software Developer. With solid
                                skills in Javascript, HTML, and CSS and Javascript frameworks,
                                thanks to my rigorous training at CodeSpace Academy. I thrive in
                                collaborative environments and excel at problem-solving, leveraging
                                my skills to create innovative solutions. I'm well-prepared to dive
                                headfirst into a dynamic role where I can learn and grow on the job.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default About;
