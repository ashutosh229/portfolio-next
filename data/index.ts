import { time } from "console";
import { link } from "fs";

export const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "I prioritize building solutions which can solve real-world problems rather than increase the space of my laptop",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title:
      "I'm very adaptive to technologies and can learn any technology stack quickly and anytime",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve and learn new technologies",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title:
      "Tech enthusiast with a passion for software development and Machine Learning",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title:
      "Currently learning Java and its applications in industrial software development, with a focus on building scalable and efficient applications",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Any opportunities for me?",
    description: "Send me the details",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Contest Tracker Application",
    time: "Mar 2025 - Mar 2025",
    des: "A comprehensive contest tracking system that fetches upcoming and past coding contests from platforms like Codeforces, CodeChef, and LeetCode. It provides users with real-time updates, contest countdowns, and filtering options based on preferred platforms. Users can bookmark contests and even access contest solutions via a linked YouTube integration. Additionally, the system supports automated solution fetching and allows users to sign up for contest reminders via email or SMS, offering a seamless and interactive experience.",
    img: "/projects/contest-tracker.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/ashutosh229/contest-tracker",
  },
  {
    id: 2,
    title: "Bookmarker",
    time: "Mar 2025 - Mar 2025",
    des: "A Bookmark Management tool to efficiently store, categorize, and track important links, addressing the inefficiencies of manually collecting and managing links in a virtual notepad. Each record in the tool includes a hyperlink for direct redirection, keywords for quick search and retrieval, and comments to provide context. Additionally, bookmarks are categorized with tags such as Visited, Not Visited, and Revisit, enabling easy tracking. The platform also features advanced filtering based on tags and keywords, allowing users to quickly locate relevant records. With full CRUD functionality, users can seamlessly add, update, and delete bookmarks, ensuring an organized and efficient link management system.",
    img: "/projects/bookmarker.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://github.com/ashutosh229/bookmarks-website",
  },
  {
    id: 3,
    title: "Scitech Website",
    time: "Jan 2025 - Mar 2025",
    des: "The wesbite for the SciTech Council of IIT Bhilai, providing a structured platform to showcase club details, council history, major events, and an interactive gallery. The website features a professional, science-and-technology-themed UI, built using ShadCN UI and Tailwind CSS, ensuring a modern, responsive, and visually engaging experience. Optimized for performance and accessibility, the platform leverages Next.js features like server-side rendering (SSR) and static site generation (SSG) for enhanced load speeds. Dynamic content sections highlight various SciTech initiatives, fostering engagement and easy discoverability. The scalable backend, powered by NestJS, efficiently manages API requests, user interactions, and real-time updates while maintaining modular and component-driven architecture for long-term maintainability.",
    img: "/projects/scitech-website.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://github.com/ashutosh229/scitech-website",
  },
  // {
  //   id: 4,
  //   title: "TrackerX",
  //   time: "Mar 2025 - Mar 2025",
  //   des: "TrackerX is a mobile application designed to help users track their expenses, income, and financial summaries with ease. It provides an intuitive UI for adding, filtering, and managing financial transactions while integrating features such as borrowing/lending tracking, UPI-based payments, and automated reminders. The app ensures real-time synchronization, secure data handling, and optimized performance through efficient state management and API caching.",
  //   img: "/p4.svg",
  //   iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
  //   link: "https://github.com/ashutosh229/expense-tracker",
  // },
  // {
  //   id: 5,
  //   title: "MP1 Solution: Product Development",
  //   time: "Nov 2024 - Dec 2024",
  //   des: "This application is the solution for the MP1 (Product Development) problem statement, came in the 13th Inter IIT Tech Meet, held at IIT Bombay, in December, 2024. We enhanced the Dream11 application with improved UI and optimizations, with additional new features in the application increasing interactivity, performance and user experience. The solution incorporates AI-powered player selection, to predict optimal player picks for the user, in a particular match, based on the multiple factors, which were stated in the problem statement. The application also has the integration of explainability with Generative AI, to provide insights and reasoning behind player selections. I have followed the modular system architecture in the solution and developed 3 major components: Backend, responsible for API handling, data processing and system management; Product UI, which is the interface for the users where they can participate in matches and use the application; Model UI, which has the purpose of visualizing dataset selection, model training/testing, hyperparameter tuning for data scientists & testers.",
  //   img: "/p4.svg",
  //   iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
  //   link: "https://github.com/ashutosh229/inter-iit-13.0",
  // },
  {
    id: 6,
    title: "Meraz Website",
    time: "Oct 2024 - Nov 2024",
    des: "The official website for Meraz, the annual techno-cultural fest of IIT Bhilai, ensuring a responsive and visually engaging user experience. Built using Svelte, leveraging its lightweight and reactive architecture for optimal performance. Developed interactive UI components with smooth animations and transitions to enhance user engagement. Implemented client-side rendering with minimal backend dependencies to achieve fast load times. Focused on SEO optimization and mobile responsiveness to maximize accessibility and reach for a wider audience.",
    img: "/projects/meraz-website.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/ashutosh229/ashutosh229.github.io/tree/master",
  },
  // {
  //   id: 7,
  //   title: "Library Automation System",
  //   time: "Jun 2024 - Jul 2024",
  //   des: "A fully automated Library Management System to streamline user interactions, book transactions, and attendance tracking. Implemented NFC-based entry/exit automation, enabling seamless check-ins and check-outs by tapping ID cards, with attendance automatically logged in the database. Integrated barcode scanning for efficient book borrowing and returning, ensuring real-time tracking and automated management with least manual labour. Designed and developed a dynamic UI using Next.js and Tailwind CSS, which adapts based on user-selected actions such as studying, borrowing, or returning books. Built a scalable backend with NestJS, handling API requests, user interactions, and real-time updates efficiently. Developed a robust database system to manage user logs, book records, and transaction history, ensuring reliability and scalability.",
  //   img: "/p4.svg",
  //   iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
  //   link: "https://github.com/ashutosh229/library_automation",
  // },
  {
    id: 8,
    title: "Corporate Companion",
    time: "Apr 2025 - Apr 2025",
    des: "A sophisticated chatbot solution that revolutionizes corporate employee management through intelligent data handling and automated administrative functions, integrating functionalities like feeding and retrieval of the employee data, intelligent meeting coordination across multiple organizational levels, automated document classification, and instant access to company policies and events.",
    img: "/projects/corporate-companion.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/ashutosh229/corporate-companion",
  },
  {
    id: 10,
    title: "IIT Bhilai Student Forum",
    time: "Mar 2025 - Apr 2025",
    des: "A comprehensive web portal for IIT Bhilai students that transforms course selection and resource management y by enabling the students to make informed decisions by accessing peer reviews, statistical course metrics (workload, grading strictness, difficulty,etc.), and centralized course materials. The collaborative environment allows both students and faculty to contribute resources, share experiences, and provide valuable feedback, creating a robust knowledge ecosystem that streamlines academic planning and enhances the overall learning experience. Created to address the critical decision-making challenges faced during course registration periods and to solve the ongoing issue of fragmented course resource distribution, ultimately fostering a more transparent and collaborative academic community.",
    img: "/projects/iit-bhilai-student-forum.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/ashutosh229/AcademicX",
  },
  // {
  //   id: 9,
  //   title: "Timetable Generator",
  //   time: "Apr 2025 - Apr 2025",
  //   des: "A streamlined tool that simplifies the complex task of academic scheduling by automatically generating personalized college timetables. By intelligently processing course selections and applying sophisticated slot allocation algorithms, this application eliminates scheduling conflicts and optimizes daily academic routines. The intuitive interface transforms what was once a tedious manual process into an effortless experience, saving valuable time and reducing scheduling errors, with the additional functionality of downloading the timetable in the form of a pdf or image.",
  //   img: "/p1.svg",
  //   iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
  //   link: "https://github.com/ashutosh229/TimeTable_creator/tree/DRF_version",
  // },
  {
    id: 11,
    title: "Portfolio Website",
    time: "Mar 2025 - Mar 2025",
    des: "A sleek and personalized portfolio website that serves as a comprehensive showcase of my professional journey, technical abilities, and creative projects. This digital representation offers visitors an intuitive way to explore my work, skills, and accomplishments, effectively communicating my unique value proposition to potential employers, clients, and collaborators.",
    img: "/projects/portfolio-website.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/ashutosh229/portfolio-next",
  },
];

