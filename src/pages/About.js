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
                        <p className="float-xs-left">Full Stack web developer with experience in both the small scale environment of a startup and the large scale environment of a globally expanded company. </p>
                        <p className="float-xs-left">After graduating from the University of California, Davis, with a Bachelor of Science in Neurobiology and Physiology, I realized that the career as a medical professional that I had envisioned did not line up with the work life balance that I desired. Knowing that I wanted to be in a field that fosters constant, life-long learning and problem solving, I completed a coding bootcamp and earned a certificate in full stack development from a UC Davis Extension. I have since worked in two vastly different capacities, while still utilizing and refining the same set of skills, primarily ReactJS, NodeJS, and ExpressJS. The first role was with a small startup called GymRat LLC, making full stack contributions that resulted in taking the app from a concept to now being available on the iOS app store. The second and more recent role was with Qualtrics, a large experience management company with offices around the world, where I owned and developed new features on a frontend team.</p>
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