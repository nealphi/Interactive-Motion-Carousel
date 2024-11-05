import React, { useEffect, useState } from "react";
import repositories from "../repositories";
import RepoCard from "./RepoCard";
import useMeasure from "react-use-measure";
import { animate, useMotionValue, motion } from "framer-motion";

const InteractiveCarousel = () => {
  const FAST_DURATION = 30;
  const SLOW_DURATION = 75;

  const [duration, setDuration] = useState(FAST_DURATION);
  let [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);
  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    let controls;
    let finalPosition = -(width / 2);

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }

    console.log(width, finalPosition);
    return controls?.stop;
  }, [duration, mustFinish, rerender, width, xTranslation]);

  return (
    <div className="bg-black w-full">
      <main className="bg-black overflow-hidden mx-[10%] flex flex-col justify-evenly" style={{ height: "400px" }}>
        <h2 className="text-lightBlue text-[20px] sm:text-[36px] mb-2 text-center">
          MY CONTRIBUTIONS TO THE DEV COMMUNITY
        </h2>
        <div className="relative" style={{ height: "200px" }}>
        <div className="absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-[#000000] to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-[#000000] to-transparent pointer-events-none z-10" />

          <motion.div
            className="flex gap-4 left-0"
            style={{ width: "fit-content", x: xTranslation }}
            ref={ref}
            onHoverStart={() => {
              setMustFinish(true);
              setDuration(SLOW_DURATION);
            }}
            onHoverEnd={() => {
              setMustFinish(true);
              setDuration(FAST_DURATION);
            }}
          >
            {[...repositories, ...repositories].map((repo, index) => (
              <RepoCard repo={repo} index={index} />
            ))}
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default InteractiveCarousel;
