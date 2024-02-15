import Container from "../Container";
import Heading from "../Heading";

const Contacts = () => {
    return (
        <Container>
            <div className="flex flex-row justify-between">
                <div className="">
                    <div>
                        <Heading title="Talk to me" center />
                    </div>
                    <div>
                        <div><ul></ul></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div>
                    <Heading title="Send a quick message" center />
                </div>
            </div>
        </Container>
    );
}
 
export default Contacts;