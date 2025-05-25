export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
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
    des: "A contest tracking platform that aggregates upcoming and past coding contests from multiple platforms, allowing users to bookmark, filter, and receive reminders.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/ashutosh229/contest-tracker",
  },
  {
    id: 2,
    title: "Bookmarker",
    des: "A Bookmark Management tool to efficiently store, categorize, and track important links, addressing the inefficiencies of manually collecting and managing links in a virtual notepad. Each record in the tool includes a hyperlink for direct redirection, keywords for quick search and retrieval, and comments to provide context. Additionally, bookmarks are categorized with tags such as Visited, Not Visited, and Revisit, enabling easy tracking. The platform also features advanced filtering based on tags and keywords, allowing users to quickly locate relevant records. With full CRUD functionality, users can seamlessly add, update, and delete bookmarks, ensuring an organized and efficient link management system.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://github.com/ashutosh229/bookmarks-website",
  },
  {
    id: 3,
    title: "Scitech Website",
    des: "Designed and developed the SciTech Council Website for IIT Bhilai, providing a structured platform to showcase club details, council history, major events, and an interactive gallery. The website features a professional, science-and-technology-themed UI, built using ShadCN UI and Tailwind CSS, ensuring a modern, responsive, and visually engaging experience. Optimized for performance and accessibility, the platform leverages Next.js features like server-side rendering (SSR) and static site generation (SSG) for enhanced load speeds. Dynamic content sections highlight various SciTech initiatives, fostering engagement and easy discoverability. The scalable backend, powered by NestJS, efficiently manages API requests, user interactions, and real-time updates while maintaining modular and component-driven architecture for long-term maintainability.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://github.com/ashutosh229/scitech-website",
  },
  {
    id: 4,
    title: "TrackerX",
    des: "TrackerX is a mobile application designed to help users track their expenses, income, and financial summaries with ease. It provides an intuitive UI for adding, filtering, and managing financial transactions while integrating features such as borrowing/lending tracking, UPI-based payments, and automated reminders. The app ensures real-time synchronization, secure data handling, and optimized performance through efficient state management and API caching.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/ashutosh229/expense-tracker",
  },
  {
    id: 5,
    title: "MP1 Solution: Product Development",
    des: "This application is the solution for the MP1 (Product Development) problem statement, came in the 13th Inter IIT Tech Meet, held at IIT Bombay, in December, 2024. We developed the Dream11 application with enhanced UI and optimizations, with additional new features in the application increasing interactivity, performance and user experience. The solution incorporates AI-powered player selection, to predict optimal player picks for the user, in a particular match, based on the multiple factors, which were stated in the problem statement. The application also has the integration of explainability with Generative AI, to provide insights and reasoning behind player selections. I have followed the modular system architecture in the solution and developed 3 major components: Backend, responsible for API handling, data processing and system management; Product UI, which is the interface for the users where they can participate in matches and use the application; Model UI, which has the purpose of visualizing dataset selection, model training/testing, hyperparameter tuning for data scientists & testers.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/ashutosh229/inter-iit-13.0",
  },
  {
    id: 6,
    title: "Meraz Website",
    des: "Developed the official website for Meraz, the annual techno-cultural fest of IIT Bhilai, ensuring a responsive and visually engaging user experience. Built using Svelte, leveraging its lightweight and reactive architecture for optimal performance. Developed interactive UI components with smooth animations and transitions to enhance user engagement. Implemented client-side rendering with minimal backend dependencies to achieve fast load times. Focused on SEO optimization and mobile responsiveness to maximize accessibility and reach for a wider audience.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/ashutosh229/ashutosh229.github.io/tree/master",
  },
  {
    id: 7,
    title: "Library Automation System",
    des: "Developed a fully automated Library Management System to streamline user interactions, book transactions, and attendance tracking. Implemented NFC-based entry/exit automation, enabling seamless check-ins and check-outs by tapping ID cards, with attendance automatically logged in the database. Integrated barcode scanning for efficient book borrowing and returning, ensuring real-time tracking and automated management with least manual labour. Designed and developed a dynamic UI using Next.js and Tailwind CSS, which adapts based on user-selected actions such as studying, borrowing, or returning books. Built a scalable backend with NestJS, handling API requests, user interactions, and real-time updates efficiently. Developed a robust database system to manage user logs, book records, and transaction history, ensuring reliability and scalability.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/ashutosh229/library_automation",
  },
  {
    id: 8,
    title: "Corporate Companion",
    des: "A sophisticated chatbot solution that revolutionizes corporate employee management through intelligent data handling and automated administrative functions, integrating functionalities like feeding and retrieval of the employee data, intelligent meeting coordination across multiple organizational levels, automated document classification, and instant access to company policies and events.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/ashutosh229/corporate-companion",
  },
  {
    id: 9,
    title: "IIT Bhilai Student Forum",
    des: "A comprehensive web portal for IIT Bhilai students that transforms course selection and resource management y by enabling the students to make informed decisions by accessing peer reviews, statistical course metrics (workload, grading strictness, difficulty,etc.), and centralized course materials. The collaborative environment allows both students and faculty to contribute resources, share experiences, and provide valuable feedback, creating a robust knowledge ecosystem that streamlines academic planning and enhances the overall learning experience. Created to address the critical decision-making challenges faced during course registration periods and to solve the ongoing issue of fragmented course resource distribution, ultimately fostering a more transparent and collaborative academic community.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/ashutosh229/AcademicX",
  },
  {
    id: 9,
    title: "Timetable Generator",
    des: "A streamlined tool that simplifies the complex task of academic scheduling by automatically generating personalized college timetables. By intelligently processing course selections and applying sophisticated slot allocation algorithms, this application eliminates scheduling conflicts and optimizes daily academic routines. The intuitive interface transforms what was once a tedious manual process into an effortless experience, saving valuable time and reducing scheduling errors, with the additional functionality of downloading the timetable in the form of a pdf or image.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/ashutosh229/TimeTable_creator/tree/DRF_version",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url: "https://github.com/ashutosh229/",
  },
  {
    id: 2,
    img: "/twit.svg",
    url: "https://x.com/ashutoshkj0390",
  },
  {
    id: 3,
    img: "/link.svg",
    url: "https://www.linkedin.com/in/ashutosh-kumar-jha-601098280/",
  },
];
