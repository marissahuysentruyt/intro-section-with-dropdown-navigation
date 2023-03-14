import Handlebars from "handlebars/dist/cjs/handlebars";

const context = {
  title: "Make Remote work",
  subtitle: "Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.",
  link: "Learn more",
  user_action: [
    "Login",
    "Register"
  ],
  navigation: [
    {
      name: "Features",
      menu: [
        {
          link: "Todo List",
          src: "src/images/icon-todo.svg"
        },
        {
          link: "Calendar",
          src: "src/images/icon-calendar.svg"
        },
        {
          link: "Reminders",
          src: "src/images/icon-reminders.svg"
        },
        {
          link: "Planning",
          src: "src/images/icon-planning.svg"
        }
      ],
    },
    {
      name: "Company",
      menu: [
        {
          link: "History",
        },
        {
          link: "Our History",
        },
        {
          link: "Blog",
        }
      ]
    },
    {
      name: "Careers"
    },
    {
      name: "About"
    }
  ],
};

// defines the script tag for this code
const templateElement = document.getElementById("mainHBTemplate");
// any HTML found between the script tags
const templateSource = templateElement.innerHTML;
// function to compile the HTML found
const template = Handlebars.compile(templateSource);
// the actual HTML using the context above
const compiledHTML = template(context);
// where you want the compiledHTML to show up
document.getElementById("mainHB").innerHTML = compiledHTML;
