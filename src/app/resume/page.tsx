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
            href="https://linkedin.com/in/mithleshsharma"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/mithleshsharma"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://mithleshsharma.vercel.app"
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
          {/* EssayChecker.ai */}
          <div>
            <h1 className="font-semibold text-2xl mb-1 opacity-80">
              Web Developer Intern - EssayChecker.ai
            </h1>
            <Paragraph className="text-gray-600 italic">
              April 2024 – Present | Jalandhar, Punjab
            </Paragraph>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
              <li>
                Redesigned Mock Test page into dynamic tables, improving
                functionality for 10,000+ users.
              </li>
              <li>
                Developed full-length interactive Listening and Reading tests
                for IELTS Mock Tests, utilized by 3,000+ users.
              </li>
              <li>
                Implemented performance tracking, real-time audio integration,
                and resolved bugs, enhancing user experience.
              </li>
              <li>
                <strong>Tech Stack:</strong> ReactJS, Material-UI, Git
              </li>
            </ul>
          </div>

          {/* GTB Computer Education */}
          <div>
            <h1 className="font-semibold text-2xl mb-1 opacity-80">
              Web Designing Trainee - GTB Computer Education
            </h1>
            <Paragraph className="text-gray-600 italic">
              Feb 2023 – July 2023 | Jalandhar, Punjab
            </Paragraph>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
              <li>
                Developed a fully functional e-commerce website as part of the
                training curriculum.
              </li>
              <li>
                Acquired practical skills in web development and built
                responsive web applications.
              </li>
              <li>
                <strong>Tech Stack:</strong> HTML, CSS, JS, Bootstrap, jQuery
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
              ReactJS, Tailwind CSS, Bootstrap, Node.js, Express.js
            </Paragraph>
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
            <Paragraph>VSCode, Postman, Render, Netlify</Paragraph>
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
          <li>Solved 300+ DSA problems on LeetCode & GFG.</li>
          <li>Achieved 81+ stars on GitHub for various repositories.</li>
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
              ReactJS | Redux | Tailwind CSS | Swiggy API
            </Paragraph>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
              <li>
                Developed a dynamic web app using live Swiggy APIs, reducing
                initial page load time by 40%.
              </li>
              <li>
                Implemented lazy loading, custom hooks, and achieved a
                Lighthouse score of 93+.
              </li>
              <li>
                <a
                  href="https://github.com/mithleshsharma/reactomeal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 transition-colors"
                >
                  GitHub
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
              ReactJS | Firebase | OpenAI API | TMDB API
            </Paragraph>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
              <li>
                Built a movie database with TMDB API, featuring GPT-powered
                search and multilingual support.
              </li>
              <li>Reduced API call costs to less than $0.0001 per prompt.</li>
              <li>
                <a
                  href="https://github.com/mithleshsharma/movie-mentor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Container>
  );
}
