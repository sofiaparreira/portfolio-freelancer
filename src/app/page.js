import Button from "@/components/Button";
import CardService from "@/components/card/CardService";
import CardTecnologia from "@/components/card/CardTecnologia";
import Footer from "@/components/Footer";
import ItemNumber from "@/components/ItemNumber";
import Navbar from "@/components/Navbar";
import OtherService from "@/components/OtherService";
import Image from "next/image";
import { FaGlobe } from "react-icons/fa";
import { TbPointFilled } from "react-icons/tb";

import { FaArrowRightLong } from "react-icons/fa6";
import { HiOutlineWrench } from "react-icons/hi2";
import { IoSettingsOutline } from "react-icons/io5";
import { LuMessageCircleMore } from "react-icons/lu";
import CardFeedback from "@/components/card/CardFeedback";






export default function Home() {
  return (
    <main>
      <Navbar />
      <section className="px-48 py-24 bg-background flex flex-col items-center text-gray-800 ">
        <div className="flex gap-1 items-center justify-center font-medium text-sm py-1 px-3 bg-white rounded-full border border-gray-200 w-fit text-gray-600 mb-8">
          <TbPointFilled className="text-green-500" />
          <span className="font-medium ">Disponível para novos projetos</span>
        </div>

        <h1 className="text-5xl py-4 font-bold bg-gradient-to-r from-primary via-indigo-500 to-purple-800 bg-clip-text text-transparent flex flex-col items-center justify-center">
          <span className="text-gray-800">Olá, eu sou</span>
          Sofia Parreira Passos
        </h1>
        <h2 className="text-xl font-medium text-gray-700">Desenvolvedora web front-end e back-end</h2>
        <p className="text-gray-600 py-8">Transformo suas ideias em experi~enciadsçfasdflkasdjfalkjsdflkjasdlkfjalksjdflkasjdfas</p>

        <div class="w-fit"><Button text={'Ver Projetos'} sufix={<FaArrowRightLong />} /></div>

        <div className="py-8 grid grid-cols-3 gap-16">
          <ItemNumber label={'Projetos Concluídos'} value={'10 +'} />
          <ItemNumber label={'Anos de Experiência'} value={'3 +'} />
          <ItemNumber label={'Avaliação Média'} value={'5 ★'} />

        </div>
      </section>

      <section className="px-48 py-16 mt-8 bg-white">
        <h1 className="text-3xl font-bold text-center mb-2">Serviços que Ofereço</h1>
        <p className=" text-center">Soluções completas de desenvolvimento web para impulsionar seu negócio digital</p>

        <div class="grid grid-cols-3 gap-8 mt-16">
          <CardService
            title={'Websites Institucionais'}
            isWordpress={true}
            isCode={true}
            icon={<FaGlobe />}
            text={'Suspendisse nec nisi ultrices, lacinia metus eget, congue libero. Phasellus ac tortor scelerisque, molestie risus vel, condimentum justo. Praesent quis tempus enim. '} />

          <CardService
            title={'Websites Institucionais'}
            isWordpress={true}
            isCode={true}
            icon={<FaGlobe />}
            text={'Suspendisse nec nisi ultrices, lacinia metus eget, congue libero. Phasellus ac tortor scelerisque, molestie risus vel, condimentum justo. Praesent quis tempus enim. '} />

          <CardService
            title={'Websites Institucionais'}
            isWordpress={true}
            isCode={true}
            icon={<FaGlobe />}
            text={'Suspendisse nec nisi ultrices, lacinia metus eget, congue libero. Phasellus ac tortor scelerisque, molestie risus vel, condimentum justo. Praesent quis tempus enim. '} />

          <CardService
            title={'Websites Institucionais'}
            isWordpress={true}
            isCode={true}
            icon={<FaGlobe />}
            text={'Suspendisse nec nisi ultrices, lacinia metus eget, congue libero. Phasellus ac tortor scelerisque, molestie risus vel, condimentum justo. Praesent quis tempus enim. '} />

          <CardService
            title={'Websites Institucionais'}
            isWordpress={true}
            isCode={true}
            icon={<FaGlobe />}
            text={'Suspendisse nec nisi ultrices, lacinia metus eget, congue libero. Phasellus ac tortor scelerisque, molestie risus vel, condimentum justo. Praesent quis tempus enim. '} />

          <CardService
            title={'Websites Institucionais'}
            isWordpress={true}
            isCode={true}
            icon={<FaGlobe />}
            text={'Suspendisse nec nisi ultrices, lacinia metus eget, congue libero. Phasellus ac tortor scelerisque, molestie risus vel, condimentum justo. Praesent quis tempus enim. '} />
        </div>

        <div className="relative w-full  overflow-hidden rounded-lg bg-gradient-to-r from-[#EEF2FF] from-20% to-[#F9F5FF] my-16 border-2 border-gray-100 shadow-lg shadow-gray-200">
          {/* Bolinha no canto direito topo */}
          <div className="absolute -top-8 -right-8 w-32 h-32 bg-background rounded-full opacity-50"></div>

          {/* Bolinha no canto esquerdo baixo */}
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#E5E8FF] rounded-full opacity-50"></div>

          {/* Conteúdo */}
          <div className="relative p-8">
            <div class="flex gap-3 items-center justify-center">
              <div className='bg-gradient-to-r from-primary to-purple-600 text-white p-2.5 text-xl rounded-lg w-fit group-hover:scale-110 duration-300 transition'><HiOutlineWrench />
              </div>

              <h2 className="text-2xl font-bold">Outros Serviços Disponíveis</h2>

            </div>
            <p className="text-center w-1/2 mx-auto my-8">Além dos serviços principais, também ofereço suporte especializado para diversas necessidades do seu negócio digital.</p>

            <div class="grid grid-cols-3 gap-16">
              <OtherService
                title={'Manutenção de Sites'}
                description={'Atualizações, correções e melhorias contínuas para manter seu site sempre funcionando perfeitamente.'}
                icon={<IoSettingsOutline />}
              />

              <OtherService
                title={'Ajustes e Melhorias'}
                description={'Pequenos ajustes, correções de bugs e implementação de novas funcionalidades em sites existentes'}
                icon={<IoSettingsOutline />}
              />

              <OtherService
                title={'Shopify'}
                description={'Criação, customização e otimização de lojas Shopify'}
                icon={<IoSettingsOutline />}
              />


            </div>
            <div className="bg-white/80  rounded-xl text-sm py-3.5 mt-10 flex justify-center items-center gap-2">
              💡<span className="font-medium">Precisa de algo específico? </span> <span>Entre em contato para conversarmos sobre sua necessidade</span>
            </div>
          </div>
        </div>
      </section>

      <section className="px-48 py-16 bg-gray-50">
        <h1 className="text-3xl font-bold mb-2 text-center">Tecnologias que domino</h1>
        <p className="text-center">Aqui está uma lista de técnologias que eu costumo trabalhar</p>

        <div className="grid grid-cols-5 gap-8 mt-16 px-32">
          <CardTecnologia name={'Next'} icon={'/logos/next.svg'} />
          <CardTecnologia name={'React'} icon={'/logos/react.svg'} />
          <CardTecnologia name={'Vite'}  icon={'/logos/vite.svg'} />
          <CardTecnologia name={'Angular'} icon={'/logos/angular.svg'} />
          <CardTecnologia name={'TypeScript'} icon={'/logos/ts.svg'} />
          <CardTecnologia name={'JavaScript'} icon={'/logos/js.svg'} />
          <CardTecnologia name={'Node.js'} icon={'/logos/node.svg'} />
          <CardTecnologia name={'HTML5'} icon={'/logos/html.svg'} />
          <CardTecnologia name={'CSS3'} icon={'/logos/css.svg'}/>
          <CardTecnologia name={'Tailwind'} icon={'/logos/tailwind.svg'} />
          <CardTecnologia name={'PostgreSQL'} icon={'/logos/postgree.svg'} />
          <CardTecnologia name={'Oracle'} icon={'/logos/oracle.svg'} />
        </div>
      </section>

      <section className="px-48 py-16">
        <h1 className="text-3xl font-bold mb-2 text-center">Feedbacks</h1>
        <p className="text-center">Feedb</p>

        <div className="grid grid-cols-3 mt-16 gap-8">
          <CardFeedback
            description={'Sofia foi comprometida com o projeto e esforçada em entender os requisitos. Fez um bom trabalho e correu atrás do que era necessário para concluir as tarefas.'}
            stars={5}
            name={'Augusto'}
            project={'Plataforma de cadastro de currículos'}

          />
          <CardFeedback
            description={'asdfa adsfasd asdfas dfasdf asd asdf  asdfasdfasdf ds  asdfasdfas asdfasdf asdfasd asdf asdfasdfasdf  asdf asdf asdfasdf' }
            stars={5}
            name={'Thiago Bristolini'}
            project={'Identidade visual e logo: Na casa restaurante'}

          />
          <CardFeedback
            description={'Eu adorei o trabalho, transmite exatamente a proposta do restaurante. Sofia foi comprometida e explicou todos os conceitos e técnicas por trás do design.'}
            stars={5}
            name={'Luiz Mauro'}
            project={'Identidade visual e logo: Na casa restaurante'}

          />
        </div>

      </section>

      <section className="relative w-full py-16 px-48 flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-purple-200 via-purple-100 to-pink-100">
        {/* Bolinhas abstratas */}
        <div className="absolute top-[-100px] left-[-100px] w-72 h-72 bg-purple-400 rounded-full opacity-30 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-[-80px] right-[-80px] w-96 h-96 bg-pink-300 rounded-full opacity-30 blur-3xl animate-pulse"></div>

        {/* Conteúdo */}
        <div className="relative z-10 text-center px-6">
          <h1 className="text-3xl font-bold text-gray-900">
            Pronto para transformar <span className="text-primary">sua ideia em realidade?</span>
          </h1>
          <p className="mt-4 text-gray-700">
            Vamos conversar sobre seu projeto e descobrir como posso ajudar seu negócio a crescer no mundo digital.
          </p>

          <div class="grid grid-cols-2 gap-3 mt-12 w-2/3 mx-auto">
            <Button text={'Começar meu projeto'} sufix={<FaArrowRightLong />} />
            <Button
              text={'WhatsApp'}
              prefix={<LuMessageCircleMore />}
              className={'bg-gray-800 text-white border border-gray-200 hover:bg-gray-900 duration-300'}
            />
          </div>






        </div>
      </section>

      <Footer />


    </main>
  );
}
