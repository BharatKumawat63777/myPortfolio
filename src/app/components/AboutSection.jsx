"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Html5</li>
        <li>Css3</li>
        <li>Tailwindcss</li>
        <li>JavaScript</li>
        <li>Typescript</li>
        <li>Reactjs</li>
        <li>Nextjs</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>MongoDb</li>
        <li>MySql</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Bachelor of Engineering(B.Tech)</li>
        <li>Indain Institue of Information Technology,Bhagalpur(IIITBh)</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          className="rounded-3xl"
          src="/images/about-image.png"
          width={500}
          height={500}
          alt="data"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I&apos;m a specialist in full-stack web development using the MERN stack
            (MongoDB, Express.js, React.js, Node.js), Next.js, and TypeScript.
            Over the years, I have delivered premium solutions that ensure
            exceptional user experiences and high performance across all
            devices. My expertise spans both front-end and back-end development,
            allowing me to build scalable and efficient web applications.
            Collaborating with cross-functional teams and leading projects has
            equipped me with the knowledge and confidence to tackle and solve
            complex challenges in my domain.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            ></TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
