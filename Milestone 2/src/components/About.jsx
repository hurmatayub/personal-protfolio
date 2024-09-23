import React from "react";
import aboutImg from "../assets/mypic.jpg";

const About = () => {
  return (
    <div className="text-white max-w-[1200px] mx-auto my-12" id="about">
      <div className="md:grid md:grid-cols-2 sm:py-16">
        <div className="mt-4 md:mt-0 text-left flex">
          <div className="my-auto mx-6">
            <h2 className="text-4xl font-bold mb-4  text-orange-800">About me</h2>
            <p className="text-base lg:text-lg font-serif">
              Hello! My name is Hurmat Muhammad Ayub, and I am from Karachi, Pakistan. I am
              very passionate about web development, and I am always driven by
              curiosity and the desire to learn. I want to make it my
              profession. Currently, I am learning programming languages such as
              HTML, CSS, JavaScript, TypeScript, TailwindCSS, Next.js, and
              React along with learning, I am also working on new projects. I
              don't have any prior background in programming, as I studied in
              the field of commerce until intermediate. In my free time, I try
              to explore new things to improve myself and share my experiences
              with others.
            </p>
          </div>
        </div>

        <img
          className="mx-auto rounded-3xl py-8 md:py-0"
          src={aboutImg}
          width={300}
          height={300}
        />
      </div>
    </div>

  );
};

export default About;
