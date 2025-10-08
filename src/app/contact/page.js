"use client";

import React, { useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import InputContainer from "@/components/InputContainer";
import Button from "@/components/Button";
import { MdLocalPhone, MdOutlineMailOutline } from "react-icons/md";
import { BsSend } from "react-icons/bs";
import { FaRegCalendar, FaWhatsapp } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";
import { FaRegCircleCheck } from "react-icons/fa6";
import emailjs from "@emailjs/browser";

const page = () => {
  const formRef = useRef(null);
  const phoneRef = useRef(null);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(null);

const [phone, setPhone] = useState("");

const handlePhoneChange = (e) => {
  let value = e.target.value.replace(/\D/g, "");
  if (value.length > 11) value = value.slice(0, 11);

  if (value.length > 6) {
    value = value.replace(/^(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
  } else if (value.length > 2) {
    value = value.replace(/^(\d{2})(\d{0,5})/, "($1) $2");
  } else if (value.length > 0) {
    value = value.replace(/^(\d*)/, "($1");
  }

  setPhone(value);
};

  const sendEmail = async (e) => {
    e.preventDefault();
    setSending(true);
    setSent(null);

    try {
      const result = await emailjs.sendForm(
        "service_gvhuucf", 
        "template_1v5ykya", 
        formRef.current,
        "8akf2oO2JHXRCaexH" 
      );
      console.log(result.text);
      setSent(true);
      formRef.current.reset();
    } catch (error) {
      console.error("Erro ao enviar e-mail:", error);
      setSent(false);
    } finally {
      setSending(false);
    }
  };

  return (
    <main>
      <Navbar />

      <section className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48 py-12 md:py-24">
        <h1 className="text-xl sm:text-2xl font-bold mb-2 text-center">Vamos Conversar</h1>
        <p className="text-sm sm:text-base text-center px-4">
          Envie sua mensagem e vamos conversar sobre sua ideia.
        </p>
      </section>

      <section className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 pb-12">
        {/* FORMULÁRIO */}
        <div className="p-4 sm:p-6 lg:col-span-2 shadow-xl shadow-gray-200 border border-gray-100 rounded-lg h-fit">
          <h2 className="font-medium text-lg">Solicitar orçamento</h2>
          <p className="text-sm">Preencha o formulário e receba uma proposta personalizada</p>

          <form ref={formRef} onSubmit={sendEmail} className="space-y-2 my-6 sm:my-8">
            <InputContainer label="Nome" name="user_name" required />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <InputContainer label="E-mail" name="user_email" type="email" required />
              <InputContainer
                label="Telefone"
                name="user_phone"
                type="tel"
                value={phone}
                ref={phoneRef}
                onChange={handlePhoneChange}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium">Proposta</label>
              <textarea
                name="message"
                className="border border-gray-200 rounded-lg w-full h-32 sm:h-48 outline-none p-4 resize-none"
                required
              />
            </div>

            <Button
              text={sending ? "Enviando..." : sent ? "Enviado!" : "Enviar"}
              sufix={!sending && !sent ? <BsSend /> : undefined}
              className={`bg-gray-800 text-white border border-gray-200 duration-300 ${
                sending ? "opacity-60 cursor-not-allowed" : "hover:bg-gray-900"
              }`}
              type="submit"
            />

            {sent === true && <p className="text-green-600 text-sm mt-2">Mensagem enviada com sucesso! 🎉</p>}
            {sent === false && <p className="text-red-600 text-sm mt-2">Erro ao enviar. Tente novamente.</p>}
          </form>
        </div>

        {/* LADO DIREITO */}
        <div className="flex flex-col gap-6 lg:gap-8">
          {/* Informações de contato */}
          <div className="p-4 sm:p-6 shadow-xl shadow-gray-200 border border-gray-100 rounded-lg">
            <h2 className="font-medium text-lg">Informações de contato</h2>
            <div className="flex flex-col gap-4 mt-6 sm:mt-8">
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-r from-primary to-purple-600 text-white p-2 sm:p-3 text-lg sm:text-xl rounded-xl">
                  <MdOutlineMailOutline />
                </div>
                <div className="flex flex-col text-sm">
                  <span className="font-medium">E-mail</span>
                  <span className="text-gray-700 break-all">sofiapparreira@gmail.com</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-r from-primary to-purple-600 text-white p-2 sm:p-3 text-lg sm:text-xl rounded-xl">
                  <MdLocalPhone />
                </div>
                <div className="flex flex-col text-sm">
                  <span className="font-medium">Telefone</span>
                  <span className="text-gray-700">(31) 9 9905-0065</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-r from-primary to-purple-600 text-white p-2 sm:p-3 text-lg sm:text-xl rounded-xl">
                  <FaWhatsapp />
                </div>
                <div className="flex flex-col text-sm">
                  <span className="font-medium">WhatsApp</span>
                  <a href="https://wa.me/5531999050065" target="_blank" className="text-gray-700 hover:underline">
                    (31) 9 9905-0065
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Processo de trabalho */}
          <div className="p-4 sm:p-6 shadow-xl shadow-gray-200 border border-gray-100 rounded-lg">
            <h2 className="font-medium text-lg">Processo de trabalho</h2>
            <div className="flex flex-col gap-4 mt-6 sm:mt-8">
              <div className="flex items-start sm:items-center gap-3">
                <FaRegCalendar className="text-lg sm:text-xl text-primary flex-shrink-0 mt-1 sm:mt-0" />
                <div className="flex flex-col text-sm">
                  <span className="font-medium">1. Briefing</span>
                  <span className="text-gray-700">Conversa inicial para entender suas necessidades</span>
                </div>
              </div>

              <div className="flex gap-3 items-start sm:items-center">
                <MdAccessTime className="text-xl sm:text-2xl text-primary flex-shrink-0 mt-1 sm:mt-0" />
                <div className="flex flex-col text-sm">
                  <span className="font-medium">2. Proposta</span>
                  <span className="text-gray-700">Elaboração de proposta detalhada e cronograma</span>
                </div>
              </div>

              <div className="flex items-start sm:items-center gap-3">
                <FaRegCircleCheck className="text-lg sm:text-xl text-primary flex-shrink-0 mt-1 sm:mt-0" />
                <div className="flex flex-col text-sm">
                  <span className="font-medium">3. Desenvolvimento</span>
                  <span className="text-gray-700">Execução do projeto com atualizações regulares</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
