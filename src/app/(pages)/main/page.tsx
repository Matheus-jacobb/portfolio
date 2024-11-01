'use client'

import { About } from '@/app/(pages)/main/about/about'
import { Contact } from '@/app/(pages)/main/contact/contact'
import { Experience } from '@/app/(pages)/main/experience/experience'
import { Footer } from '@/app/(pages)/main/footer/footer'
import { PersonalInfo } from '@/app/(pages)/main/personal-info/personal-info'
import { Projects } from '@/app/(pages)/main/projects/projects'
import { Skills } from '@/app/(pages)/main/skills/skills'

export default function Main() {
  return (
    <>
      <PersonalInfo className={'bg-primary'} />
      <About className={'bg-primary'} />
      <Experience className={'bg-primary'} />
      <Skills className={'bg-primary'} />
      <Projects className={'bg-primary'} />
      <Contact className={'bg-primary'} />
      <Footer />
    </>
  )
}
