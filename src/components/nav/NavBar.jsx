import Button from '../Button';
import Container from '../Container';

const NavBar = () => {
    return (
        <div
            className="
        sticky 
        top-0
        w-full
        bg-gray-400
        z-30
        shadow-sm
        ">
            <div className="py-4 border-b-[1px]">
                <div className="max-w-[1920px]
            mx-auto
            xl:px-20
            md:px-10
            px-4">
                    <div
                        className="
                    flex
                    items-center
                    justify-between
                    gap-3
                    md:gap-0
                    ">
                        <div href="/" className={`font-bold text-2xl`}>
                            Keotshepile
                        </div>
                        <div
                            className=" 
                        flex 
                        items-center 
                        gap-8 
                        md-gap-12
                        ">
                            <div
                                className="
                            hidden
                            md:flex
                            items-center 
                        gap-8 
                        md-gap-12
                            ">
                                <div>About</div>
                                <div>Portfolio</div>
                                <div>Contact</div>
                                <div className="max-w-[100px]"></div>
                            </div>

                            <Button label="Let's talk" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
