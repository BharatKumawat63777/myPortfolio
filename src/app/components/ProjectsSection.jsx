"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "E-Commerce Website",
    description:
      "An e-commerce website that offers a seamless shopping experience with secure payments, real-time order tracking, and a user-friendly interface. Browse a wide range of products and enjoy fast, reliable delivery.",
    image: "/images/projects/frontend_kks.jpeg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/BharatKumawat63777/E-commerce-Website",
    previewUrl: "https://krishna-kirna-store-kks.onrender.com/",
  },
  {
    id: 2,
    title: "News-reading",
    description:
      "A news website provides up-to-date information on current events, politics, business, technology, sports, and entertainment. It delivers breaking news, in-depth analysis, and multimedia content to keep readers informed globally or locally.",
    image: "/images/projects/News_api.jpeg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/BharatKumawat63777/News-Website",
    previewUrl: "https://news-website-1-l8x5.onrender.com/",
  },
  {
    id: 3,
    title: "Admin Portal-Ecommerce",
    description:
      "An admin portal for e-commerce allows store owners to manage products, orders, customers, and analytics efficiently. It provides tools for inventory control, order processing, user management, and sales tracking to streamline business operations.",
    image: "/images/projects/admin_kks.jpeg",
    tag: ["All", "Web"],
    gitUrl:
      "https://github.com/BharatKumawat63777/E-commerce-Website/tree/main/admin",
    previewUrl:
      "https://github.com/BharatKumawat63777/E-commerce-Website/tree/main/admin",
  },
  {
    id: 4,
    title: "Notebook-note",
    description:
      "A notebook-note feature allows users to create, organize, and manage their notes efficiently. It enables easy editing, categorization, and retrieval of important information for personal or professional use.",
    image: "/images/projects/Notebook.jpeg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/BharatKumawat63777/inotebook",
    previewUrl: "https://github.com/BharatKumawat63777/inotebook",
  },
  {
    id: 5,
    title: "Dance-Website -  Pug",
    description:
      "A dance website showcases various dance styles, tutorials, events, and performances. It connects dancers, instructors, and enthusiasts through online classes, workshops, and community engagement.",
    image: "/images/projects/pug.jpeg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/BharatKumawat63777/Dance-Website",
    previewUrl: "https://github.com/BharatKumawat63777/Dance-Website",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center mt-[100px] text-4xl font-bold text-white  mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
      </div>
      <ul
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 w-full"
      >
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
