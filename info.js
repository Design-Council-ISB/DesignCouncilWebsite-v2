const data = {
  // everything in here will be related to the site
  name: "Design Council",
  header: {
    description:
      "Creating websites, applications and solutions for the International School Basel community, founded in 2019",
  },
  about: {
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aeneanconsectetur tellus vel risus feugiat volutpat. Nulla vulputate erat nontempor finibus. In euismod augue ac finibus elementum. In venenatis necnulla sed convallis. Suspendisse sollicitudin imperdiet sapien, sit amettempor eros imperdiet id. Aliquam et scelerisque purus.<br /><br />Vivamus pulvinar convallis ligula sed condimentum. Curabitur a venenatisaugue. Nulla blandit sem vel sem euismod, id interdum nisi cursus.Maecenas ac dui lorem. Duis eu fermentum diam, quis ullamcorper risus.Suspendisse eleifend ex augue, gravida congue est elementum ut.",
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
          "Hi, I’m Daniel, I’m a 16 year old developer (as of 2020), computer science is my passion and I love being able to solve problems with programming. I also play tennis and the odd game of Tetris. You can contact me any time with questions related to the website 🙂",
      },
      {
        name: "Callum",
        role: "Project Manager",
        image: require("./src/assets/images/team/callum.jpg"),
        message:
          "I'm Callum, a grade 12 student who enjoys solving problems and making terrible puns 😎 I hope to be able to bring out the best in all my team members, and create a polished final product for every task I work on.",
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
        role: "Developer",
        image: require("./src/assets/images/team/mats.jpg"),
      },
      {
        name: "Jasper",
        message:
          "I'm Jasper, a 9th grade student, I like to make stuff on computers. I like designing logos, editing videos, photos, and making music. If you need anything like that feel free to contact me!",
        role: "Developer",
        image: require("./src/assets/images/team/jasper.jpg"),
      },
    ],
  },
};

export default data; // allows the website to use this file
