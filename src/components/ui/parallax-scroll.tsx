import React, { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { cn } from "../../../utils/cn";
import { CardBody, CardContainer, CardItem } from "./3d-card";

export const ParallaxScroll = ({
  images,
  className,
}: {
  images: any[];
  className?: string;
}) => {
  const gridRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: gridRef, // remove this if your container is not fixed height
    offset: ["start start", "end start"], // remove this if your container is not fixed height
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const third = Math.ceil(images.length / 2);
  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);

  return (
    <div
      className={cn(" items-start overflow-y-auto w-full", className)}
      ref={gridRef}
    >
      <div
        className="grid items-center mx-auto gap-10 grid-cols-1 xl:grid-cols-2"
        ref={gridRef}
      >
        <div className="grid gap-5 overflow-x-hidden">
          {firstPart.map((el, idx) => (
            <motion.div
              style={{ y: translateFirst }} // Apply the translateY motion value here
              key={"grid-1" + idx}
            >
             <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                  >
                    Make things float in air
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                    {el.description}
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <img
                      src={el.iconUrl}
                      height="1000"
                      width="1000"
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                    />
                  </CardItem>
                  <div className="flex justify-between items-center mt-20">
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    >
                      <a href={el.livelink} target="_blank" rel="noopener noreferrer">
                        Visit Site →
                      </a>                      
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                      {
                        el.link !== '' ? <a href={el.link} target="_blank" rel="noopener noreferrer">
                        Github
                      </a> : <a href={el.livelink} target="_blank" rel="noopener noreferrer">
                        Visit Site →
                      </a>   
                      }                    
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            </motion.div>
          ))}
        </div>
        <div className="grid gap-5">
          {secondPart.map((el, idx) => (
            <motion.div style={{ y: translateSecond }} key={"grid-2" + idx}>
              <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                  >
                    Make things float in air
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                    {el.description}
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <img
                      src={el.iconUrl}
                      height="1000"
                      width="1000"
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                    />
                  </CardItem>
                  <div className="flex justify-between items-center mt-20">
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    >
                      <a href={el.livelink} target="_blank" rel="noopener noreferrer">
                        Visit Site →
                      </a>  
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                      {
                        el.link !== '' ? <a href={el.link} target="_blank" rel="noopener noreferrer">
                        Github
                      </a> : <a href={el.livelink} target="_blank" rel="noopener noreferrer">
                        Visit Site →
                      </a>   
                      }   
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            </motion.div>
          ))}
        </div>
        
      </div>
    </div>
  );
};
