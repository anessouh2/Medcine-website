import "../styles/home.css";
import Homepic from "../styles/home.jpg";

export default function Home() {
  return (
    <section className="home">
      <div className="shadow">
           <div className="up">
        <h1>
          Bringing health, compassion, and knowledge <br />
          together — we are <span>HOPE </span>Club.
        </h1>
        
      </div>
      <div className="down">
        <p>
          Our mission is to promote medical awareness, train future <br />
          health leaders, and bring hope to our community by <br />
          caring, educating, and inspiring positive change.
        </p>
        <button className="join-us">
          <a href="https://bit.ly/4nT8E20" target="_blank" rel="noopener noreferrer">
            JOIN HOPE! &#x2794;
          </a>
        </button>
        
      </div>
      
      </div>
    </section>
  );
}
