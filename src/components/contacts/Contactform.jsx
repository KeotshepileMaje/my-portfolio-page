import { useForm } from 'react-hook-form';
import Button from '../Button';
import { useState } from 'react';
import TextArea from '../TextArea';
import Input from '../Input'
import Heading from '../Heading';

const ContactForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        }
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div>
            <div className='p-4'>
                <Heading title="Send a quick message" center />
            </div>
            
            <div className="flex flex-row gap-4">
                <Input
                    id="name"
                    label="Name / Organisation"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                />
                <Input
                    id="email"
                    label="Email"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                    type="text"
                />
            </div>

            <TextArea
                id="password"
                label="Message"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
                type="password"
            />
            <Button label="Send" onClick={handleSubmit(onSubmit)} />
        </div>
    );
};

export default ContactForm;
