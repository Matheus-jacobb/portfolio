'use client'

import { ProjectCard } from '@/app/(pages)/main/projects/project-card/project-card'
import { projects } from '@/app/infos/principal-projects'
import { Navigation, Autoplay, Pagination } from 'swiper/modules'
import './styles.scss'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export function Projects({ className }: { className?: string }) {
  return (
    <section id="projects" className={'py-32 text-text ' + className}>
      <h2 className="text-center text-3xl font-semibold mb-12">
        Projetos Principais
      </h2>
      <div className="max-w-7xl mx-auto relative">
        <Swiper
          loop
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
          // autoplay={{
          //   delay: 5000,
          //   pauseOnMouseEnter: true,
          // }}
          pagination={{
            el: '.swiper-pagination',
            bulletClass:
              'swiper-pagination-bullet !bg-highlight opacity-50 !w-4 !h-4 !mx-3',
            bulletActiveClass: '!opacity-100',
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
              navigation: {
                enabled: false,
              },
            },
            850: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1220: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
          }}
          speed={600}
          modules={[Navigation, Autoplay, Pagination]}
          className={'mySwiper !mx-6 sm:!mx-14'}
          slidesPerView={3}
          spaceBetween={30}
        >
          {[...projects].map((project, idx) => (
            <SwiperSlide
              key={idx}
              className={'!h-auto cursor-pointer select-none'}
            >
              <ProjectCard key={idx} project={project} idx={idx} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          className="swiper-button-prev !text-highlight !hidden sm:!block"
          style={{ left: '0' }}
        ></div>
        <div
          className="swiper-button-next !text-highlight !hidden sm:!block"
          style={{ right: '0' }}
        ></div>
        <div className="swiper-pagination" style={{ bottom: '-3rem' }}></div>
      </div>
    </section>
  )
}
