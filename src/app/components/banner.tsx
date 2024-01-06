import React from 'react'
import Image from 'next/image'

export default function Banner() {
  return (
    <div className='flex flex-wrap'>
      <div className='w-full lg:w-1/3'>
        <AvatarCard />
      </div>
      <div className='w-full lg:w-2/3'>
        <SelfIntro />
      </div>
    </div>
  )
}

function AvatarCard() {
  return (
    <section className='flex h-full w-full flex-col items-center justify-center gap-4'>
      <div className='relative h-64 w-64 overflow-hidden rounded-full ring-2 ring-gray-300 dark:ring-gray-500'>
        <Image src='/avatar.png' alt='photo' style={{ objectFit: 'cover' }} fill={true} />
      </div>
      <div className='flex flex-col gap-4'>
        <h1 className='text-3xl'>
          Jingfu Dong<span className='text-2xl'> (James)</span>
        </h1>
        <h1 className='text-2xl'>Full-Stack Engineer</h1>
      </div>
    </section>
  )
}

function SelfIntro() {
  return (
    <section className='flex flex-col gap-4'>
      <h2 className='text-5xl font-bold'>About me</h2>
      <div>
        <p>
          I&apos;m an experienced full-stack engineer with a focus on <b>banking software</b> development and expertise
          in seamless <b>payment API integration</b>.
        </p>
        <p>
          As a leader within my development team, I excel not only in technical proficiency but also in mentoring and
          motivating others towards success.
        </p>
        <p>
          I thrive on autonomously tackling challenges while fostering collaborative learning within teams. Passionate
          about continual growth, I seek impactful projects to contribute my expertise.
        </p>
      </div>
      <h3 className='text-2xl font-bold'>Key Technologies:</h3>
      <ul>
        <li>
          <p>
            <b>Node.js</b>: Specialise in building business logic utilising <b>NestJS</b> with <b>TypeScript</b>
          </p>
        </li>
        <li>
          <p>
            <b>React</b>: Proficient in standard client-side React and <b>Next.js</b>, often with <b>MUI</b>
          </p>
        </li>
        <li>
          <p>
            <b>MySQL</b>: Specialized in relational database design utilizing <b>TypeORM</b>
          </p>
        </li>
        <li>
          <p>
            <b>Redis</b>: Proficient in using Redis for caching, message brokerage, and queuing.
          </p>
        </li>
        <li>
          <p>
            <b>AWS</b>: Proficient in classic EC2 with load balancer for main services and Lambda functions for worker
            services
          </p>
        </li>
      </ul>
    </section>
  )
}
