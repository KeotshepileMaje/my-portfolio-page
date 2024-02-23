import Container from '../Container';
import Heading from '../Heading';
import ContactForm from './Contactform';
import { FaPhoneVolume } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';


const ContactCart = ({
    icon: Icon,
    title,
    text
}) => {
    return (
        <div className='
        flex
        flex-row
        gap-2
        p-4
        '>
            <div className='bg-red-100'>
                <Icon size={50}/>
            </div>
            <div>
                <div>{title}</div>
                <div className='text-lg font-bold '>{text}</div>
            </div>
        </div>
    );
}
const Contacts = () => {
    return (
        <Container>
            <div
                className="flex flex-col md:flex-row justify-between bg-purple-100"
                id="contacts">
                <div
                    className="
                bg-blue-200
                basis-2/5
                p-4
                ">
                    <div className="pb-4">
                        <Heading title="Talk to me" center />
                    </div>
                    <div className="flex flex-col gap-4">
                        <ContactCart icon={FaPhoneVolume} title="Phone" text="+27 769 277 970" />
                        <ContactCart
                            icon={MdEmail}
                            title="Email"
                            text="keotshepilemaje@gmail.com"
                        />
                    </div>
                </div>
                <div
                    className="
                bg-red-200
                basis-3/5
                p-4
                flex
                ">
                    <ContactForm />
                </div>
            </div>
        </Container>
    );
};

export default Contacts;
