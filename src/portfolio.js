/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Chandima Sooriyaarachchi",
  title: "Hi all, I'm Chandima Sooriyaarachchi",
  subTitle: emoji(
    "Computer Science Undergraduate 🚀 with Strong professional engineering background specialized in JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
    ),
  resumeLink:
    "https://drive.google.com/file/d/1cL9USHtZyx4a6ZhqMAVdNT-AyBPYyD7U/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/IT20230692",
  linkedin: "https://www.linkedin.com/in/chandima-sooriyaarachchi-a08449174",
  gmail: "sanjusooriyaarachchi@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/profile.php?id=100007044557312",

  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I have experienced",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
   
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Sri Lanka Institute of Information Technology",
      logo: require("./assets/images/sliit2.jpg"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2020 - Present",
      desc: "SGPA - 3.47",
      descBullets: [
        "Introduction to Programming , Computer Systems , Visual Programming , Graph Theory , Linear Algebra",
        "Object Oriented Programming , Data Structures and Algorithms , Software Engineering , Database Management Systems , Web Development"
      ]
    },
    {
      schoolName: "Dudley Senanayake Central College, Tholangamuwa",
      logo: require("./assets/images/dscc.jpg"),
      subHeader: "High School",
      duration: "February 2010 - August 2018",
      desc: "Completed Advanced Level Within Physical Science Scream ",
      descBullets: ["Combined Mathematics, Physics, Chemistry "]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "HTML5", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "CSS3",
      progressPercentage: "90%"
    },
    {
      Stack: "Javascript",
      progressPercentage: "90%"
    },
     {
      Stack: "React", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Nodejs",
      progressPercentage: "80%"
    },
    {
      Stack: "Laravel",
      progressPercentage: "80%"
    },
    {
      Stack: "MySQL",
      progressPercentage: "80%"
    },
    {
      Stack: "MongoDB",
      progressPercentage: "75%"
    },
    {
      Stack: "Object Oridented Design Concepts",
      progressPercentage: "80%"
    },
    {
      Stack: "Data Structures and Algorithms",
      progressPercentage: "80%"
    },
    {
      Stack: "Security",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/kolamasrilanka.PNG"),
      projectName: "Kolama Web-App",
      projectDesc: "This is created for targetting tourism in Sri Lanka and they can easily find their want places for events and they can buy traditional items through this app",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://kolamasrilanka.netlify.app/"
        },{
          name: "Reactjs",
          url: "https://kolamasrilanka.netlify.app/"
        }
        ,{
          name: "Nodejs",
          url: "https://kolamasrilanka.netlify.app/"
        }
        ,{
          name: "MongoDB",
          url: "https://kolamasrilanka.netlify.app/"
        },{
          name: "Mongoose",
          url: "https://kolamasrilanka.netlify.app/"
        }
        ,{
          name: "CSS",
          url: "https://kolamasrilanka.netlify.app/"
        },{
          name: "JWT",
          url: "https://kolamasrilanka.netlify.app/"
        }
        ,{
          name: "Metireal UI ",
          url: "https://kolamasrilanka.netlify.app/"
        },
        {
          name: "Context API ",
          url: "https://kolamasrilanka.netlify.app/"
        },{
          name: "Stripe payment gate",
          url: "https://kolamasrilanka.netlify.app/"
        },
      ]
    },
    {
      image: require("./assets/images/blogapp.PNG"),
      projectName: "Blog App",
      projectDesc: "Discuss the react node and comparing with each other frameworks.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://blog-app-chandima99.netlify.app/"
        },{
          name: "Reactjs",
          url: "https://blog-app-chandima99.netlify.app/"
        }
        ,{
          name: "Nodejs",
          url: "https://blog-app-chandima99.netlify.app/"
        }
        ,{
          name: "MongoDB",
          url: "https://blog-app-chandima99.netlify.app/"
        }
        ,{
          name: "CSS",
          url: "https://blog-app-chandima99.netlify.app/"
        },{
          name: "MongoDB",
          url: "https://blog-app-chandima99.netlify.app/"
        },{
          name: "Mongoose",
          url: "https://blog-app-chandima99.netlify.app/"
        }
      ]
    },
    {
      image: require("./assets/images/chatapp.PNG"),
      projectName: "Chat-App",
      projectDesc: "This is a real-time chat application.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://chandima-chat-app.netlify.app/"
        },{
          name: "Reactjs",
          url: "https://chandima-chat-app.netlify.app/"
        }
        ,{
          name: "Nodejs",
          url: "https://chandima-chat-app.netlify.app/"
        }
        ,{
          name: "Socket",
          url: "https://chandima-chat-app.netlify.app/"
        }
        ,{
          name: "CSS",
          url: "https://chandima-chat-app.netlify.app/"
        },{
          name: "JWT",
          url: "https://chandima-chat-app.netlify.app/"
        }
      ]
    },
    {
      image: require("./assets/images/herbalguru.PNG"),
      projectName: "Herbalguru",
      projectDesc: "This web application is created for targeting sell medicines and herbal items there are two rolls sellers and customers on this application ",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://herbalguru.netlify.app/"
        },{
          name: "Reactjs",
          url: "https://herbalguru.netlify.app/"
        }
        ,{
          name: "Nodejs",
          url: "https://herbalguru.netlify.app/"
        }
        ,{
          name: "MongoDB",
          url: "https://herbalguru.netlify.app/"
        },{
          name: "Mongoose",
          url: "https://herbalguru.netlify.app/"
        },{
          name: "Metireal UI",
          url: "https://herbalguru.netlify.app/"
        },{
          name: "Redux",
          url: "https://herbalguru.netlify.app/"
        }
        ,{
          name: "SCSS",
          url: "https://herbalguru.netlify.app/"
        },{
          name: "JWT",
          url: "https://herbalguru.netlify.app/"
        },{
          name: "Stripe payment gate",
          url: "https://herbalguru.netlify.app/"
        },
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Microsoft Certified: Azure Fundamentals",
      subtitle:
        "AZ- 900 Azure Fundamentals",
      image: require("./assets/images/az-900.PNG"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/78140f46-a068-4bd0-b10a-2b020831d477?source=linked_in_profile"
        },
      ]
    },
    {
      title: "Higher Diploma IN Information Technology",
      subtitle:
        "Issues from SLIIT for completed my Diploma in Information Technology.",
      image: require("./assets/images/sliitchandimaceti.jpeg"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        // {
        //   name: "View Google Assistant Action",
        //   url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        // }
      ]
    },

    {
      title: "Web App Developer",
      subtitle: "Complete Web Developer Bootcamp By Dr Angela Yu from udemy",
      image: require("./assets/images/udemy anjela.PNG"),
      imageAlt: "PWA Logo",
      footerLink: [
        
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
    
  number: "+94 705901816",
  email_address: "sanjusooriyaarachchi@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "SanjuChandima", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
