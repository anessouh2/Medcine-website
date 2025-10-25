import "../styles/events.css";
import Wd from "../styles/wd.jpg";
import End from "../styles/endyear.jpg";
import Host from "../styles/host.jpg" ;

export default function Events() {
  return (
    <section className="events-section" data-aos-duration='1000'
    data-aos='fade-right'>
      <div className="title">
        <div className="tri"></div>
        <h1> OUR EVENTS</h1>
        <div className="tri"></div>
      </div>
      <div className="flex-events">
        <div className="first-flex">
          <div className="welcom-day" data-aos='fade-left' data-aos-duration='1000' data-aos-delay='50'>
            <div className="descr">
              <div className="blurr">
                <p>
                  Join us for our Welcome Day to discover the club, meet
                  passionate members, and explore upcoming medical projects and
                  a ctivities. A great chance to connect, learn, and start your
                  journey in the medical community! ❤️‍🩹
                </p>
                <h3>Location📍:</h3>
                <p>Djilali Bounaamauniversity.</p>
                <h3>Date📅:</h3>
                <p>Every beginning of the year.</p>
              </div>
            </div>
            <div className="wd-pic">
              <h1>WELCOM DAY!</h1>
            </div>
          </div>
          <div className="end-of-year" data-aos='fade-right' data-aos-duration='1000' data-aos-delay='100'>
            <div className="descrp">
              <div className="blurr">
                <p>
                  Let’s celebrate the end of a challenging and rewarding medical
                  year together! 🎉 . It’s the perfect moment to relax,
                  share memories, and enjoy time with your fellow med students
                  before the next chapter begins!
                </p>
                <h3>Location📍:</h3>
                <p>Djilali Bounaamauniversity.</p>
                <h3>Date📅:</h3>
                <p>Every End of the year.</p>
              </div>
            </div>
            <div className="end">
              <h1>End Of Med Year Party </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="third-activity" data-aos='fade-left' data-aos-duration='1000' data-aos-delay='150'>
        <div className="descrpp">
          <div className="blurr">
            <p>
             Join us in making a difference! Our voluntary visits aim
            to bring support, smiles, and care to patients and 
            healthcare staff while giving students a chance to 
            experience real medical environments and human 
            connections. 🩺💙
            </p>
          </div>
        </div>
        <div className="hos-pic">
          <h1>Voluntary visits
            to hospitals 
            and other 
            facilities .</h1>
        </div>
      </div>
    </section>
  );
}
