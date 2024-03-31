import React from 'react'
import { projects } from "../constants";
import { ContainerScroll } from '../components/ui/container-scroll-animation';
import { ParallaxScroll } from '../components/ui/parallax-scroll';

function Projectsb() {
  return (
    <main className='mx-auto max-w-[1330px] flex flex-col justify-center w-[90%]'>
      <div className='flex flex-col overflow-hidden'>
        <ContainerScroll
          users={projects}
          titleComponent={
            <>
              <h1 className='head-text relative z-30'>
                My{" "}
                <span className='blue-gradient_text drop-shadow font-semibold'>
                  Projects
                </span>
              </h1>
            </>
          }
        />
      </div>
      <div className="">
        <ParallaxScroll images={projects} />
      </div>
    </main>
  );
}

export default Projectsb