export const dynamic = 'force-static';

import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'About us',
  description: 'We are a social media'
}

const About = async () => {
  return (
    <main>
      <h1 className='font-bold text-3xl'>About</h1>
      <p>We are a social media!</p>
    </main>
  )
}

export default About