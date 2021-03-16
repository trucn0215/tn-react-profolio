import React from "react";
import { Card } from "react-bootstrap";
import Project1 from "./img/Trick-Trivia-Game.png"
import Project2 from "./img/citySearched.png"
import Project3 from "./img/Day-Planner.png"
import Project4 from "./img/Password-Generator.png"
import Project5 from "./img/Code-Quiz-Game.png"
import Project6 from "./img/Budget-Tracker-Demo.png"


function Projects() {

    return (
        <div className="mb-1 p-2">
            <h3 className="text-warning">Projects</h3>

            {/* Project 1 */}
            <Card className="my-3 border border-primary">
                <Card.Img variant="top" src={Project1} style={{ width: "100%", height: "250px"}} />
                <Card.Body>
                    <Card.Text className="fs-3">
                        <div className="card1">
                            <a href="https://tomakpo.github.io/UWCB-P1-Trick-Trivia/">
                                <span>
                                    <h3>Trick Trivia game</h3>
                                    <em>Click to play the game</em>
                                </span>
                            </a>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>

            {/* Project 2 */}
            <Card className="my-3 border border-primary">
                <Card.Img variant="top" src={Project2} style={{ width: "100%", height: "250px" }} />
                <Card.Body>
                    <Card.Text>
                        <div className="card2">
                            <a href="https://trucn0215.github.io/TN-Weather-Dashboard/">
                                <span>
                                    <h3>Weather App</h3>
                                    <em>Click to try my App</em>
                                </span>
                            </a>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
            
            {/* Project 3 */}
            <Card className="my-3 border border-primary">
                <Card.Img variant="top" src={Project3} style={{ width: "100%", height: "250px" }} />
                <Card.Body>
                    <Card.Text>
                        <div className="card3">
                            <a href="https://trucn0215.github.io/TN-Day-Planner/">
                                <span>
                                    <h3>Planner App</h3>
                                    <em>Click to try my App</em>
                                </span>
                            </a>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>

            {/* Project 4 */}
            <Card className="my-3 border border-primary">
                <Card.Img variant="top" src={Project4} style={{ width: "100%", height: "250px" }} />
                <Card.Body>
                    <Card.Text>
                        <div className="card4">
                            <a href="https://trucn0215.github.io/TN-Password-Generator/">
                                <span>
                                    <h3>Password Generator</h3>
                                    <em>Click to get your password</em>
                                </span>
                            </a>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>

            {/* Project 5 */}
            <Card className="my-3 border border-primary">
                <Card.Img variant="top" src={Project5} style={{ width: "100%", height: "250px" }} />
                <Card.Body>
                    <Card.Text>
                        <div className="card5">
                            <a href="https://trucn0215.github.io/TN-Code-Quiz-Assignment/">
                                <span>
                                    <h3>Code-Quiz Game</h3>
                                    <em>Click to play the game</em>
                                </span>
                            </a>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>

            {/* Project 6 */}
            <Card className="my-3 border border-primary">
                <Card.Img variant="top" src={Project6} style={{ width: "100%", height: "250px" }} />
                <Card.Body>
                    <Card.Text>
                        <div className="card6">
                            <a href="https://tn-budget-tracker.herokuapp.com/">
                                <span>
                                    <h3>Budget Tracker App</h3>
                                    <em>Click to try my App</em>
                                </span>
                            </a>
                        </div>
                </Card.Text>
                </Card.Body>
            </Card>
        </div >

    )
}

export default Projects;