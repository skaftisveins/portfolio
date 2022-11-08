import React from "react";

type Props = {};

function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];
  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-[#008ad8] text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#008ad8]/40">
        {projects.map((project, i) => (
          // eslint-disable-next-line react/jsx-key
          <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen ">
            <img
              src="https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_96102ac6497377cd53da621075fe828e/sanity.png"
              alt=""
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                BLeh {i + 1} of {projects.length}: Lets goooo!
              </h4>
              <p className="text-lg text-center md:text-left">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
                expedita deserunt, neque repudiandae, at est nisi obcaecati non
                minus tenetur, mollitia adipisci rem reprehenderit quia unde
                dolore? Adipisci, quo repudiandae.
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#008ad8]/10 left-0 h-[500px] -skew-y-12" />
    </div>
  );
}

export default Projects;
