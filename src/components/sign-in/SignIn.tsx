import React from 'react';
import { Button, Form, Input } from 'antd';
import back from '../../assets/image/background-effect.png';
import axios from 'axios';

import Base_url from '../../routes/ApiConfig.ts';
import {saveToken} from "../../routes/Auth.ts";

export default function SignIn() {
    const onFinish = async (values: { username: string; password: string }) => {
        console.log('Received values of form: ', values);

        const url = `${Base_url}/myself`;
        try {
            const response = await axios.post(url, values, {
                headers: {
                    'Key': `${values.password}`,
                    'Sign': '2892678138d8d793a28fc49055095d8b',
                    'Content-Type': 'application/json'
                }
            });

            if (response.status === 200) {
                const data = response.data;
                console.log('Data received from server:', data);

                // Tokenni saqlash
                saveToken(data.token); // token server javobidan olinyapti deb faraz qilyapmiz

                // Keyin boshqa sahifaga yo'naltirish kerak bo'lsa
                // navigate('/home'); // masalan, `useNavigate` hookidan foydalanib
            } else {
                throw new Error('Tarmoq javobi yaroqli emas: ' + response.statusText);
            }
        } catch (error) {
            console.error('There was a problem with your fetch operation:', error);
        }
    };

    return (
        <div className={'relative'}>
            <img className={'fixed z-[-10]'} src={back} alt="" />
            <div className={'flex justify-center items-center h-screen'}>
                <div className="form-container bg-white px-7 py-12 rounded-[12px] shadow-lg lg:w-[430px]">
                    <h2 className="text-center text-[36px] font-bold pb-4">Sign in</h2>
                    <Form name="sign_in" initialValues={{ remember: true }} onFinish={onFinish}>
                        <p className={'font-medium pb-1'}>Username</p>
                        <Form.Item
                            name="username"
                            rules={[{ required: true, message: 'Please input your Username!' }]}
                        >
                            <Input placeholder="Username" rootClassName={'hover:shadow'} />
                        </Form.Item>
                        <p className={'font-medium pb-1'}>Password</p>
                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Please input your Password!' }]}
                        >
                            <Input.Password placeholder="Enter your password" />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="w-full bg-[#6200EE]">
                                Sign In
                            </Button>
                        </Form.Item>
                    </Form>
                    <p className="sign-in-link">
                        Already signed up?{' '}
                        <a href="/login" className="text-[#6200EE]">
                            Go to sign up.
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
