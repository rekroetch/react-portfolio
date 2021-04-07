import Container from '../components/Container'
import Jumbotron from '../components/Jumbotron'
import Row from '../components/Row'
import Card from '../components/Card'
import plates from '../assets/platesResults.png'
import gameKeeper from '../assets/gameKeeperWelcome.png'
import weatherDash from '../assets/weatherDashboardScreenshot.png'
import burger from '../assets/Eat-Da-Burger.png'
import employeeDirect from '../assets/employeeDirectory.png'
import fitnessTracker from '../assets/fitnessTracker.png'
import escapeRoom from '../assets/escapeRoom.png'
import "./pages.css"

function Portfolio() {
    return (
        <Container>
            <Jumbotron>
                <h1 className="display-4">Portfolio</h1>
                <hr className="my-4"></hr>
                <Row>
                    <Card>
                        <img src={escapeRoom} className="card-img-top" alt="Escape Room Screenshot"></img>
                        <div className="card-body">
                            <h2 className="card-title">Escape Room</h2>
                            <p className="card-text">A virtual escape room game where users must solve riddles, complete puzzles, and find clues to "escape" and win. Created with JavaScript, React, React-drag-drop-container, Node, Express, MongoDB, Mongoose, Passport, JSON Web Token, Bcrypt, CSS, Bootstrap, Font Awesome, and deployed on Heroku with MongoDB Atlas.</p>
                            <a href="https://react-escape-room.herokuapp.com/" target="_blank" rel="noreferrer" className="btn btn-dark">Deployed Site</a>
                            <a href="https://github.com/rekroetch/escape-room" target="_blank" rel="noreferrer" className="btn btn-secondary">GitHub Repo</a>
                        </div>
                    </Card>
                    <Card>
                        <img src={plates} className="card-img-top" alt="Plates Screenshot"></img>
                        <div className="card-body">
                            <h2 className="card-title">Plates</h2>
                            <p className="card-text">An app that allows the user to search for restaurants when they want to try some place new. The app uses the APIs of Zomato and OpenStreetMap, along with Leaflet and MapQuest to provide information about the restaurants as well as directions to the place of their choice. App utilizes HTML, CSS, JavaScript, jQuery, and Foundation.</p>
                            <a href="https://rekroetch.github.io/plates/" target="_blank" rel="noreferrer" className="btn btn-dark">Deployed Site</a>
                            <a href="https://github.com/rekroetch/plates" target="_blank" rel="noreferrer" className="btn btn-secondary">GitHub Repo</a>
                        </div>
                    </Card>
                    <Card>
                        <img src={gameKeeper} className="card-img-top" alt="welcome page"></img>
                        <div className="card-body">
                            <h2 className="card-title">Game Keeper</h2>
                            <p className="card-text">An app to Explore, Search, Filter and Save your favorite board games. Made with JavaScript, CSS, Handlebars, Node, Express, Passport, MySQL, Sequelize, Board Game Atlas API, JWT.IO, GSAP, Bootstrap, Font Awesome, and deployed on Heroku with JawsDB. </p>
                            <a href="https://my-game-keeper.herokuapp.com/" target="_blank" rel="noreferrer" className="btn btn-dark">Deployed Site</a>
                            <a href="https://github.com/rekroetch/game-keeper" target="_blank" rel="noreferrer" className="btn btn-secondary">GitHub Repo</a>
                        </div>
                    </Card>
                    <Card>
                        <img src={weatherDash} className="card-img-top" alt="Weather Dashboard Screenshot"></img>
                        <div className="card-body">
                            <h2 className="card-title">Weather Dashboard</h2>
                            <p className="card-text">An app that displays the weather of the city that the user enters into the search bar, including current conditions and a five day forecast.  Search results persist using local storage.  Made using the OpenWeatherMap API, along with HTML, CSS, and JavaScript.</p>
                            <a href="https://rekroetch.github.io/weather_dashboard/" target="_blank" rel="noreferrer" className="btn btn-dark">Deployed Site</a>
                            <a href="https://github.com/rekroetch/weather_dashboard" target="_blank" rel="noreferrer" className="btn btn-secondary">GitHub Repo</a>
                        </div>
                    </Card>
                    <Card>
                        <img src={burger} className="card-img-top" alt="Eat-Da-Burger app screenshot"></img>
                        <div className="card-body">
                            <h2 className="card-title">Eat-Da-Burger</h2>
                            <p className="card-text">An app where users can "make" and "eat" burgers, utilizing a MySQL database and RESTful API standards. Made with MySQL, Handlebars, Express.js, Node.js, jQuery, JavaScript, Bootstrap, CSS, and HTML.</p>
                            <a href="https://afternoon-sands-10616.herokuapp.com/" target="_blank" rel="noreferrer" className="btn btn-dark">Deployed Site</a>
                            <a href="https://github.com/rekroetch/burger" target="_blank" rel="noreferrer" className="btn btn-secondary">GitHub Repo</a>
                        </div>
                    </Card>
                    <Card>
                        <img src={employeeDirect} className="card-img-top" alt="Employee Directory app screenshot"></img>
                        <div className="card-body">
                            <h2 className="card-title">Employee Directory</h2>
                            <p className="card-text">An app that allows an employee to view a list of all employees in a directory, with the ability to filter the list by role or sort the list alphabetically/numerically by any of the categories.  Made with JavaScript, CSS, NodeJS, and React</p>
                            <a href="https://rekroetch.github.io/employee_directory/" target="_blank" rel="noreferrer" className="btn btn-dark">Deployed Site</a>
                            <a href="https://github.com/rekroetch/employee_directory" target="_blank" rel="noreferrer" className="btn btn-secondary">GitHub Repo</a>
                        </div>
                    </Card>
                    <Card>
                        <img src={fitnessTracker} className="card-img-top" alt="Fitness Tracker app screenshot"></img>
                        <div className="card-body">
                            <h2 className="card-title">Fitness Tracker</h2>
                            <p className="card-text">An app that allows users to add exercises to new or existing workout plans each day. Daily totals are tracked on the stats page, showing pounds, sets, reps, duration, and distance. Each exercise is stored in a collection on MongoDB Atlas. App made with MongoDB, Mongoose, Express, and Node.</p>
                            <a href="https://track-myfit.herokuapp.com/" target="_blank" rel="noreferrer" className="btn btn-dark">Deployed Site</a>
                            <a href="https://github.com/rekroetch/workout_tracker" target="_blank" rel="noreferrer" className="btn btn-secondary">GitHub Repo</a>
                        </div>
                    </Card>
                </Row>
            </Jumbotron>
        </Container>
    );
  }
  
  export default Portfolio;