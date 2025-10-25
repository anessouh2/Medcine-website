import "../styles/about.css";

export default function About() {
  return (
    <section className="about-us-section">
      <div className="about-us" data-aos ='fade-left' data-aos-duration='1000'>
        <div className="line"></div>
        <h1 >ABOUT US</h1>
        <div className="line"></div>
      </div>
      <div className="description">
        <p>
          <span className="big-span"  data-aos ='fade-right' data-aos-duration='1000'>
            We are the first scientific club founded by medical  
             <span className="vert" >
               students at the Khemis Miliana Annex – Aïn Defla
            </span>
          </span > <br/>
          <span className="big-span" data-aos ='fade-right' data-aos-duration='1000' data-aos-delay='200'>
            HOPE is a scientific family rich in talents and diverse
            <span className="vert">
             
              activities. It strives to transform the atmosphere of
            </span>
            <br />
            constant studying and pressure into one filled with
            <span className="vert">joy and enthusiasm .</span>
          </span> <br/>
          <span  className="big-span" data-aos ='fade-right' data-aos-duration='1000' data-aos-delay='300'>
            Our goals include discovering and developing students’
            <span className="vert">
              talents, as well as organizing various competitions.
            </span>
            <br />
            In addition, we plan humanitarian caravans to help those
            <span className="vert">
              in need, and visits to hospitals, nursing homes, and
            </span>
            <br />
            other facilities to support and bring happiness to them .
          </span>
          <span className="big-span" data-aos ='fade-right' data-aos-duration='1000' data-aos-delay='400'>
            The club also aims to conduct awareness campaigns and
            <span className="vert">training workshops, such as teaching
            first aid .</span>
          </span>
          <span  className="big-span" data-aos ='fade-right' data-aos-duration='1000' data-aos-delay='500'>
            Our scientific club will be a source of hope for me, for you, and
            for<span className="vert"> every dedicated medical student .</span>
            <br /> HOPE will be your support — so support it too and join this<span className="vert">scientific family  </span>
          </span>

          
        </p>
      </div>
    </section>
  );
}
