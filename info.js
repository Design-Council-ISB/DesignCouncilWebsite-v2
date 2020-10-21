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
        image: require("./src/assets/images/team/user.png"),
        message:
          "I'm En Yu, a grade 12 student. The ability to create an aesthetic project out of pure ideas inspires me to work for design council. This year, I hope to get more students involved in design work through the year and continue presenting high quality products for the ISB community.",
      },
      {
        name: "Daniel Wilson",
        role: "Software/web development",
        image: require("./src/assets/images/team/dan.png"),
        message:
          "Hi, I’m Daniel, I’m a 15 year old developer, computer science is my passion and I love being able to solve problems with programming. I also play tennis and the odd game of Tetris. You can contact me any time with questions related to the website with my email below 🙂",
      },
    ],
  },
};

module.exports = data; // allows the website to use this file
