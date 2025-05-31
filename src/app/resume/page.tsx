import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Paragraph } from "@/components/Paragraph";

export default function Home() {
  return (
    <Container>
      {/* Header Section */}
      <div className="text-center mb-12">
        <Heading className="font-black text-4xl mb-2">Mithlesh Sharma</Heading>
        <Paragraph className="text-gray-600 text-lg">
          Jalandhar, Punjab | +91-9592004177 | ermithleshsharma01@gmail.com
        </Paragraph>
        <div className="flex justify-center space-x-4 mt-4">
          <a
            href="https://www.linkedin.com/in/ermithleshsharma/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Er-Mithleshsharma"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://mithleshsharma.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 transition-colors"
          >
            Portfolio
          </a>
        </div>
      </div>

      {/* Experience Section */}
      <section className="mb-12">
        <Heading className="font-bold text-3xl mb-6 border-b-2 border-gray-200 pb-2">
          Experience
        </Heading>
        <div className="space-y-8">
          {/* Atobic Technologies */}
          <div>
            <h1 className="font-semibold text-2xl mb-1 opacity-80">
              Associate Software Product Engineer - Atobic Technologies Private Limited
            </h1>
            <Paragraph className="text-gray-600 italic">
              March 2025–Present | Hyderabad, Telangana
            </Paragraph>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
              <li>
                Built high-performance background verification platform using React.js and shadcn/ui with optimized server-side processing for handling large volume of data.
              </li>
              <li>
                Enhanced user experience through intuitive dashboards and responsive forms, decreasing onboarding time by 20% and improving client satisfaction.
              </li>
              <li>
                Developed WhatsApp flows based citizen services prototype for Uttarakhand Government using Node.js, with automated ticket creation on Trello for issue tracking.
              </li>
              <li>
                <strong>Tech Stack:</strong> React.js, shadcn/ui, Node.js, Express, MongoDB, Git, GitHub, WhatsApp Business API, Webhooks
              </li>
            </ul>
          </div>

          {/* EssayChecker.ai */}
          <div>
            <h1 className="font-semibold text-2xl mb-1 opacity-80">
              Web Developer Intern - EssayChecker.ai
            </h1>
            <Paragraph className="text-gray-600 italic">
              April 2024 – February 2025 | Jalandhar, Punjab
            </Paragraph>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
              <li>
                Redesigned Mock Test page into dynamic tables, improving functionality and user experience for 10,000+ users.
              </li>
              <li>
                Developed full-length interactive Listening and Reading tests for IELTS Mock Tests, utilized by 3,000+ users.
              </li>
              <li>
                Implemented performance tracking, real-time audio integration for Listening tests, and resolved bugs, enhancing user experience and system stability.
              </li>
              <li>
                <strong>Tech Stack:</strong> ReactJS, Material-UI, Git
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="mb-12">
        <Heading className="font-bold text-3xl mb-6 border-b-2 border-gray-200 pb-2">
          Technical Skills
        </Heading>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-700">
          {/* Programming Languages */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <h1 className="font-semibold text-xl mb-2 opacity-80">
              Programming Languages
            </h1>
            <Paragraph>C, C++, JavaScript, Python (NumPy, Pandas)</Paragraph>
          </div>

          {/* Frameworks & Libraries */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <h1 className="font-semibold text-xl mb-2 opacity-80">
              Frameworks & Libraries
            </h1>
            <Paragraph>
              HTML, CSS, ReactJS, Tailwind CSS, Bootstrap
            </Paragraph>
          </div>

          {/* Familiar With */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <h1 className="font-semibold text-xl mb-2 opacity-80">
              Familiar With
            </h1>
            <Paragraph>Node.js, Express.js, MongoDB</Paragraph>
          </div>

          {/* Version Control */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <h1 className="font-semibold text-xl mb-2 opacity-80">
              Version Control
            </h1>
            <Paragraph>Git, GitHub</Paragraph>
          </div>

          {/* Other Tools */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <h1 className="font-semibold text-xl mb-2 opacity-80">
              Other Tools
            </h1>
            <Paragraph>VSCode, Replit, Postman, Render, Netlify</Paragraph>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="mb-12">
        <Heading className="font-bold text-3xl mb-6 border-b-2 border-gray-200 pb-2">
          Achievements
        </Heading>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Institute Rank-1 at GeeksForGeeks Coding Platform.</li>
          <li>Scored 2nd position in Logic Testing Competition at Aimetc.</li>
          <li>5-star coder at HackerRank.</li>
          <li>Solved over 300+ DSA Problems at LeetCode & GFG.</li>
          <li>Achieved 81+ stars on GitHub for various repositories.</li>
        </ul>
      </section>

      {/* Certifications Section */}
      <section className="mb-12">
        <Heading className="font-bold text-3xl mb-6 border-b-2 border-gray-200 pb-2">
          Certifications
        </Heading>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            <span className="font-semibold">React JS- Complete Guide for Frontend</span> | 
            <a href="#" className="text-blue-500 hover:text-blue-700 transition-colors ml-1">
              Link
            </a>
          </li>
          <li>
            <span className="font-semibold">Version Control with Git</span> | 
            <a href="#" className="text-blue-500 hover:text-blue-700 transition-colors ml-1">
              Link
            </a>
          </li>
          <li>
            <span className="font-semibold">DSA Foundation in C++ By Coding Ninjas</span> | 
            <a href="#" className="text-blue-500 hover:text-blue-700 transition-colors ml-1">
              Link
            </a>
          </li>
          <li>
            <span className="font-semibold">Python Programming - Udemy</span> | 
            <a href="#" className="text-blue-500 hover:text-blue-700 transition-colors ml-1">
              Link
            </a>
          </li>
        </ul>
      </section>

      {/* Education Section */}
      <section className="mb-12">
        <Heading className="font-bold text-3xl mb-6 border-b-2 border-gray-200 pb-2">
          Education
        </Heading>
        <div className="space-y-6">
          {/* B.Tech */}
          <div className="relative pl-8">
            <div className="absolute left-0 top-2 w-4 h-4 bg-blue-500 rounded-full"></div>
            <div className="absolute left-[7px] top-2 h-full w-0.5 bg-gray-200"></div>
            <h1 className="font-semibold text-xl mb-1 opacity-80">
              B.Tech (Computer Science) - 7.8 CGPA
            </h1>
            <Paragraph className="text-gray-600 italic">
              Apeejay Institute of Management Engineering & Technical Campus | 2021–2025
            </Paragraph>
          </div>

          {/* Higher Secondary */}
          <div className="relative pl-8">
            <div className="absolute left-0 top-2 w-4 h-4 bg-blue-500 rounded-full"></div>
            <div className="absolute left-[7px] top-2 h-full w-0.5 bg-gray-200"></div>
            <h1 className="font-semibold text-xl mb-1 opacity-80">
              Higher Secondary - La Blossoms School
            </h1>
            <Paragraph className="text-gray-600 italic">2021</Paragraph>
          </div>

          {/* Secondary */}
          <div className="relative pl-8">
            <div className="absolute left-0 top-2 w-4 h-4 bg-blue-500 rounded-full"></div>
            <h1 className="font-semibold text-xl mb-1 opacity-80">
              Secondary - St. Joseph’s Boys School
            </h1>
            <Paragraph className="text-gray-600 italic">2019</Paragraph>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section>
        <Heading className="font-bold text-3xl mb-6 border-b-2 border-gray-200 pb-2">
          Projects
        </Heading>
        <div className="space-y-8">
          {/* ReactOmeal */}
          <div>
            <h1 className="font-semibold text-2xl mb-1 opacity-80">
              ReactOmeal
            </h1>
            <Paragraph className="text-gray-600 italic">
              ReactJS | Redux | React Router Dom | Tailwind CSS | Swiggy API | Shimmer UI
            </Paragraph>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
              <li>
                Developed a dynamic web application utilizing live Swiggy APIs.
              </li>
              <li>
                Implemented lazy loading resulting in a 40% reduction in initial page load time.
              </li>
              <li>
                Implemented custom hooks and employed Code Splitting techniques, resulting in a Lighthouse score of 93+ for the website.
              </li>
              <li>
                Enhanced responsiveness of web page by 40% through efficient state management and integrated shimmer UI for smoother loading.
              </li>
              <li>
                <a
                  href="https://github.com/mithleshsharma/reactomeal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 transition-colors"
                >
                  GitHub Link
                </a>
              </li>
            </ul>
          </div>

          {/* Movie Mentor */}
          <div>
            <h1 className="font-semibold text-2xl mb-1 opacity-80">
              Movie Mentor
            </h1>
            <Paragraph className="text-gray-600 italic">
              ReactJS | Firebase | OpenAI API | Tailwind CSS | TMDB API
            </Paragraph>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
              <li>
                The Movie Mentor project, built with React and TailwindCSS, offers a vast movie database from TMDB, enabling users to explore the latest and trending films and watch trailers.
              </li>
              <li>
                Features: Robust authentication, seamless redirection, multilingual support, GPT powered search.
              </li>
              <li>
                Improved prompt efficiency, reducing the cost of each API call to less than $0.0001.
              </li>
              <li>
                <a
                  href="https://github.com/mithleshsharma/movie-mentor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 transition-colors"
                >
                  GitHub Link
                </a>
              </li>
            </ul>
          </div>

          {/* SparkUp */}
          <div>
            <h1 className="font-semibold text-2xl mb-1 opacity-80">
              SparkUp
            </h1>
            <Paragraph className="text-gray-600 italic">
              React.js | Node.js | MongoDB | AWS | Socket.io | Razorpay | Cloudinary | JWT
            </Paragraph>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
              <li>
                Built a full-stack networking platform with real-time chat, friend requests, and premium subscriptions.
              </li>
              <li>
                Integrated JWT auth, Razorpay payments, and real-time features via Socket.io for seamless UX.
              </li>
              <li>
                Deployed on AWS EC2 with PM2 and Nginx for scalability; used cron jobs for asset and task automation.
              </li>
              <li>
                <a
                  href="https://sparkup.space/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 transition-colors"
                >
                Live Link
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Container>
  );
}