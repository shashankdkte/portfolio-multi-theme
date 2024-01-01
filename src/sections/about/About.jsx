import './about.css'
import AboutImage from "../../assets/about.jpg";
import data from './data';
import Card from '../../components/card/Card';

import CV from '../../assets/cv.pdf'
import {HiDownload} from 'react-icons/hi'

const About = () => {
  return (
    <section id="about"  data-aos="fade-in">
        <div className="container about__container">
            <div className="about__left">
                <div className="about__portrait">
                    <img src={AboutImage} alt="About Image" />
                </div>
            </div>
            <div className="about__right">
                <h2>About Me</h2>
                <div className="about__cards">
                    {
                        data.map(item => (
                            <Card key={item.id} className="about__card">
                                <span className='about__card-icon'>{item.icon}</span>
                                <h5>{item.title}</h5>
                                <small>{item.desc}</small>
                            </Card>
                        ))
                    }
                </div>
                <p>
                Results-driven and versatile developer with a proven track record in leveraging the .NET stack, Node and FrontEnd technologies, 
specializing in React and Angular
                </p>
                <p>
                      Hi, my name is Shashank  Dhakate from Mumbai, India. I'm a full-stack web developer with a Bachelors degree in Computer Science. My top priority is to contribute in building large scale applications which cater to each and every client as well as user requirements. Streamline development for myself as well as collaborators.
                      Build an indepth knowledge in multiple phases of development.
                  </p>
                  <p>
                      I am fascinated in development of cloud applications as well as underlying technologies supported. I would like pursue my Master in Cloud Computing or Cybersecurity, since I have developed keen sense of curosity towards following fields.
                  </p>
                <a href={CV} download className='btn primary'>Download CV <HiDownload/></a>
            </div>
        </div>
    </section>
  )
}


export default About