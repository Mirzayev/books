import React, { useEffect, useState } from 'react';
import { Button, Form, Input, Modal, Badge, Space } from 'antd';
import { useNavigate } from 'react-router-dom';
import back_image from "../../assets/image/background-effect.png";
import user_image from '../../assets/image/user-image.png';
import could_nav from '../../assets/image/could.png';
import Base_url from "../../routes/ApiConfig.ts";

export default function HomePage() {
    const navigate = useNavigate();

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [books, setBooks] = useState<any[]>([]);
    const [form] = Form.useForm();

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        form.submit();
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate("/login");
        } else {
            fetchBooks();
        }
    }, []);

    const fetchBooks = async () => {
        const url = `${Base_url}/books`;
        const key = localStorage.getItem('key');
        const sign = localStorage.getItem('sign');

        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Key': key,
                    'Sign': sign,
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                const data = await response.json();
                setBooks(data);
            } else {
                throw new Error('Tarmoq javobi yaroqli emas: ' + response.statusText);
            }
        } catch (error) {
            console.error('There was a problem with your fetch operation:', error);
        }
    };

    const createBook = async (values: { isbn: string }) => {
        const url = `${Base_url}/books`;
        const key = localStorage.getItem('key');
        const sign = localStorage.getItem('sign');

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Key': key,
                    'Sign': sign,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            });

            if (response.ok) {
                fetchBooks();
                handleCancel();
            } else {
                throw new Error('Tarmoq javobi yaroqli emas: ' + response.statusText);
            }
        } catch (error) {
            console.error('There was a problem with your fetch operation:', error);
        }
    };

    const onFinish = (values: { isbn: string }) => {
        createBook(values);
    };

    return (
        <div className={'relative'}>
            <img className={'fixed z-[-10] h-full sm:h-auto'} src={back_image} alt="" />
            <div className={'max-w-[1440px] mx-auto pt-5 px-5'}>
                <div className={'flex items-center justify-between'}>
                    <div className={'flex gap-4 items-center'}>
                        <img className={'w-9'} src={could_nav} alt="" />
                        <div className={'flex gap-1 items-center text-[18px]'}>
                            <p className={'text-[#6200EE]'}>Books</p>
                            <p>List</p>
                        </div>
                        <div className={'flex items-center gap-3 text-[#FEFEFE] max-w-[300px] w-full px-3 py-1 duration-300'}>
                            <i className="fa-solid fa-magnifying-glass group-hover:text-black text-gray-400"></i>
                            <input type="text" placeholder={'Search for any training you want'} className={'sm:block hidden bg-transparent text-[16px] w-[230px] outline-none'} />
                        </div>
                    </div>

                    <div className={'flex items-center gap-3'}>
                        <Space>
                            <Badge dot>
                                <i className="fa-regular fa-bell text-lg"></i>
                            </Badge>
                        </Space>
                        <img src={user_image} alt="" />
                    </div>
                </div>

                <div className={'text-white sm:flex justify-between items-center pt-9'}>
                    <div>
                        <h2 className={'flex gap-3 text-[36px]'}>You’ve got <p className={'text-[#6200EE]'}>{books.length} books</p></h2>
                        <p>Your books today</p>
                    </div>
                    <div className={'mt-5 sm:mt-0'}>
                        <Button type="primary" onClick={showModal}>
                            + Create a book
                        </Button>
                        <Modal className={'px-2'} title="" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                            <Form form={form} onFinish={onFinish}>
                                <p className={'font-medium text-lg'}>Create a book</p>

                                <p className={'pt-7 pb-1 font-medium text-xs'}>ISBN</p>
                                <Form.Item name="isbn" rules={[{ required: true, message: 'Please input the ISBN!' }]}>
                                    <div className={'border w-full h-[47px] flex items-center px-4 text-gray-400 gap-2 rounded'}>
                                        <i className="fa-solid fa-link"></i>
                                        <Input type="text" placeholder={'_ _ _ _ _ _ _ _'} className={'w-full h-full outline-none'} />
                                    </div>
                                </Form.Item>
                                <Form.Item>
                                    <Button type="primary" htmlType="submit">Create</Button>
                                </Form.Item>
                            </Form>
                        </Modal>
                    </div>
                </div>

                <div className={'my-9 grid lg:grid-cols-3 sm:grid-cols-2 gap-4'}>
                    {books.map((book, index) => (
                        <div key={index} className={'bg-white max-w-[400px] p-7 rounded-[12px] shadow-lg border'}>
                            <p className={'font-medium text-[16px] pb-2'}>{book.title}</p>
                            <p className={'py-[2px] text-[14px]'}>Cover: {book.cover}</p>
                            <p className={'py-[2px] text-[14px]'}>Pages: {book.pages}</p>
                            <p className={'py-[2px] text-[14px]'}>Published: {book.published}</p>
                            <p className={'py-[2px] text-[14px]'}>Isbn: {book.isbn}</p>
                            <div className={'flex items-center py-4 w-full justify-between'}>
                                <p>{book.author} / {book.year}</p>
                                <button className={'py-[2px] px-3 bg-red-500 hover:bg-red-600 duration-300 rounded-[5px] text-white'}>New</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}