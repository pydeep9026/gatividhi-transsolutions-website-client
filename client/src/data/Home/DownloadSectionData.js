import chrome from "../../assets/images/logo-chrome.svg";
import firefox from "../../assets/images/logo-firefox.svg";
import opera from "../../assets/images/logo-opera.svg";

export const downloadData = {
  header: "Download the extension",
  subheader:
    "We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize.",
};

export const extensionData = [
  {
    id: 1,
    image: chrome,
    imageAlt: "chrome logo",
    title: "Add to Chrome",
    description: "Minimum version 62",
    link: "/",
    buttonText: "Add & Install Extension",
  },
  {
    id: 2,
    image: firefox,
    imageAlt: "firefox logo",
    title: "Add to Firefox",
    description: "Minimum version 55",
    link: "/",
    buttonText: "Add & Install Extension",
  },
  {
    id: 3,
    image: opera,
    imageAlt: "opera logo",
    title: "Add to Opera",
    description: "Minimum version 646",
    link: "/",
    buttonText: "Add & Install Extension",
  },
];
