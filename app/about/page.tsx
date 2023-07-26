export const dynamic = 'force-static';

import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'About us',
  description: 'We are a social media'
}

const About = async () => {
  return (
    <main>
      <h1 className='font-bold text-3xl'>Sobre nós</h1>
      <p>Nós somos uma rede social! Oi 👋</p>
    </main>
  )
}

export default About