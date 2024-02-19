import Container from "../Container";
import Heading from "../Heading";
import ContactForm from "./Contactform";

const Contacts = () => {
    return (
        <Container>
            {/* <div className="flex flex-row justify-between">
                <div className="">
                    <div>
                        <Heading title="Talk to me" center />
                    </div>
                    <div>
                        <div>
                            <ul></ul>
                        </div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div>
                    <Heading title="Send a quick message" center />
                </div>
            </div> */}
            <ContactForm />
        </Container>
    );
}
 
export default Contacts;