// export const testimonials = [
//   {
//     quote:
//       "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//     name: "Michael Johnson",
//     title: "Director of AlphaStream Technologies",
//   },
//   {
//     quote:
//       "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//     name: "Michael Johnson",
//     title: "Director of AlphaStream Technologies",
//   },
//   {
//     quote:
//       "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//     name: "Michael Johnson",
//     title: "Director of AlphaStream Technologies",
//   },
//   {
//     quote:
//       "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//     name: "Michael Johnson",
//     title: "Director of AlphaStream Technologies",
//   },
//   {
//     quote:
//       "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//     name: "Michael Johnson",
//     title: "Director of AlphaStream Technologies",
//   },
// ];

// export const companies = [
//   {
//     id: 1,
//     name: "cloudinary",
//     img: "/cloud.svg",
//     nameImg: "/cloudName.svg",
//   },
//   {
//     id: 2,
//     name: "appwrite",
//     img: "/app.svg",
//     nameImg: "/appName.svg",
//   },
//   {
//     id: 3,
//     name: "HOSTINGER",
//     img: "/host.svg",
//     nameImg: "/hostName.svg",
//   },
//   {
//     id: 4,
//     name: "stream",
//     img: "/s.svg",
//     nameImg: "/streamName.svg",
//   },
//   {
//     id: 5,
//     name: "docker.",
//     img: "/dock.svg",
//     nameImg: "/dockerName.svg",
//   },
// ];

