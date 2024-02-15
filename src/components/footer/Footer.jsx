import { MdFacebook, MdOutlineFacebook } from 'react-icons/md';
import { AiFillTwitterCircle, AiFillInstagram, AiFillYoutube } from 'react-icons/ai';
import Container from '../Container';

const Footer = () => {
    return (
        <footer className="bg-slate-700 text-slate-200 text-sm mt-16">
            <Container>
                <div
                    className="
                flex
                flex-row
                justify-center
                py-4
                ">
                    <div>
                        <div className="py-1">Keotshepile</div>
                        <div className="flex flex-row gap-3 py-1">
                            <div>About</div>
                            <div>Portfolio</div>
                            <div>Contact</div>
                        </div>
                        <div className="flex flex-row gap-3 py-1">
                            <div to="/">
                                <MdOutlineFacebook size={30} />
                            </div>
                            <div to="/">
                                <AiFillTwitterCircle size={30} />
                            </div>
                            <div to="/">
                                <AiFillInstagram size={30} />
                            </div>
                            <div to="/">
                                <AiFillYoutube size={30} />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
