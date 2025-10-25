import '../styles/activities.css'
export default function Activities({title , description , image , delay}){
    return(
         <div className="activity" data-aos='zoom-in' data-aos-duration='1000' data-aos-delay={delay}>
          <div className="card"  style={{backgroundImage: `url(${image})` }}>
            <h1>{title}</h1>
          </div>
          <p>
            {description}
          </p>
        </div>
    )
}