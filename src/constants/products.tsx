import EC from "public/images/ec-image.png";
import EC2 from "public/images/ec-2.png";
import Sparkup from "public/images/sparkup.png";
import profile from "public/images/profile.png";
import request from "public/images/request.png";
import connection from "public/images/connection.png";
import premuim from "public/images/premium.png";
import moviementor from "public/images/movie-mentor.png";
import moviementor2  from "public/images/movie-mentor2.png";
import reactomeal from "public/images/reactomeal.png";
import menu from "public/images/menu.png";
import cart  from "public/images/cart.png";
import ss1 from "public/images/socketsphere.png";
import ss2  from "public/images/socketsphere2.png";
import portfolio from "public/images/portfolio.png";
import portfolio1  from "public/images/experience.png";
export const products = [
  {
    href: "https://www.essaychecker.ai/",
    title: "EssayChecker.ai",
    description:
      "A one-stop solution for all IELTS-based exams",
    thumbnail: EC,
    images: [EC, EC2],
    stack: ["ReactJs", "Next.js", "Tailwind CSS", "Material UI", "Redux", "Swagger API", "Razorpay"],
    slug: "EssayChecker",
    content: (
      <div>
        <p>
          Get your target score with our AI-powered toolkit of apps and mock tests for IELTS and PTE preparation. Instantly check your IELTS Writing and PTE Writing in just a few seconds.
          Trusted by thousands of users and IELTS institutes.
        </p>
        <p>
          Our AI-based applications help improve different English skills like writing, listening, and speaking, ensuring students achieve their desired scores in English proficiency exams.
        </p>
        
        <h3>My Contributions</h3>
        
        <h4>🚀 Mock Test Platform Enhancements</h4>
        <ul>
          <li>Redesigned the Mock Test page into dynamic tables, improving functionality and user experience for 10,000+ users.</li>
          <li>Developed full-length interactive Listening and Reading tests for IELTS Mock Tests, utilized by 3,000+ users.</li>
          <li>Implemented real-time audio integration for Listening tests, enhancing test accuracy and engagement.</li>
          <li>Optimized performance tracking and bug fixes, significantly improving system stability and reducing errors.</li>
        </ul>

        <h4>🛠️ AI-Based Essay Assistant</h4>
        <ul>
          <li>Developed an AI-driven essay improvement tool that provides step-by-step feedback, enhancing writing quality.</li>
          <li>Implemented modular feedback—improving the introduction first, then cohesion, grammar, lexical resources, and overall structure.</li>
          <li>Enhanced user engagement with real-time suggestions and progressive learning strategies.</li>
        </ul>

        <h4>💰 Payments & API Support</h4>
        <ul>
          <li>Integrated Razorpay and structured the pricing model for seamless user subscriptions and transactions.</li>
          <li>Designed and developed the B2B landing page to attract business users and streamline onboarding.</li>
          <li>Created an API support page for B2B clients, displaying real-time usage insights and analytics.</li>
          <li>Built a multi-account API management system, allowing managers to oversee multiple businesses using Redux and local storage.</li>
        </ul>

        <h4>🎨 UI/UX & Frontend Optimizations</h4>
        <ul>
          <li>Redesigned the homepage with modern UI using Preline CSS for a sleek and engaging user experience.</li>
          <li>Handled multiple codebases—optimized <b>essaychecker.ai</b> for B2C users and <b>console.essaychecker.ai</b> for B2B clients.</li>
          <li>Enhanced responsiveness and accessibility, ensuring a smooth experience across all devices.</li>
        </ul>

        <h4>📚 Teacher App (Next.js Project) & Secure Testing Environment</h4>
        <ul>
          <li>Currently leading the development of a Teacher App built with <b>Next.js</b>, where educators can share mock tests with students via email.</li>
          <li>Built a secure test environment where students can only attempt the test through a unique session-tracked link.</li>
          <li>Implemented session storage and activity tracking to monitor every test action—when a user starts, submits, or exits the test.</li>
          <li>Designed a strict submission flow where students cannot return to the test once submitted, ensuring exam integrity.</li>
        </ul>

        <h3>⚡ Key Technical Skills & Optimizations</h3>
        <ul>
          <li>Optimized API calls and improved response times by reducing redundant requests.</li>
          <li>Enhanced state management using Redux for scalable and maintainable applications.</li>
          <li>Implemented modular React and Next.js components, making the codebase cleaner and easier to maintain.</li>
          <li>Debugged and resolved critical performance issues, improving the overall user experience.</li>
        </ul>

        <p>
          Throughout my time at EssayChecker.ai, I have worked on complex problems, optimized performance, and contributed to creating a seamless experience for thousands of users.
        </p>
      </div>
    ),
}
,

{
  href: "https://sparkup.space/",
  title: "SparkUp",
  description:
    "SparkUp: The professional network where passion meets purpose.",
  thumbnail: Sparkup,
  images: [Sparkup, profile,request,connection,premuim],
  stack: [
    "React.js", "Node.js", "Express.js", "MongoDB", "AWS", "Socket.io", "Razorpay", "Cloudinary", "PM2", "Nginx", "JWT", 
    "Postman", "Cloudflare", "Ngrok"
  ],
  slug: "SparkUp",
  content: (
    <div>
      <p>
        SparkUp is a feature-rich professional networking platform designed for seamless and meaningful connections between developers, professionals, and industry experts. It enables users to browse profiles, send friend requests, and engage in real-time conversations, fostering collaborations, mentorship, and partnerships.
      </p>

      <h3>🔧 Tech Stack & Infrastructure</h3>
      <ul>
        <li><strong>Frontend:</strong> Built using <strong>React.js</strong> with Material-UI (MUI) for an elegant and responsive design.</li>
        <li><strong>Backend:</strong> Powered by <strong>Node.js</strong> and <strong>Express.js</strong>, ensuring high performance and scalability.</li>
        <li><strong>Database:</strong> Uses <strong>MongoDB</strong> with indexing for optimized query performance.</li>
        <li><strong>Authentication:</strong> Secure <strong>JWT-based authentication</strong> with token expiration and refresh mechanisms.</li>
        <li><strong>Hosting & Deployment:</strong> Hosted on an <strong>AWS EC2 instance</strong>, optimized with <strong>PM2</strong> for process management.</li>
        <li><strong>API Security:</strong> Implemented <strong>schema-level and API-level validations</strong> using Validator.js and middleware security.</li>
        <li><strong>Cloud Storage:</strong> User profile photos are uploaded to <strong>Cloudinary</strong>, storing links in the database.</li>
        <li><strong>Domain & SSL:</strong> Domain purchased from <strong>Hostinger</strong> and secured with <strong>Cloudflare SSL</strong>.</li>
        <li><strong>Reverse Proxy & Load Balancing:</strong> Configured with <strong>Nginx</strong> for optimized request handling.</li>
      </ul>

      <h3>🚀 Key Features & How They Are Built</h3>

      <ul>
        <li><strong>🔍 Smart Networking:</strong> 
          <p>Users can search and filter profiles based on skills, interests, and location. Implemented using MongoDB queries with indexing to ensure fast search results.</p>
        </li>

        <li><strong>🤝 Friend Requests & Connections:</strong> 
          <p>Users can send and accept friend requests. The status of each connection is managed in the database, and once accepted, chat functionality is unlocked.</p>
        </li>

        <li><strong>💬 Real-Time Chat:</strong> 
          <p>Powered by <strong>Socket.io</strong>, the chat system updates messages instantly without reloading the page. It also tracks online status dynamically.</p>
        </li>

        <li><strong>📌 Profile Customization:</strong> 
          <p>Users can update profile details and upload profile pictures, which are stored in <strong>Cloudinary</strong> for optimized image management.</p>
        </li>

        <li><strong>⚡ Secure APIs:</strong> 
          <p>All endpoints are protected using <strong>JWT-based authentication</strong>. Middleware validation ensures only authorized users can access data.</p>
        </li>

        <li><strong>📅 Scheduled Cron Jobs:</strong> 
          <p>Automates tasks like sending email notifications and cleaning up old data. Managed using <strong>Node.js cron jobs</strong> for scheduled execution.</p>
        </li>

        <li><strong>📨 Email Services:</strong> 
          <p>Initially integrated with <strong>Amazon SES</strong>, later switched to <strong>Bravo</strong> for better deliverability and cost efficiency.</p>
        </li>

        <li><strong>💳 Payment Integration:</strong> 
          <p>Users can purchase premium plans via <strong>Razorpay</strong>. Implemented secure webhooks to verify transactions and update user status.</p>
        </li>

        <li><strong>📜 Pagination for Feed:</strong> 
          <p>Implemented server-side pagination to optimize feed loading and ensure a smooth user experience, even with large datasets.</p>
        </li>

        <li><strong>🛒 Order Management:</strong> 
          <p>Securely stores payment and order details in MongoDB with validation to prevent duplicate or fraudulent transactions.</p>
        </li>

        <li><strong>🌎 Global Reach:</strong> 
          <p>Deployed on AWS, optimized with <strong>Nginx</strong> and <strong>PM2</strong> to handle multiple requests efficiently.</p>
        </li>

        <li><strong>📡 Webhook Testing with Ngrok:</strong> 
          <p>Used <strong>Ngrok</strong> for local webhook testing, ensuring smooth payment and API integrations before deploying live.</p>
        </li>
      </ul>

      <p>
        SparkUp is built with a focus on <strong>scalability, security, and performance</strong>. From real-time communication to secure payments, every aspect is carefully designed to provide a professional networking experience that helps users build meaningful connections.
      </p>
    </div>
  ),
}
,
{
  href: "https://movie-mentor.netlify.app/",
  title: "MovieMentor",
  description:
    "A feature-rich React web application combining movie streaming with AI-powered recommendations, built using React, TailwindCSS, Firebase, and TMDB APIs.",
  thumbnail: moviementor,
  images: [moviementor, moviementor2],
  stack: ["ReactJs", "TailwindCSS", "Firebase", "TMDB API", "OpenAI API"],
  slug: "MovieMentor",
  content: (
    <div>
      <p>
        🚀 <strong>MovieMentor</strong> is a feature-rich React web application that combines movie streaming with AI-powered recommendations. Built using <strong>Create React App</strong> and styled with <strong>TailwindCSS</strong>, it offers a seamless user experience with authentication via <strong>Firebase</strong>, form validation, and user profile management. The app supports login and signup functionality, utilizing <strong>Redux</strong> for state management and ensuring smooth user interactions.
      </p>
      <p>
        🎬 The app integrates <strong>TMDB APIs</strong> to fetch movie data, allowing users to browse now-playing movies, view trailers, and explore categorized movie lists. It also ensures secure authentication and redirects users accordingly if they are not logged in. A standout feature is its <strong>AI-powered movie search</strong>, leveraging <strong>OpenAI’s API</strong> to suggest personalized movie recommendations. Users can enter queries, and the app fetches relevant suggestions using TMDB’s API, enhancing content discovery.
      </p>
      <p>
        ⚡ To optimize performance, the app implements <strong>lazy loading</strong>, <strong>code splitting</strong>, and <strong>memoization</strong>, reducing the cost of each API call to less than <strong>$0.0001</strong>. Custom hooks like <strong>usePopularMovies</strong> and <strong>useNowPlayingMovies</strong> were created to fetch and manage movie data efficiently. The project also uses <strong>environment variables</strong> for API security and a responsive UI design.
      </p>
      <p>
        🔑 Key features include:
        <ul>
          <li>🔐 <strong>Login/Sign Up</strong>: Secure authentication with Firebase.</li>
          <li>🎥 <strong>Browse Page</strong>: After authentication, users can explore movies with a trailer in the background, title, description, and movie suggestions.</li>
          <li>🔍 <strong>GPT Search</strong>: AI-powered movie search with personalized recommendations.</li>
          <li>🌐 <strong>Multi-language Support</strong>: Enhanced accessibility for global users.</li>
          <li>📱 <strong>Responsive Design</strong>: Seamless experience across devices.</li>
        </ul>
      </p>
      <p>
        🛠️ Technical highlights:
        <ul>
          <li>⚙️ <strong>Redux Store</strong>: Centralized state management with <strong>userSlice</strong> and <strong>movieSlice</strong>.</li>
          <li>📹 <strong>Trailer Integration</strong>: Embedded YouTube videos with autoplay and mute.</li>
          <li>✨ <strong>Shimmer UI</strong>: Smooth loading transitions for a better user experience.</li>
          <li>🔧 <strong>Bug Fixes</strong>: Resolved issues like profile updates and redirection logic.</li>
        </ul>
      </p>
      <p>
        By combining modern web technologies and efficient optimization techniques, <strong>MovieMentor</strong> delivers an intuitive and engaging movie discovery platform. 🍿
      </p>
    </div>
  ),
},
  {
    href: "https://reactomealv2.netlify.app/",
    title: "ReactoMeal",
    description:
      "A dynamic food delivery app built using ReactJS, Redux, and Swiggy APIs, offering seamless restaurant browsing and ordering experiences.",
    thumbnail: reactomeal,
    images: [reactomeal,menu,cart],
    stack: ["ReactJs", "Redux", "Tailwind CSS", "Swiggy API", "React Router Dom"],
    slug: "FoodDeliveryApp",
    content: (
      <div>
        <p>
          🚀 The <strong>Food Delivery App</strong> is a feature-rich web application built using <strong>ReactJS</strong> and <strong>Redux</strong> for state management. It leverages live <strong>Swiggy APIs</strong> to fetch and display restaurant data, including menus, ratings, and delivery details. The app provides users with a seamless browsing experience, allowing them to explore restaurants, view menus, and place orders effortlessly. <strong>Tailwind CSS</strong> ensures a modern and responsive design, while <strong>React Router Dom</strong> enables smooth navigation across different pages.
        </p>
        <p>
          ⚡ To optimize performance, the app implements <strong>lazy loading</strong> and <strong>code splitting</strong>, reducing the initial page load time by <strong>40 persent</strong>. This ensures that only the necessary components are loaded when needed, improving the overall user experience. Additionally, I used <strong>custom hooks</strong> like <strong>useOnline</strong> to check the user&apos;s internet connectivity and display appropriate UI feedback, enhancing reliability.
        </p>
        <p>
          🛠️ The app also integrates <strong>Shimmer UI</strong> to enhance the loading experience, making it feel faster and more responsive. By employing <strong>memoization</strong> and <strong>efficient state management</strong>, the app&apos;s responsiveness was improved by <strong>40 persent</strong>, ensuring smooth interactions even on slower networks. These optimizations, combined with dynamic data fetching, resulted in a <strong>Lighthouse score of 93+</strong>.
        </p>
        <p>
          🔑 Key features include:
          <ul>
            <li>🔍 Restaurant search and filtering</li>
            <li>🍔 Dynamic menu rendering</li>
            <li>📱 Responsive design for seamless cross-device compatibility</li>
            <li>🌐 <strong>useOnline</strong> custom hook for real-time connectivity checks</li>
            <li>✨ Shimmer UI for smoother loading transitions</li>
          </ul>
        </p>
        <p>
          By combining modern web technologies and efficient optimization techniques, the <strong>Food Delivery App</strong> delivers a fast, reliable, and engaging platform for users to order food online. 🍕
        </p>
      </div>
    ),
  },
  {
    href: "https://socketsphere.onrender.com/",
    title: "SocketSphere",
    description:
      "A real-time chat application built using Socket.io, Express, and hosted on Render. Users can join multiple rooms and chat with others in real-time.",
    thumbnail: ss1,
    images: [ss1, ss2],
    stack: ["Socket.io", "Express", "Node.js", "Render"],
    slug: "SocketSphere",
    content: (
      <div>
        <p>
          🚀 <strong>SocketSphere</strong> is a real-time chat application that allows users to join multiple rooms and communicate with others in real-time. Built using <strong>Socket.io</strong> and <strong>Express</strong>, the app provides a seamless and interactive chatting experience. It is hosted on <strong>Render</strong>, ensuring reliable performance and scalability.
        </p>
        <p>
          💬 The app features <strong>5 unique rooms</strong>, each acting as a separate chat space. Users can join any room and start chatting with others in real-time. The use of <strong>Socket.io</strong> enables instant message delivery, making conversations feel lively and engaging. The backend, powered by <strong>Express</strong>, handles room management and user connections efficiently.
        </p>
        <p>
          ⚡ Key features include:
          <ul>
            <li>🚪 <strong>Multiple Rooms</strong>: Users can join and switch between 5 different chat rooms.</li>
            <li>👥 <strong>Real-Time Chat</strong>: Instant message delivery using Socket.io.</li>
            <li>🌐 <strong>Hosted on Render</strong>: Reliable and scalable deployment.</li>
            <li>📱 <strong>Simple UI</strong>: Easy-to-use interface for seamless chatting.</li>
          </ul>
        </p>
        <p>
          🛠️ Technical highlights:
          <ul>
            <li>🔌 <strong>Socket.io</strong>: Enables real-time, bidirectional communication between clients and the server.</li>
            <li>⚙️ <strong>Express</strong>: Handles backend logic, including room management and user connections.</li>
            <li>🚀 <strong>Render Hosting</strong>: Ensures the app is always available and performs well under load.</li>
          </ul>
        </p>
        <p>
          By combining modern web technologies, <strong>SocketSphere</strong> delivers a fast, reliable, and engaging platform for real-time communication. 💻
        </p>
      </div>
    ),
  },
  {
    href: "https://mithleshsharma.netlify.app/",
    title: "Mithlesh Sharma - Portfolio",
    description:
      "A personal portfolio website built with React and TailwindCSS, showcasing my skills, experience, and projects in a clean and responsive design.",
    thumbnail: portfolio,
    images: [portfolio, portfolio1],
    stack: ["React", "TailwindCSS", "Netlify"],
    slug: "Portfolio",
    content: (
      <div>
        <p>
          🚀 <strong>Mithlesh Sharma - Portfolio</strong> is a personal website built using <strong>React</strong> and styled with <strong>TailwindCSS</strong>. It showcases my skills, experience, and projects in a clean, modern, and responsive design. The website is hosted on <strong>Netlify</strong>, ensuring fast load times and seamless performance.
        </p>
        <p>
          🎯 The portfolio is divided into <strong>4 main sections</strong>:
          <ul>
            <li>🌟 <strong>Hero Section</strong>: A visually appealing introduction with my image and a brief about me.</li>
            <li>📄 <strong>About Section</strong>: A detailed description of my skills, background, and expertise.</li>
            <li>💼 <strong>Experience Section</strong>: Highlights my professional journey, including roles, responsibilities, and achievements.</li>
            <li>📧 <strong>Contact Me Form</strong>: A simple and functional form for visitors to get in touch with me.</li>
          </ul>
        </p>
        <p>
          ⚡ Key features include:
          <ul>
            <li>📱 <strong>Responsive Design</strong>: The website is fully responsive, ensuring a seamless experience across devices.</li>
            <li>✨ <strong>Modern UI</strong>: Clean and intuitive design powered by TailwindCSS.</li>
            <li>🚀 <strong>Fast Performance</strong>: Optimized for speed and hosted on Netlify for reliable delivery.</li>
          </ul>
        </p>
        <p>
          🛠️ Technical highlights:
          <ul>
            <li>⚙️ <strong>React</strong>: Used to build a dynamic and interactive user interface.</li>
            <li>🎨 <strong>TailwindCSS</strong>: Ensured a modern and consistent design with utility-first CSS.</li>
            <li>🌐 <strong>Netlify Hosting</strong>: Provided fast and reliable deployment with continuous integration.</li>
          </ul>
        </p>
        <p>
          By combining modern web technologies and a user-centric design, this portfolio effectively showcases my work and skills to potential collaborators and employers. 💻
        </p>
      </div>
    ),
  }
];
