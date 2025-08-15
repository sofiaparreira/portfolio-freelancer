import InputContainer from '@/components/InputContainer'
import React from 'react'
import { MdOutlineMailOutline } from "react-icons/md";
import { BsSend } from "react-icons/bs";
import Button from '@/components/Button';
import Navbar from '@/components/Navbar';
import { FaRegCalendar } from "react-icons/fa6";
import { MdAccessTime } from "react-icons/md";
import { FaRegCircleCheck } from "react-icons/fa6";


const page = () => {
    return (
        <main>
            <Navbar />
            <section className='px-48 py-24'>

                <h1 className='text-2xl font-bold mb-2 text-center'>Vamos Conversar</h1>
                <p className=" text-center">Soluções completas de desenvolvimento web para impulsionar seu negócio digital</p>
            </section>

            <section className='px-48 grid grid-cols-3 gap-8'>
                <div className='p-6 col-span-2 shadow-xl shadow-gray-200 border border-gray-100 rounded-lg'>
                    <h2 className='font-medium text-lg'>Solicitar orçamento</h2>
                    <p className='text-sm'>Preencha o formulário e receba uma proposta personalizada</p>

                    <div className='space-y-2 my-8'>

                        <InputContainer label={'Nome'} />
                        <div class="grid grid-cols-2 gap-3">
                            <InputContainer label={'E-mail'} />
                            <InputContainer label={'Telefone'} />

                        </div>
                    </div>
                    <Button text={'Enviar'} sufix={<BsSend />} />
                </div>

                <div className='flex flex-col gap-8'>
                    <div className='p-6 shadow-xl shadow-gray-200 border border-gray-100 rounded-lg'>
                        <h2 className='font-medium text-lg'>Informações de contato</h2>

                        <div className='flex flex-col gap-4 mt-8'>

                            <div className='flex items-center gap-3'>
                                <div className='bg-gradient-to-r from-primary to-purple-600 text-white p-3 text-xl rounded-xl w-fit group-hover:scale-110 duration-300 transition'><MdOutlineMailOutline /></div>
                                <div className='flex flex-col text-sm'>
                                    <span className='font-medium'>E-mail</span>
                                    <span className='text-gray-700'>sofiapparreira@gmail.com</span>
                                </div>
                            </div>

                            <div className='flex items-center gap-3'>
                                <div className='bg-gradient-to-r from-primary to-purple-600 text-white p-3 text-xl rounded-xl w-fit group-hover:scale-110 duration-300 transition'><MdOutlineMailOutline /></div>
                                <div className='flex flex-col text-sm'>
                                    <span className='font-medium'>Telefone</span>
                                    <span className='text-gray-700'>(31) 9 9905-0065</span>
                                </div>
                            </div>

                            <div className='flex items-center gap-3'>
                                <div className='bg-gradient-to-r from-primary to-purple-600 text-white p-3 text-xl rounded-xl w-fit group-hover:scale-110 duration-300 transition'><MdOutlineMailOutline /></div>
                                <div className='flex flex-col text-sm'>
                                    <span className='font-medium'>WhatsApp</span>
                                    <span className='text-gray-700'>sofiapparreira@gmail.com</span>
                                </div>
                            </div>


                        </div>

                    </div>


                    <div className='p-6 shadow-xl shadow-gray-200 border border-gray-100 rounded-lg'>
                        <h2 className='font-medium text-lg'>Proceso de trabalho</h2>

                        <div className='flex flex-col gap-4 mt-8'>

                            <div className='flex items-center gap-3'>
                                <FaRegCalendar className='text-xl text-primary' />

                                <div className='flex flex-col text-sm'>
                                    <span className='font-medium'>1. Briefing</span>
                                    <span className='text-gray-700'>Conversa inicial para entender suas necessidades</span>
                                </div>
                            </div>

                            <div className='flex gap-3 items-center'>
                                <MdAccessTime className='text-2xl text-primary' />
                                <div className='flex flex-col text-sm'>
                                    <span className='font-medium'>2. Proposta</span>
                                    <span className='text-gray-700'>Elaboração de proposta detalhada e cronograma</span>
                                </div>
                            </div>

                            <div className='flex items-center gap-3'>
                                <FaRegCircleCheck className='text-xl text-primary' />

                                <div className='flex flex-col text-sm'>
                                    <span className='font-medium'>3. Desenvolvimento</span>
                                    <span className='text-gray-700'>Execução do projeto com atualizações regulares</span>
                                </div>
                            </div>


                        </div>

                    </div>




                </div>

            </section>


        </main>
    )
}

export default page
