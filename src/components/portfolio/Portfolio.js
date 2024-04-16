import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/gmail.jpg";
import IMG2 from "../../assets/insta.jfif";
import IMG3 from "../../assets/linked.jfif";
import IMG4 from "../../assets/slack.jpg";
import IMG5 from "../../assets/whatsapp.jpg";
import IMG6 from "../../assets/netflix.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "GMAIL-CLONE",
    github: "https://github.com/Razakhan15/gmail-app",
    demo: "https://clone-d8b41.web.app",
  },
  {
    id: 2,
    image: IMG2,
    title: "INSTA-CLONE",
    github: "https://github.com/Razakhan15/instagram-app",
    demo: "https://instagram-clone-68d7c.web.app",
  },
  {
    id: 3,
    image: IMG3,
    title: "LinkedIn CLONE",
    github: "https://github.com/Razakhan15/linkedIn-app",
    demo: "https://linkedin-clone-1f9f1.web.app",
  },
  {
    id: 4,
    image: IMG4,
    title: "SLACK-CLONE",
    github: "https://github.com/Razakhan15/slack-app",
    demo: "https://slack-clone-c435b.web.app",
  },
  {
    id: 5,
    image: IMG5,
    title: "WHATSAPP-CLONE",
    github: "https://github.com/Razakhan15/whatsapp",
    demo: "https://whatsapp-clone-906be.web.app",
  },
  {
    id: 6,
    image: IMG6,
    title: "NETFLIX CLONE",
    github: "https://github.com/Razakhan15/netflix-app",
    demo: "https://netflix-clone-7e518.web.app",
  },
];

function Portfolio() {
  return (
    <section>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
