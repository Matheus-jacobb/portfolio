import { ContactCard } from '@/app/(pages)/main/contact/contact-card/contact-card'
import { socialMedia } from '@/app/infos/social-media'
import { faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFilePdf } from '@fortawesome/free-regular-svg-icons'

export function Contact({ className }: { className?: string }) {
  return (
    <section id="contact" className={'pt-32 pb-64 px-6 text-text ' + className}>
      <h2 className="text-center text-3xl font-semibold mb-12">
        Vamos nos conectar ?
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
        <ContactCard
          title="WhatsApp"
          icon={faWhatsapp}
          description="Mensagem direto"
          link={socialMedia.Linkedin.url}
        />
        <ContactCard
          title="E-mail"
          icon={faEnvelope}
          description="Contato direto"
          link={socialMedia.Email.url}
        />
        <ContactCard
          title="Linkedin"
          icon={faLinkedin}
          description="Perfil profissional"
          link={socialMedia.Linkedin.url}
        />
        <ContactCard
          title="Currículo"
          icon={faFilePdf}
          description="Visualizar currículo"
          link={socialMedia.CV.url}
        />
      </div>
    </section>
  )
}
