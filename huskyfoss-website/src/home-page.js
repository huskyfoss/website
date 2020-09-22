import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Logo from "./pictures/HuskyFOSS-Logo.jpg";

class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col sm={8} align="center">
                        <br></br>
                        We are Husky Free and Open Source Software 
                        (Or in short, HuskyFOSS!). Free and Open Source 
                        software are made by programmers around the world 
                        and are absolutely free to use! We envision to bring
                        this immense world of FOSS to the students and 
                        faculty at UW.
                    </Col>
                    <Col>
                        <img src={Logo} alt="HuskyFOSS logo" width="200" height="150"/>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default HomePage;
