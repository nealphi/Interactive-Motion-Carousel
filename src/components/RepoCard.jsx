import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const RepoCard = ({ index, repo }) => {
  const [showOverlay, setShowOverlay] = useState(false);
  return (
    <motion.div
      className="flex flex-col relative overflow-hidden max-h-[200px] min-w-[250px] border-2 border-zinc-900 justify-center items-center rounded p-5 "
      key={index}
      onHoverStart={() => setShowOverlay(true)}
      onHoverEnd={() => setShowOverlay(false)}
    >
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            className="absolute flex flex-col justify-center items-center z-10 inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black opacity-70 z-10" />
            <div className="z-20 p-2 rounded border">
              <a href={repo.url} className="text-white">
                <button className="px-3 flex text-sm font-bold items-center text-gray-400 justify-center hover:text-lightBlue">
                  SOURCE CODE
                </button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="text-lightBlue mb-2">{repo.title}</div>
      <p className="text-sm mb-5 text-gray-600 text-justify">
        {repo.description}
      </p>
      <p className="text-xs text-gray-400 w-full text-left">{repo.stack}</p>
    </motion.div>
  );
};

export default RepoCard;
