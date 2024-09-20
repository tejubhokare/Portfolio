import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Frontend Developer",
    company: "Vosyn",
    description: `Collaborated with a team of developers to build React applications using TypeScript for the VosynVerse platform. Developed a cross-platform React Native application, ensuring consistency across iOS and Android with Expo Go for testing. Optimized internal REST API usage by creating reusable React hooks, reducing redundant API calls by 20%. Implemented quality assurance processes with 80% code coverage using Jest for end-to-end testing.`,
    technologies: ["TypeScript", "React.js", "Next.js", "React Native"],
  },
  {
    year: "2021 - 2023",
    role: "Full Stack Developer",
    company: "Bajaj Finance Ltd.",
    // description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    description: `Initiated and led the development of a consolidated customer portfolio feature using Node.js for the backend and React.js with TypeScript for the frontend, now used by 200,000 users daily. Developed microservices with Express and Node.js to aggregate and expose customer data via REST API. Achieved 23% fewer customer complaints by building extensive test coverage with JEST. Collaborated with product, developer, and UI/UX teams, speeding up the project timeline by 15%.`,
    technologies: ["React.js", "Microservices", "REST API", "Postgres"],
  },
  {
    year: "2019 - 2021",
    role: "Full Stack Developer",
    company: "Bajaj Finance Ltd.",
    // description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    description: `Contributed to the development of a customer portal for Bajaj Finance using React and Node.js. Designed a reusable EMI calculator component, now used by 4 teams (https://www.bajajfinserv.in/personal-loan-emi-calculator). Implemented dynamic charts and graphs with React, Chart.js, and D3.js to visualize real-time loan data. Used Webpack, Craco, npm, and Babel for project setup and optimization. Collaborated on workflows, wireframes, and mockups with Figma.`,
    technologies: ["JavaScript", "React", "Node.js", "Postgres"],
  },

];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
