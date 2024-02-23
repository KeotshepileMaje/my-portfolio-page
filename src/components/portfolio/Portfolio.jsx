import Container from '../Container';
import Card from '../cards/Card';
import project1Image from '../../assets/project-1.png';
import Heading from '../Heading';

const Portfolio = () => {
    return (
        <Container>
            <div
                className="
            bg-yellow-200
            w-[100%]
            rounded-lg
            py-4
            h-min-[80vh]
            flex
            justify-center
            align-center
            ">
                <div
                    className="
                my-auto
                mx-auto
                ">
                    <div>
                        <p className='text-center'>Portfolio</p>
                        <Heading
                            title='SOME OF MY WORK'
                            center
                        />
                    </div>
                    <div className='flex flex-col gap-4'>
                    <Card
                        title="E-Commerce"
                        image={project1Image}
                        techUsed={
                            <ul className="flex flex-row justify-center gap-4">
                                <li>Nextjs</li>
                                <li>TailWindCss</li>
                                <li>Mangodb</li>
                                <li></li>
                            </ul>
                        }
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    />
                    <Card
                        title="E-Commerce"
                        image={project1Image}
                        techUsed={
                            <ul className="flex flex-row justify-center gap-4">
                                <li>Nextjs</li>
                                <li>TailWindCss</li>
                                <li>Mangodb</li>
                                <li></li>
                            </ul>
                        }
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    />
                    <Card
                        title="E-Commerce"
                        image={project1Image}
                        techUsed={
                            <ul className="flex flex-row justify-center gap-4">
                                <li>Nextjs</li>
                                <li>TailWindCss</li>
                                <li>Mangodb</li>
                                <li></li>
                            </ul>
                        }
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    />
                    </div>
                    
                </div>
            </div>
        </Container>
    );
};

export default Portfolio;
