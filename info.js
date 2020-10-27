const data = {
  // everything in here will be related to the site
  name: "Design Council",
  header: {
    description:
      "Creating websites, applications and solutions for the International School Basel community, founded in 2019",
  },
  about: {
    text:
      "We are the Design Council, a team of 18 talented students who offer services such as, design for websites, logos, posters etc. In addition to that, we also live stream events to all ISB community members. If you, or your club or team need something to be designed, we are here to help you. All of our members are devoted to making sure that the International School (of) Basel is powered by the best technology.",
  },
  links: [
    {
      text: "Home",
      type: "page",
      url: "/",
      btn: true,
    },
    {
      text: "ISB",
      type: "website",
      url: "https://isbasel.ch",
    },
    {
      text: "Team",
      type: "page",
      url: "/team",
    },
    {
      text: "Projects",
      type: "page",
      url: "/projects",
    },
  ],
  contact: [{ name: "Email", url: "mailto:designcouncil@isbasel.ch" }],
  team: {
    text:
      "These are the people part of the ISB Design Council and are powering the design community.",
    people: [
      {
        name: "En Yu",
        role: "President",
        image: require("./src/assets/images/team/enyu.jpg"),
        message:
          "I'm En Yu, a grade 12 student. The ability to create an aesthetic project out of pure ideas inspires me to work for design council. This year, I hope to get more students involved in design work through the year and continue presenting high quality products for the ISB community.",
      },
      {
        name: "Daniel",
        role: "Software/web developer",
        image: require("./src/assets/images/team/dan.jpg"),
        message:
          "Hi, I’m Daniel, I’m a 16 year old developer (as of 2020), computer science is my passion and I love being able to solve problems with programming. I also play tennis and the odd game of Tetris. I coded this website as my second project with design council after thebasilisk.org. You can contact me any time with questions related to the website 🙂",
      },
      {
        name: "Callum",
        role: "Project Manager",
        image: require("./src/assets/images/team/callum.jpg"),
        message:
          "I'm Callum, a grade 12 student who enjoys solving problems and making terrible puns 😎 I hope to be able to bring out the best in all my team members, and create a polished final product for every task I work on.",
      },
      {
        name: "Charles",
        role: "Director of Videography",
        image: require("./src/assets/images/team/charles1.jpg"),
        message:
          "Hi, My name is Charles, and I’m a 15 year old grade 10 student at ISB. In the Design Council, I am the Director of Videography, which means that I’m in charge of streaming events and most videos that we produce. I enjoy using digital technology to design and create solutions for people’s wants or needs which is why I joined the Design Council. If you have any questions or project ideas, feel free to contact me at my school email address.",
      },
      {
        name: "Toby",
        role: "Technology Manager",
        image: require("./src/assets/images/team/toby.jpg"),
        message:
          "Hi, I'm Toby. I'm a 16 year old developer (much like Daniel) and I like to solve problems by creating solutions with code. Additionally, I run my own company (big flex) and play lots of video games (some say a bit too much), and I'm very passionate about technology.",
      },
      {
        name: "Tim",
        message:
          "I'm Tim, I'm into gaming, designing, and the arts. When designing I'm focused on sleek aesthetics, functionality, and meaning. I'm mostly in charge of graphic design around here. From logos, to posters, to infographics and more, so I hope that I can fulfill whatever needs you have!",
        role: "Lead Visual Designer",
        image: require("./src/assets/images/team/tim1.jpg"),
      },
      {
        name: "Nadine",
        message:
          "Hola, I’m Nadine, a grade 11 student. My interests include photography, art, digital art or anything that requires design. If you need any help creating or producing a design, logo, poster or anything else, feel free to shoot me an email.",
        role: "Photographer",
        image: require("./src/assets/images/team/nadine1.jpg"),
      },
      {
        name: "Mats",
        message:
          "Hi, I'm Mats. I like to make stuff with computers (physical stuff just gets too messy). You can contact me if you need help with audio, video, 3D, anything like that. I hope to help you with your project soon!",
        role: "Head of Audio",
        image: require("./src/assets/images/team/mats.jpg"),
      },
      {
        name: "Jasper",
        message:
          "I'm Jasper, a 9th grade student, I like to make stuff on computers. I like designing logos, editing videos, photos, and making music. If you need anything like that feel free to contact me!",
        role: "Developer",
        image: require("./src/assets/images/team/jasper.jpg"),
      },
      {
        name: "Kaitlyn",
        role: "Streaming",
        message:
          "Hey I'm Kaitlyn, a grade 11 student. I enjoy working with others and create art or play  games when I'm not studying. I hope to support Design Council this year by offering creative ideas and a hardworking attitude :)",
        image: require("./src/assets/images/team/user.png"),
      },

      {
        name: "Carmelina",
        role: "Photographer",
        message:
          "Hi, I'm Carmelina and i'm in grade 11. I hope to improve my design skills throughout this experience and help out the ISB community.",
        image: require("./src/assets/images/team/carmelina1.jpg"),
      },
      {
        name: "Leo",
        role: "Developer",
        message:
          "Hi everyone, I'm Leo, a 15 year old programming enthusiast in 10th grade. I program apps and scripts in my free time, specifically machine learning projects. I enjoy using machine learning to automate tedious and boring tasks that we have to do every day. I look forward to helping other people and clubs in the school with their own technological needs.",
        image: require("./src/assets/images/team/user.png"),
      },
      {
        name: "Andrei",
        role: "Developer",
        message:
          "Hello, I'm Andrei and I'm pretty passionated about coding. I joined this group to learn more about design and to help others plan their coding related projects. So far, I've had a managing role in the development of the website and I'm exited to help out with other projects too.",
        image: require("./src/assets/images/team/andrei1.jpg"),
      },
    ],
  },
  projects: {
    text: "",
    projects: [
      {
        name: "Student Magazine (The Basilisk)",
        description:
          "The student magazine, led by Mr. Brown was developed and is maintained by the Design Council. We work closely with the student magazine to make sure they can publish easily and regularly. This project required the creation and maintenance of thebasilisk.org using wordpress to allow the members of the Student Magazine to easily create and edit posts at any time.",
        link: "https://thebasilisk.org",
        image: require("./src/assets/images/projects/thebasilisk.png"),
        btns: [
          {
            url: "https://thebasilisk.org/",
            name: "Basilisk Home",
          },
          {
            url: "https://thebasilisk.org/team",
            name: "Basilisk team",
          },
        ],
      },
      {
        name: "Graduation 2020",
        description:
          "The Design Council hosted the graduation 2020 which was held online due to the issues of COVID-19. We helped adapt the graduation to an online event held live for the ISB community. The Goodbye Video was also made by the Design Council.",
        link: "https://www.isbasel.ch/learn/senior-school/graduation-2020",
        image: require("./src/assets/images/projects/graduation2020.jpg"),
        btns: [
          {
            name: "View Graduation",
            url: "https://www.isbasel.ch/learn/senior-school/graduation-2020",
          },
        ],
      },
      {
        name: "Welcome Committee",
        description:
          "The ISB Community Association (CA) is a website dedicated to welcoming new families! This website part of the Welcome Programme, a part of the CA, that helps new families transition and integrate with the ISB community. ",
        link: "https://sites.google.com/isbasel.ch/welcome/home",
        image: require("./src/assets/images/projects/welcome-committee.png"),
        btns: [
          {
            name: "View Welcome Committee",
            url: "https://sites.google.com/isbasel.ch/welcome/home",
          },
        ],
      },
      {
        name: "International Festival 2020",
        description:
          "For close to 30 years, the International Festival (IF) has been a cornerstone in celebrating diversity at ISB. Held every Spring term, the festival has brought ISB families together to celebrate food, drink and culture from all the different countries that represent our community. The Design Council now handles and maintains the website.",
        link:
          "https://sites.google.com/isbasel.ch/international-festival-website/home",
        image: require("./src/assets/images/projects/international-festival.png"),
        btns: [
          {
            name: "View IF 2020",
            url:
              "https://sites.google.com/isbasel.ch/international-festival-website/home",
          },
        ],
      },
    ],
  },
};

export default data; // allows the website to use this file
