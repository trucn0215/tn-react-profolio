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
                </Card.Text>
                </Card.Body>
            </Card>

            <Card className="my-3 border border-primary">
                <Card.Img variant="top" src="../../pulic/img/Code-Quiz-Game.png" style={{ width: "100%" }} />
                <Card.Body>
                    <Card.Text>
                        Project 2
                </Card.Text>
                </Card.Body>
            </Card>

            <Card className="my-3 border border-primary">
                <Card.Img variant="top" src="../../pulic/img/Code-Quiz-Game.png" style={{ width: "100%" }} />
                <Card.Body>
                    <Card.Text>
                        Project 3
                </Card.Text>
                </Card.Body>
            </Card>

            <Card className="my-3 border border-primary">
                <Card.Img variant="top" src="../../pulic/img/Code-Quiz-Game.png" style={{ width: "100%" }} />
                <Card.Body>
                    <Card.Text>
                        Project 4
                </Card.Text>
                </Card.Body>
            </Card>

            <Card className="my-3 border border-primary">
                <Card.Img variant="top" src="../../pulic/img/Code-Quiz-Game.png" style={{ width: "100%" }} />
                <Card.Body>
                    <Card.Text>
                        Project 5
                </Card.Text>
                </Card.Body>
            </Card>

            <Card className="my-3 border border-primary">
                <Card.Img variant="top" src="../../pulic/img/Code-Quiz-Game.png" style={{ width: "100%" }} />
                <Card.Body>
                    <Card.Text>
                        Project 6
                </Card.Text>
                </Card.Body>
            </Card>
        </div>

    )
}

export default Projects;