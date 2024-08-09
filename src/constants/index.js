import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/foody1.jpg";
import project3 from "../assets/projects/project3.png";
import project4 from "../assets/projects/project4.jpeg";

export const HERO_CONTENT = `As an IoT specialist, I am focused on pioneering advancements in the Internet of Things sector. My expertise includes designing and deploying innovative IoT systems, integrating sensors, and utilizing data analytics to enhance performance and connectivity. My goal is to push the boundaries of technology through advanced IoT applications that improve operational efficiency and drive progress.`;

export const ABOUT_TEXT = `With a strong background in IoT development, I specialize in crafting and implementing advanced IoT systems. My work involves integrating IoT devices with cloud platforms, utilizing technologies such as MQTT, AZURE IoT, and sophisticated sensors and actuators. By blending embedded systems knowledge with data analytics, I create scalable solutions that enhance connectivity and automation. I am dedicated to leading technological advancements and continuously refining my skills while engaging with emerging trends and significant projects in the IoT landscape.`;

export const SKILLS = [
  {
    category: "Soft Skills",
    skills: ["Problem Solving", "Team Collaboration", "Project Management", "Effective Communication"]
  }
];

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Junior Full Stack Development Intern",
    company: "iMAXEAM",
    description: `Leading the development of a dynamic mobile dashboard for real-time data representation for the client ESOM. Utilized React Native, Node.js, and MongoDB to create a robust application. Implemented real-time data processing with Socket.IO and integrated Node-RED and Azure IoT for comprehensive IoT solutions. Contributed to the development of the MaxAPPS-Charts application, enhancing overall project functionality and performance.`,
    technologies: ["React Native", "Node.js", "MongoDB", "Socket.IO", "Node-RED", "MQTT", "Azure IoT"]
  },

  {
    year: "2022 - 2023",
    role: "Junior Full Stack Development Intern",
    company: "iMAXEAM",
    description: `Engaged in a full-stack development internship, contributing to both frontend and backend projects. Developed a web application using React and integrated it with Node.js for the backend. Additionally, contributed to mobile application development, utilizing modern frameworks and tools. Participated in all phases of the development lifecycle, from initial design to deployment.`,
    technologies: ["React.js", "Node.js", "React Native", "JavaScript"]
  },
  {
    year: "2021 - 2022",
    role: "Front-End Developer",
    company: "University Projects",
    description: `Worked on developing and designing web applications as part of academic projects. Focused on front-end technologies, including HTML, CSS, and JavaScript frameworks. Created user-friendly interfaces and optimized web performance. Collaborated with peers on project tasks and applied best practices in front-end development.`,
    technologies: ["HTML", "CSS", "JavaScript", "React.js"]
  },
  {
    year: "2020 - 2021",
    role: "Technical Intern",
    company: "Internship Program",
    description: `Completed an internship focused on web development, gaining hands-on experience with HTML, CSS, and Python. Assisted with SQL database management and supported coding tasks, including debugging and feature implementation. Participated in sessions on web technologies to enhance project outcomes.`,
    technologies: ["CSS", "Python", "HTML", "SQL"]
  }

];

export const PROJECTS = [

  {
    title: "Dashboard IoT",
    image: project3,
    description: "A dynamic IoT dashboard designed for real-time monitoring and data visualization. Developed with React Native for a seamless mobile experience, Node.js for backend services, and MongoDB for data storage. Utilizes Socket.IO for real-time data updates and provides comprehensive insights into IoT systems.",
    technologies: ["React Native", "Node.js", "MongoDB", "Socket.IO"],
  },

  {
    title: "Gaming Platform Frontend",
    image: project4,
    description: "Developed the frontend of a gaming platform, focusing on creating an engaging and interactive user interface. Utilized TypeScript to ensure robust and scalable code, implementing features such as game navigation and user interactions.",
    technologies: ["TypeScript", "HTML", "CSS", "React"],
  },

  {
    title: "E-Commerce Mobile APP",
    image: project1,
    description:
      "A fully functional e-commerce Mobile APP with features like product listing, shopping cart, and user authentication.",
    technologies: ["React Native", "Node.js", "MongoDB"],
  },

  {
    title: "Fast Food Website",
    image: project2,
    description: "A dynamic website designed for a fast food restaurant, featuring menu display, online ordering, and real-time order tracking. Includes a user-friendly interface for browsing menu items, placing orders, and managing customer interactions.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },

];

export const CONTACT = {
  address: "5012 Sahline Monastir, Tunisie",
  phoneNo: "+216 53-407-339 ",
  email: "dridighassenbac2021@gmail.com",
};