export const workExperience = [
  {
    id: 1,
    title: "Application Developer Intern",
    organization: "IBITF, IIT Bhilai",
    time: "Jun 2024 - Jul 2024",
    location: "IIT Bhilai",
    skills: "Next.js, Tailwind CSS, NestJS, MongoDB, NFC, Barcode Scanning",
    link: "https://github.com/ashutosh229/library_automation",
    desc: "Developed a fully automated Library Management System with NFC-based entry/exit tracking, real-time book transactions via barcode scanning, and dynamic UI using Next.js and Tailwind CSS, along with a scalable backend with NestJS and a robust database to manage users, books, and attendance logs, under the IBITF, IIT Bhilai",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Full Stack Web Developer Intern",
    organization: "Trajectory",
    time: "Oct 2024 - Dec 2024",
    location: "Remote",
    desc: "Designed and developed one of the projects of the organization named Emploi, where I managed to improve the frontend of the application in terms of UI and also efficiency by optimizing the load times and traffic, and also worked on the backend where I implemented python scripts to run prompt chains and integrated the backend with the frontend in an efficient manner, to increase performance of the application.",
    skills:
      "FastAPI, React.js, Tailwind CSS, MongoDB, Prompt Chains, OpenAI API, LLMs",
    link: "https://drive.google.com/file/d/1gYlxrQziIB0QA-75rCs3UulWVaz7nPme/view?usp=sharing",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Software Engineering Intern",
    organization: "Virtual Internships",
    time: "July 2025 - Present",
    location: "Remote",
    desc: "Currently working as a Software Engineering Intern at an EdTech startup that offers B2B and B2C services to Universities, College Students, and Hiring Partners by bridging the gap between education and employment. I’m actively involved in the development of three core applications — the Main App (for the management of interns and companies), the Moo App (an internal admin tool for end-to-end administration), and the Partners App (for managing university collaborations). My work revolves around building responsive and accessible user interfaces, implementing new features, fixing bugs, and maintaining overall application performance. I also manage a smooth and systematic release pipeline - from development and version control on GitHub to testing and final deployment - ensuring consistent and reliable delivery of features in a collaborative, fast-paced environment.",
    skills:
      "React.js, TypeScript, Redux Toolkit, RTK Query, Material UI, SCSS, Unit Testing, Jest",
    // link: "https://drive.google.com/file/d/1gYlxrQziIB0QA-75rCs3UulWVaz7nPme/view?usp=sharing",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Full Stack Web Developer Intern",
    organization: "Mentor Me",
    time: "June 2025 - Present",
    location: "Remote",
    desc: "Working as part of a cross-functional team to design and develop a scalable EdTech application, contributing to both frontend and backend development using React.js, Spring Boot, and SQL databases and involved in implementing user interfaces, building RESTful APIs, managing data flow, and ensuring smooth integration between system components",
    skills:
      "React.js, Spring Boot, SQL, PostgreSQL, Git, GitHub, Communication, Teamwork",
    // link: "https://drive.google.com/file/d/1gYlxrQziIB0QA-75rCs3UulWVaz7nPme/view?usp=sharing",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
  {
    id: 5,
    title: "Full Stack Web Developer Intern",
    organization: "CollegeMap",
    time: "June 2025 - Present",
    location: "Remote",
    desc: "Currently working with a startup from IIT Bombay, where I am enhancing the application by integrating new features and improving overall functionality. My role involves actively contributing to the development lifecycle—from implementing user interfaces and handling state management to ensuring seamless user experiences. I collaborate closely with the team to deliver scalable and efficient solutions that align with the platform's goals of connecting students, universities, and hiring partners.",
    skills:
      "React.js, JavaScript, Node.js, Express.js, MongoDB, Google Analytics, Google Cloud Platform (GCP), Google OAuth 2.0",
    // link: "https://drive.google.com/file/d/1gYlxrQziIB0QA-75rCs3UulWVaz7nPme/view?usp=sharing",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
];

export const socialMedia = [
  {
    id: 3,
    img: "/socials/icons8-linkedin-48.png",
    url: "https://www.linkedin.com/in/ashutosh-kumar-jha-601098280/",
    name: "LinkedIn",
  },
  {
    id: 2,
    img: "/socials/icons8-twitter-50.png",
    url: "https://x.com/ashutoshkj0390",
    name: "Twitter",
  },
  {
    id: 1,
    img: "/socials/git.svg",
    url: "https://github.com/ashutosh229/",
    name: "GitHub",
  },
  // {
  //   id: 4,
  //   img: "/socials/icons8-codeforces-24.png",
  //   url: "https://codeforces.com/profile/alpha_105",
  //   name: "Codeforces",
  // },
  {
    id: 5,
    img: "/socials/icons8-leetcode-24.png",
    url: "https://leetcode.com/u/ashu_0x0y/",
    name: "LeetCode",
  },
  // {
  //   id: 6,
  //   img: "/socials/icons8-codechef-48.png",
  //   url: "https://www.codechef.com/users/ashu_0390",
  //   name: "CodeChef",
  // },
  {
    id: 7,
    img: "/socials/icons8-geeksforgeeks-48.png",
    url: "https://www.geeksforgeeks.org/user/akumarj0u88/",
    name: "GeeksforGeeks",
  },
];
