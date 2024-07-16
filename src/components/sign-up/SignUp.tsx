import React from 'react';
import {Button, Form, Input} from 'antd';
import {useNavigate} from 'react-router-dom'
import back from '../../assets/image/background-effect.png'
import Base_url from "../../routes/ApiConfig.ts";

interface SignUpFormValues {
    name: string;
    email: string;
    key: string;
    secret: string;
    back: string;

}

export default function SignUp() {

    const navigate = useNavigate()
    const onFinish = async (values: SignUpFormValues) => {
        console.log('Received values of form: ', values);

        const url = `${Base_url}/signup`;
        const method = 'POST';
        const body = JSON.stringify(values);
        const secret = values.secret;


        let sign = url + method + body + secret


        localStorage.setItem('token', JSON.stringify({
            sign: sign,
            key: values.key
        }));

        try {
            const response = await fetch(url, {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                    'Key': values.key,
                    'Sign': sign
                },
                body: body
            });

            if (!response.ok) {
                throw new Error('Tarmoq javobi yaroqli emas: ' + response.statusText);
            }
            const data = await response.json();
            console.log('Data received from server:', data);

            navigate('/');
        } catch (error) {
            console.error('There was a problem with your fetch operation:', error);
        }
    };

    return (
        <div className={'relative'}>
            <img className={'fixed z-[-10]'} src={back} alt=""/>
            <div className="container flex justify-center items-center h-screen">
                <div className="form-container bg-white px-7 py-12 rounded-[12px] shadow-lg lg:w-[430px]">
                    <h2 className="text-center text-[36px] font-bold pb-4">Sign Up</h2>
                    <Form
                        name="signup"
                        initialValues={{remember: true}}
                        onFinish={onFinish}
                    >
                        <p className={'font-medium pb-1'}>Username</p>
                        <Form.Item
                            name="name"
                            rules={[{required: true, message: 'Please input your Username!'}]}
                        >
                            <Input placeholder="Username" rootClassName={'hover:shadow'}/>
                        </Form.Item>
                        <p className={'font-medium pb-1'}>Email</p>
                        <Form.Item
                            name="email"
                            rules={[{required: true, message: 'Please input your Email!'}]}
                        >
                            <Input placeholder="Enter your email"/>
                        </Form.Item>
                        <p className={'font-medium pb-1'}>Key</p>
                        <Form.Item
                            name="key"
                            rules={[{required: true, message: 'Please input your Key!'}]}
                        >
                            <Input.Password placeholder="Enter your key"/>
                        </Form.Item>
                        <p className={'font-medium pb-1'}>Secret Key</p>
                        <Form.Item
                            name="secret"
                            rules={[{required: true, message: 'Please input your Secret Key!'}]}
                        >
                            <Input.Password placeholder="Enter your secret key"/>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="w-full bg-[#6200EE]">
                                Sign Up
                            </Button>
                        </Form.Item>
                    </Form>
                    <p className="sign-in-link">
                        Already signed up?{' '}
                        <a href="/sign-in" className="text-[#6200EE]">
                            Go to sign in.
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
