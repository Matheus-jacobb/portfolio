import TecnomylImage from '@/app/assets/Tecnomyl.jpg'
import EdebeImage from '@/app/assets/edebe.jpg'
import EmbraerImage from '@/app/assets/embraer.png'
import B2BbeeImage from '@/app/assets/b2bbee.png'
import NcursosImage from '@/app/assets/ncursos.png'
import ConectaFacensImage from '@/app/assets/conectaFacens.png'
import JactoImage from '@/app/assets/jacto.png'

export const projects = [
  {
    title: 'Jacto connect - Módulo de cursos',
    description: `Módulo de cursos para plataforma JACTO.\n
  • Modelagem banco de dados
  • Desenvolvimento dos endpoints API
  • Comunicações com API's externas
  • Microservices
  • Event Bridge para envio de notificações`,
    imgSrc: JactoImage,
    frameworks: ['Back-end (NestJS)'],
    style: '',
  },
  {
    title: 'Edebê',
    description: `Plataforma de ensino.\n
  • Modelagem banco de dados
  • Desenvolvimento dos endpoints API
  • Comunicações com API's externas
  • Upload de sites estáticos
  • Download de relátorios em segundo plano
  • Otimização Front-end
  • Otimização Back-end
      `,
    imgSrc: EdebeImage,
    frameworks: ['Back-end (NestJS)', 'Front-end (Angular)'],
    style: '',
  },
  {
    title: 'EVE - Flight Data Monitoring',
    description: `Projeto de monitoramento de dados de voo das aeronaves elétricas.\n
  • Modelagem banco de dados
  • Desenvolvimento dos endpoints API
  • Processamento de dados de relatórios
  • Relatórios que poderiam chegar a 1TB
  • SQS (Amazon Simple Queue Service)
  • Logs de processamento
  • Endpoints de relatórios para os dados processados
    `,
    imgSrc: EmbraerImage,
    frameworks: ['Back-end (NestJS)'],
    style: '',
  },
  {
    title: 'Terrex',
    description: `Aplicativo para proprietários gerenciarem parcelas e ciclos de plantio de suas propriedades.\n
  • Desenvolvimento do layout
  • Comunicação com API
  • Integração biblioteca "Leaflet"
  • Otimização para dispositivos móveis antigos
    `,
    imgSrc: TecnomylImage,
    frameworks: ['Front-end (Ionic)'],
    style: '!object-scale-down',
  },
  {
    title: 'N Cursos',
    description: `Plataforma de cursos.\n
  • Desenvolvimento do layout
  • Desenvolvimento API
  • Integração com gateway de pagamento Pagar.me
  • Teste de stress com PewPew
    `,
    imgSrc: NcursosImage,
    frameworks: ['Front-end (Angular)', 'Back-end (NestJS)'],
    style: '',
  },
  {
    title: 'B2BBEE',
    description: `Aplicativo Web que permite ao usuário criar uma conta e anunciar sua empresa, produto ou serviço para outras empresas.\n
  • Desenvolvimento do layout
  • Desenvolvimento API
  • Integração com gateway de pagamento Pagar.me para pagamentos recorrentes
    `,
    imgSrc: B2BbeeImage,
    frameworks: ['Front-end (Angular)', 'Back-end (NestJS)'],
    style: '',
  },
  {
    title: 'Conecta FACENS',
    description: `Plataforma do Centro Universitário Facens que proporciona a integração do mercado com a academia.\n
  • Atuação como TechLead
  • Desenvolvimento do layout
  • Integração com wordpress
    `,
    imgSrc: ConectaFacensImage,
    frameworks: ['Front-end (Angular)', 'Back-end (NestJS)'],
    style: '',
  },
]
