import React from "react";
import { Card } from "react-bootstrap";

function Projects() {
    return (
        <div className="mb-1 p-2">
            <h3>Projects</h3>
            <Card className="my-3 border border-primary">
                <Card.Img variant="top" src="../../pulic/img/Code-Quiz-Game.png" style={{ width: "100%" }} />
                <Card.Body>
                    <Card.Text>
                        Project 1
                        <div class="card1">
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

            <Card className="my-3 border border-primary">
                <Card.Img variant="top" src="../../pulic/img/Code-Quiz-Game.png" style={{ width: "100%" }} />
                <Card.Body>
                    <Card.Text>
                        Project 2
                        <div class="card2">
                            <a href="https://trucn0215.github.io/TN-Weather-Dashboard/">
                                <span>
                                    <h3>Weather App</h3>
                                    <em>Click to try</em>
                                </span>
                            </a>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card className="my-3 border border-primary">
                <Card.Img variant="top" src="../../pulic/img/Code-Quiz-Game.png" style={{ width: "100%" }} />
                <Card.Body>
                    <Card.Text>
                        Project 3
                        <div class="card4">
                            <a href="https://trucn0215.github.io/TN-Day-Planner/">
                                <span>
                                    <h3>Planner App</h3>
                                    <em>Click to try</em>
                                </span>
                            </a>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card className="my-3 border border-primary">
                <Card.Img variant="top" src="../../pulic/img/Code-Quiz-Game.png" style={{ width: "100%" }} />
                <Card.Body>
                    <Card.Text>
                        Project 4
                        <div class="card5">
                            <a href="https://trucn0215.github.io/TN-Password-Generator/">
                                <span>
                                    <h3>Password Generator</h3>
                                    <em>Click to try</em>
                                </span>
                            </a>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card className="my-3 border border-primary">
                <Card.Img variant="top" src="../../pulic/img/Code-Quiz-Game.png" style={{ width: "100%" }} />
                <Card.Body>
                    <Card.Text>
                        Project 5
                        <div class="card3">
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

            <Card className="my-3 border border-primary">
                <Card.Img variant="top" src="../../pulic/img/Code-Quiz-Game.png" style={{ width: "100%" }} />
                <Card.Body>
                    <Card.Text>
                        Project 6
                        <div class="card6">
                            <a href="https://tn-eat-da-burger.herokuapp.com/">
                                <span>
                                    <h3>Burger App</h3>
                                    <em>Click to try</em>
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