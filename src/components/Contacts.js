import React from "react";
import {ListGroup, Card} from "react-bootstrap"

function Contacts () {
    return (
        <div className="mw-100">
            <div className="p-2">
                <ListGroup horizontal className="align-middle">
                    <h4 className="mr-4">Contact Me:</h4>
                    <div className="">
                        <Card.Link href="tel:+12063352741" className="align-middle">(206) 335-2741</Card.Link>
                        <Card.Link href="mailto:trucn0215@gmail.com">trucn0215@gmail.com</Card.Link>
                        <Card.Link href="https://github.com/trucn0215">GitHub</Card.Link>
                        <Card.Link href="https://www.linkedin.com/in/trucnguyen0215/">LinkedIn!</Card.Link>
                    </div>
                </ListGroup>
            </div>


        </div>
    )
}

export default Contacts;