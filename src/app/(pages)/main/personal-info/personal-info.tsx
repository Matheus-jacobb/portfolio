import Image from 'next/image'
import HomeBackground from '../../../assets/HomeBackground.png'
import Me from '../../../assets/Me.png'
import MeMask from '../../../assets/MeMask.png'
import styles from './styles.module.scss'

export function PersonalInfo() {
  return (
    <section className='bg-primary-400 w-full h-screen max-w-full relative overflow-hidden'>
      <div className={`${styles.personalInfo__photo} relative z-10 left-[54vw] scale-[0.85] top-[4rem] opacity-0 animate-fade-in`}>

        <Image
          src={MeMask}
          alt={'Mascara roxa de fundo'}
          className={`${styles.personalInfo__photo__mask} opacity-0 absolute`}
        />
        <Image
          src={Me}
          className='absolute'
          alt={'Foto pessoal'}
          quality={100}
          width={766}
          height={755}
        />
      </div>

      <Image
        src={HomeBackground}
        alt={'Fundo roxo'}
        className={`${styles.personalInfo__background} absolute left-0 min-w-[120vw] h-[87vh] top-0 bottom-0 my-auto`}
      />

      <div className={`${styles.personalInfo__name} text-white absolute top-0 bottom-20 my-auto text-start h-fit left-28 text-5xl font-bold opacity-0`}>
        <p>Hi, I'm Jacob</p>
        <p>Nice to meet you</p>
      </div>
    </section>
  )
}
