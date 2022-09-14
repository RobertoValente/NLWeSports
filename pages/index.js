/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head'
import Image from 'next/image'
import { SiDiscord, SiGithub } from 'react-icons/si'
//import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className='font-inter leading-[160%]'>
      <Head>
        <title>NLW eSports</title>
        <meta lang='pt' />
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@500&family=Inter:wght@400;900&display=swap" rel="stylesheet"/>
      </Head>

      {/*
      <header>
        <div>
          <Image  src='https://github.com/RobertoValente.png' alt='Foto de Perfil do Github do Roberto Valente' width={100} height={100} className='rounded-full'/>
        </div>
      </header>
      */}

      <header className='pt-5'>
        <div className='max-w-xl w-11/12 m-auto'>
          <Image src='https://github.com/RobertoValente.png' alt='Foto de Perfil do Github do Roberto Valente' width={100} height={100} className='rounded-full'/>
        </div>
      </header>

      <main className='max-w-xl w-11/12 m-auto text-white grid gap-6 mt-[32px]'>
        <section className='bg-gradient-to-r from-green-600 to-blue-700 pt-1 rounded-[10px]'>
          <div className='bg-[#2A2634] p-8 pt-6 rounded-lg'>
            <h1 className='font-black text-2xl tracking-tight'>Meus Jogos</h1>
            <p className='font-normal text-base tracking-[-0.18px] text-[#A1A1AA]'>Os Games que eu mais curto jogar</p>
            <ul className='list-none flex gap-4 mt-6 flex-wrap'>
              <li>
                <a target='_blank' rel="noreferrer" href='https://www.twitch.tv/directory/game/Garena%20Free%20Fire'>
                  <Image src='https://static-cdn.jtvnw.net/ttv-boxart/502732_IGDB-188x250.jpg' alt='Imagem de Garena FreeFire da Twitch' width={90} height={132} className='rounded-lg' />
                </a>
              </li>

              <li>
                <a target='_blank' rel="noreferrer" href='https://www.twitch.tv/directory/game/Minecraft'>
                  <Image src='https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-188x250.jpg' alt='Imagem de Minecraft' width={90} height={132} className='rounded-lg'/>
                </a>
              </li>
            </ul>

          </div>
        </section>

        <section className='bg-gradient-to-r from-green-600 to-blue-700 pt-1 rounded-[10px]'>
          <div className='bg-[#2A2634] p-8 pt-6 rounded-lg'>
            <h1 className='font-black text-2xl tracking-tight'>Redes Sociais</h1>
            <p className='font-normal text-base tracking-[-0.18px] text-[#A1A1AA]'>Me encontre em:</p>
            <ul className='list-none flex gap-4 mt-6 flex-wrap'>
              <li>
                <a target='_blank' rel="noreferrer" href='https://github.com/RobertoValente'>
                  <SiGithub color='black' className='w-8 h-8'/>
                </a>
              </li>

              <li>
                <a target='_blank' rel="noreferrer" href='https://discord.com/users/381780035784409088'>
                  <SiDiscord color='#5865F2' className='w-8 h-8'/>
                </a>
              </li>
            </ul>

          </div>
        </section>
      </main>

    </div>
  )
}