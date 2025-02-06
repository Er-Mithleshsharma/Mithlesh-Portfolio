import EC from "public/images/ec-image.png";
import EC2 from "public/images/ec-2.png";
import Sparkup from "public/images/sparkup1.png";
import sparkup2 from "public/images/sparkup2.png";
import moviementor from "public/images/movie-mentor.png";
import moviementor2  from "public/images/movie-mentor2.png";


export const products = [
  {
    href: "https://www.essaychecker.ai/",
    title: "EssayChecker.ai",
    description:
      "A one stop solution for all IELTS based exams",
    thumbnail: EC,
    images: [EC, EC2],
    stack: ["ReactJs", "Tailwindcss" , "Material UI"],
    slug: "EssayChecker",
    content: (
      <div>
        <p>
        Get your target score with our AI-powered toolkit of apps and mock tests for IELTS and PTE preparation. Instantly check your IELTS Writing and PTE Writing in just a few seconds.
        Trusted by thousands of users and IELTS institutes.{" "}
        </p>
        <p>
        Our AI Based various apps help you in improving your different English skills like writing, listening, speaking to get the score you want for different English Proficiency Exams.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://sparkup.space/",
    title: "SparkUp",
    description:
      "SparkUp: The professional network where passion meets purpose.",
    thumbnail: Sparkup,
    images: [Sparkup, sparkup2],
    stack: ["ReactJs", "Nodejs", "AWS","MongoDB","GIT",],
    slug: "SparkUp",
    content: (
      <div>
        <p>
        SparkUp is a dynamic web app designed for professionals and developers to connect meaningfully. Users can browse through profile cards, send friend requests, and expand their network with like-minded individuals. Once a request is accepted, both users can start chatting, fostering collaboration, mentorship, or even potential partnerships.{" "}
        </p>
        <p>
        The platform ensures seamless interaction with an intuitive chat system, allowing users to share ideas and build valuable relationships. With a user-friendly interface and smart matching, SparkUp makes networking effortless, helping professionals spark connections that matter.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://movie-mentor.netlify.app/",
    title: "MovieMentor",
    description:
      "Never write from scratch again with Moonbeam, your AI first writing tool",
    thumbnail: moviementor,
    images: [moviementor, moviementor2],
    stack: ["ReactJs", "Tailwindcss", "Firebase"],
    slug: "MovieMentor",
    content: (
      <div>
        <p>
        Movie Mentor is a feature-rich React web application that combines movie streaming with AI-powered recommendations. Built using Create React App and styled with TailwindCSS, it offers a seamless user experience with authentication via Firebase, form validation, and user profile management. The app supports login and signup functionality, utilizing Redux for state management and ensuring smooth user interactions. It also integrates TMDB APIs to fetch movie data, allowing users to browse now-playing movies, view trailers, and explore categorized movie lists. Additionally, the application ensures secure authentication and redirects users accordingly if they are not logged in.{" "}
        </p>
        <p>
        A standout feature of Movie Mentor is its AI-powered movie search, leveraging OpenAI’s API to suggest personalized movie recommendations. Users can enter queries, and the app fetches relevant suggestions using TMDB’s API, enhancing content discovery. The project is optimized with memoization, environment variables for API security, and a responsive UI. With embedded YouTube trailers, a structured movie browsing experience, and support for multiple languages, Movie Mentor delivers an intuitive and engaging movie discovery platform.
        </p>{" "}
      </div>
    ),
  },
];
