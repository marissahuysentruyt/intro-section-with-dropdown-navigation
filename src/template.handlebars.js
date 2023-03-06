import Handlebars from "handlebars/dist/cjs/handlebars";

const context = {
  navigation: [
    "Features",
    "Company",
    "Careers",
    "About"
  ],
  title: "Make Remote work",
  subtitle: "Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.",
  link: "Learn more",
  user_action: [
    "Login",
    "Register"
  ]
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
