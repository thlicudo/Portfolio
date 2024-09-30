import Shomflix from "../assets/images/shomflix.png";
import Wanderluxe from "../assets/images/wanderluxe.png";
import PinkNMe from "../assets/images/pinkNme.png";
import Shomified from "../assets/images/shomified.png";
import LiftUp from "../assets/images/liftup.png";

export const projects = [
  {
    name: "Shomified",
    image: Shomified,
    description:
      "My first practice project. A simple single page image gallery inspired by Azuki website.",
    icons: [
      { src: "../../icons/html.svg", id: 1 },
      { src: "../../icons/css.svg", id: 2 },
      { src: "../../icons/javascript.svg", id: 3 },
    ],
    link: "https://shomified.vercel.app/",
  },
  {
    name: "SHOMFLIX",
    image: Shomflix,
    description:
      " A simple movie database Netflix inspired website using TMDB API.",
    icons: [
      { src: "../../icons/react.svg", id: 1 },
      { src: "../../icons/tailwind.svg", id: 2 },
      { src: "../../icons/javascript.svg", id: 3 },
      { src: "../../icons/html.svg", id: 4 },
      { src: "../../icons/css.svg", id: 5 },
    ],
    link: "https://shomflix.vercel.app/",
  },
  {
    name: "LiftUp",
    image: LiftUp,
    description:
      "A simple Workout Planner that has similar feature as a To-Do List. Implementation of basic CRUD using browser local storage.",
    icons: [
      { src: "../../icons/react.svg", id: 1 },
      { src: "../../icons/tailwind.svg", id: 2 },
      { src: "../../icons/javascript.svg", id: 3 },
      { src: "../../icons/html.svg", id: 4 },
      { src: "../../icons/css.svg", id: 5 },
    ],
    link: "https://liftup-react.vercel.app/",
  },
  {
    name: "Wanderluxe Journeys",
    image: Wanderluxe,
    description:
      "A sideline travel agency website made for a client. Built in Wix.",
    icons: [{ src: "../../icons/wix.svg", id: 1 }],
    link: "https://www.wanderluxejourneystravel.com/",
  },
  {
    name: "Pink N Me",
    image: PinkNMe,
    description:
      "A sideline Fashion and Lifestyle Online Shopping website made for a client. Built in Wix.",
    icons: [{ src: "../../icons/wix.svg", id: 1 }],
    link: "https://www.pinknmeonline.com/",
  },
];
