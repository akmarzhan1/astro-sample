import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion, useAnimationControls } from "framer-motion";

const HomePage = () => {
  const [startAnimation, setStartAnimation] = useState(false);
  const controls = useAnimationControls();

  const runAnimation = () => {
    controls.start({
      scale: 0.85,
      transition: { duration: 0.5 },
    });
    controls.start({ opacity: 0, transition: { duration: 0.5 } });
    controls.start({
      scale: 10,
      transition: {
        duration: 3,
        ease: [0, 0.71, 0.2, 1.01],
        scale: {
          type: "spring",
          damping: 5,
          stiffness: 100,
          restDelta: 0.001,
        },
      },
    });
  };

  // TODO: add some visuals for entering
  // TODO: split up the code and make it cleaner
  // TODO: add some initial landing page design for i'm akma bla bla bla
  // TODO: add the scrolling capability
  // TODO: add some blogs
  return (
    <div className="bg-gray-800 max-h-screen max-w-screen overflow-hidden">
      <motion.div
        className="bg-white max-w-screen mx-auto flex justify-center items-center h-screen"
        animate={controls}
        transition={{ duration: 0.2 }}
      >
        <div className="w-[500px]">
          <div
            className="coding inverse-toggle px-5 pt-4 shadow-lg text-gray-100 text-sm font-mono subpixel-antialiased 
              bg-gray-800 pb-6 pt-5 rounded-lg leading-normal overflow-hidden"
          >
            <div className="top mb-2 flex">
              <div className="h-4 w-4 bg-red-500 rounded-full"></div>
              <div className="ml-2.5 h-4 w-4 bg-orange-300 rounded-full"></div>
              <div className="ml-2.5 h-4 w-4 bg-green-500 rounded-full"></div>
            </div>
            <div className="mt-5 flex">
              <span className="text-green-400 text-lg">akma:~$ </span>
              <p className="flex-1 typing items-center pl-2 text-lg">
                {startAnimation && <>open portfolio</>}
                {!startAnimation && (
                  <TypeAnimation
                    sequence={[
                      "welcome!",
                      1000,
                      "open portfolio",
                      1000,
                      () => setStartAnimation(true),
                      500,
                      () => runAnimation(),
                    ]}
                    speed={4}
                  />
                )}
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={startAnimation ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0 }}
            >
              <div className="mt-2 flex">
                <span className="text-green-400 text-lg">akma:~$ </span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HomePage;
