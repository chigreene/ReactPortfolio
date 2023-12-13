import gitHubMark from "../assets/github-mark.png";
import linkedinIcon from "../assets/linkedin.svg";

const styles = {
  footerBody: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#6c757d",
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    minHeight: "120px",
  },
};

function Footer() {
  return (
    <div style={styles.footerBody}>
      <a
        href="https://github.com/chigreene"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={gitHubMark}
          alt="GitHub Mark"
          style={{ width: "50px", height: "50px", margin: "20px" }}
        />
      </a>
      <a
        href="https://www.linkedin.com/in/christopher-greene-449010263/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={linkedinIcon}
          alt="Linkedin Icon"
          style={{ width: "50px", height: "50px", margin: "20px" }}
        />
      </a>
    </div>
  );
}

export default Footer;
