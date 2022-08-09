import './pages.css'
import profPic from '../assets/headShot.jpeg'
import Container from '../components/Container'
import Jumbotron from '../components/Jumbotron'
import Row from '../components/Row'
import Col from '../components/Col'

function About() {
    return (
        <Container>
            <Jumbotron>
                <h1 className="display-4">About Me</h1>
                <hr className="my-4"></hr>
                <Row>
                    <Col size="md-12">
                        <h3 className="contactInfo">Rachel Kroetch | (408)613-9497 | rkroetch8@gmail.com</h3>
                    </Col>
                </Row>   
                <Row>
                    <Col size="xs-6" className="float-left">
                        <img src={profPic} className="cardImg float-left" alt="teal shirt"></img>
                        <p className="float-xs-left">As a full-stack web developer with a Bachelor of Science in Neurobiology from the University of California, Davis, I use my passion for problem solving and excellent time management skills to tackle every task presented to me.  These skills, along with a high level of teamwork and communication, were especially demonstrated during my undergraduate years at UC Davis, working on campus as a kitchen employee before being promoted to Supervisor in less than a year.  Later, while earning a certificate in full stack development from a UC Davis Extension, I refined my technical skills with JavaScript, using it to create dynamic and interesting applications.  I am always eager to expand my knowledge and open to new opportunities in the tech industry where I can bring my customer-first attitude and youthful passion to any team. </p>
                        {/* <p className="float-xs-left">I am currently living in San Jose, CA but open to relocation. Find me on:</p> */}
                    </Col>
                </Row> 
                <Row>
                    <Col size="md-12">
                        <h4 className="contactInfo">linkedin.com/in/rachelkroetch | github.com/rekroetch</h4>
                    </Col>
                </Row>   
            </Jumbotron>
        </Container>
    );
  }
  
  export default About;