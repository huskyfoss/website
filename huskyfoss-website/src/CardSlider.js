import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import * as d3 from 'd3';
import 'd3';

class CardSlider extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            dataset: []
        };
    }

    componentDidMount() {
        d3.csv("./data/featured-projects.csv").then((data) => {
            console.log(data);
            this.setState({
                dataset: data
            })
        })
        .catch((error) => {
            console.log(error)
        })
    }

    showcase() {
        console.log(this.dataset)
        var rowCards = []
        for (var i = 0; i < 3; i++) {
            if (this.activeIndex >= this.dataset.length) {
                break;
            }
            var row = this.dataset[this.activeIndex]
            rowCards.push(
                <Col align="center">
                <Card style={{width:"120%", height:"50%"}}>
                <CardImg height="180" src={row[4]}/>
                <CardBody align="center">
                    <CardTitle>{row[0]}</CardTitle>
                    <CardSubtitle>{row[1]}</CardSubtitle>
                    <CardText>{row[2]}</CardText>
                    <Button onClick={(e) => {
                        e.preventDefault();
                        window.open(row[3], "_blank")
                    }}> Learn More! </Button>
                </CardBody>
                </Card>
                </Col>
            )
            this.incrementActiveIndex();
            console.log(this.activeIndex);
        }
    }

    incrementActiveIndex() {
        this.setState({
            activeIndex: this.activeIndex++
        })
    }

    render() {
        return (
            <Container>
            <Row>
                <Col align="left"><Button>Previous</Button></Col>
                {this.showcase()}
                <Col align="right"><Button>Next</Button></Col>
            </Row>
            </Container>
        );
    }

}
export default CardSlider;
