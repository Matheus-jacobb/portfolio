export const projects = [
  {
    title: 'Jacto connect - Módulo de cursos',
    description: `Módulo de cursos para plataforma JACTO.
     - Modelagem
     - Desenvolvimento dos endpoints
     - Comunicações com API's externas`,
    imgSrc: 'project1.jpg',
    frameworks: ['Back-end (NestJS)'],
  },
  {
    title: 'Edebê',
    description: `Plataforma de ensino para editora Edebê.'
      - Modelagem
      - Desenvolvimento dos endpoints
      - Comunicações com API's externas
      - Upload de sites estáticos
      - Download de relátorios em segundo plano
      - Otimização Front-end
      - Otimização Back-end
      `,
    imgSrc: 'project2.jpg',
    frameworks: ['Back-end (NestJS)', 'Front-end (Angular)'],
  },
  {
    title: 'EVE - Flight data monitoring',
    description: `Projeto de monitoramento de dados de voo das aeronaves elétricas da empresa Embraer.
    - Modelagem
    - Desenvolvimento dos endpoints
    - Processamento de dados de relatórios
        - Relatórios que poderiam chegar a 1TB
        - SQS (Amazon Simple Queue Service)
        - Logs de processamento
    - Endpoints de relatórios para os dados processados
    `,
    imgSrc: 'project3.jpg',
    frameworks: ['Back-end (NestJS)'],
  },
]
