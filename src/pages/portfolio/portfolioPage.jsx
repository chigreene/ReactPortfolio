import { useEffect } from "react";
import profileData from "../../profileData";
import "./style.css";

function PortfolioPage() {
  useEffect(() => {
    document.title = "Chris Greene - Portfolio";

    return () => {
      document.title = "Chris Greene";
    };
  });

  return (
    <>
      <div className="container">
        <h2>Portfolio Page</h2>
        <ul className="list-group">
          {profileData.map((data) => (
            <li className="list-group-item" key={data.id}>
              <div
                className="card"
                style={{
                  backgroundImage: `url(${data.backgroundImg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  color: "white",
                }}
              >
                <div className="card-body">
                  <h5 className="card-title">{data.title}</h5>
                  <a
                    href={data.gitHubLink}
                    className="card-link"
                    target="_blank"
                    // noopener prevents the new window from having access to the window.opener property and the DOM of the opener window
                    // noreferrer prevents the new page from being able to access information from the original page
                    rel="noopener noreferrer"
                    style={{ color: "#f8f8f8" }}
                  >
                    GitHub
                  </a>
                  <a
                    href={data.deployedLink}
                    className="card-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#f8f8f8" }}
                  >
                    Deployed App
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default PortfolioPage;
