import resume from "../../assets/Full-Stack-Resume.docx.pdf";
import "./style.css";

function ResumePage() {
  return (
    <div className="resume-card">
      <h3>Resume</h3>
      <div className="resume-section">
        <h4>Skills</h4>
        <p>
          Version control (Git), HTML, CSS, CSS Frameworks Bootstrap and
          TailWind, JavaScript, responsive web design, debugging tools, testing
          tools(Jest), accessibility, Node.js, Node Package Manager, Inquirer,
          working on a team to develop a website, multi-tasking, working under
          pressure, time management, communication, problem solving, critical
          thinking, creativity, attention to detail, self-Motivation, ability to
          learn new things quickly, willingness to work hard.
        </p>
      </div>
      <div className="resume-section">
        <h4>Education</h4>
        <p>
          July 2023 - January 2023
          <br />
          EdX through University of Connecticut - FullStack Coding
          <br />
          Currently with 499/500 points in the course
          <br />
          August 2013 - December 2016
          <br />
          Texas Tech University, Lubbock, Tx - General Studies
        </p>
      </div>
      <div className="resume-section">
        <h4>Experience</h4>
        <p>
          April 2020 - Current
          <br />
          Yale New Haven Health, CT - Emergency Dept. Tech Assistant and
          Personal Care Assistant
          <br />
          Worked closely with an interdisciplinary team in a high stress, fast
          paced environment that demands solid time management, very effective
          communication, and taking initiative.
          <br />
          Communication skills required were being clear and concise when asking
          for help or responding to other people's requests for help.
          <br />
          Assisting with triage, trauma treatment, critical care, assisting
          medical procedures, performing EKGs, providing CPR, charting in EPIC
        </p>
      </div>
      <div className="resume-section">
        <h4>Projects</h4>
        <ul>
          <li>
            Dynamic ReadME.md Generator -{" "}
            <a href="https://github.com/chigreene/Dynamic-README-Generator">
              https://github.com/chigreene/Dynamic-README-Generator
            </a>
            <p>
              Uses node.js, javascript, HTML, CSS, GIT, TailWind and Inquirer to
              create a tool that dynamically generates README.md files based on
              user input. This tool helps developers to save time and creates
              more consistent README.md files for their projects.
            </p>
          </li>
          <li>
            SynthWave Joke Generator -{" "}
            <a href="https://github.com/chigreene/SynthWave-JokePage">
              https://github.com/chigreene/SynthWave-JokePage
            </a>
            <p>
              This generator uses tailwind, localStorage, javascript, HTML, CSS,
              GIT and multiple APIs to dynamically and statically render jokes
              for the user. It also takes inputs from one API and feeds them
              into another API to create more complex responses. Additionally it
              stores previous jokes using localStorage, so users can easily
              access their favorite Jokes.
            </p>
          </li>
          <li>
            Weather API -{" "}
            <a href="https://github.com/chigreene/Weather-API-WebPage">
              https://github.com/chigreene/Weather-API-WebPage
            </a>
            <p>
              Uses OpenWeather to dynamically create an accurate weekly forecast
              based on user input. Stores past searches for ease of access to
              previous searches.
            </p>
          </li>
        </ul>
      </div>
      <a href={resume} download>
        Download Resume
      </a>
    </div>
  );
}

export default ResumePage;
