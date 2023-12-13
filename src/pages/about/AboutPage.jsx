import portraitPic from "../../assets/faceportrait.jpg";
import "./style.css";

function AboutPage() {
  return (
    <div className="about-card">
      <div className="d-flex justify-content-start align-items-center">
        <img className="portrait m-2" src={portraitPic} alt="Portrait Pic" />
        <h1 className="m-2">About Page</h1>
      </div>

      <p>
        After years of working in healthcare I was inspired by a friend to
        explore coding. After a couple months of dipping my toe in the water I
        realized coding was work i enjoyed and was excited to learn more. I take
        joy in learning and solving puzzles which is why I think I find coding
        so interesting. It provides plenty of opportunities to do both of those
        things. Currently I am enrolled in an EdX Boot Camp through UCONN and am
        making progress to learn the fundamentals of HTML and CSS, MySQL,
        MongoDB, Express, Node.js, React and many more. The work is engaging,
        the challenge to learn and utilize new coding skills tests my skills and
        brings me a sense of satisfaction when the new coding abilities are
        combined with my creativity to design novel webpages. The excitement of
        solving the challenges in class keeps me coming back, wanting to learn
        more. I am looking forward to learn JavaScript so I can improve my
        coding abilities and see what is possible with the power of coding.
      </p>
    </div>
  );
}

export default AboutPage;
