import "../styles/whatwedo.css";
import First from "../styles/pic2.jpg";
import Second from "../styles/pic1.jpg";
import Third from "../styles/pic3.jpg";
import Activities from "./activities";
 

export default function Whatwedo() {
  const activities = [
    {title : "Medical Talks & Conferences" , description:"We host doctors, researchers, and experts to discuss the latestmedical topics, from mental health to modern treatments andinnovations."        , image : First , delay:0},
    {title :" Workshops & Trainings "      , description:"Learn essential medical skillssuch as first aid, CPR, and emergency response through interactive sessions guided by healthcare professionals." , image :Second , delay:100},
    {title : "Health Awareness ampaigns"   , description:"Our members organize on-campus and community campaigns to promote healthy habits, disease prevention, and mental well-being."                  , image :Third  , delay:200}
  ]
  return (
    <section className="whatwedo">
      <div className="title">
        <div className="tri"></div>
        <h1>WHAT WE DO </h1>
        <div className="tri"></div>
      </div>
      <div className="activities">
         {activities.map((activitie , index) => <Activities key={index} title={activitie.title} description={activitie.description} image={activitie.image} delay={activitie.delay} />
        )}
      </div>
    </section>
  );
}
