import React from "react";
import { Container, Row, Col } from "reactstrap";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from "reactstrap";
import * as d3 from "d3";

class CardSlider extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            dataset: []
        };
    }

    componentDidMount() {
        d3.csv(this.props.datafile).then((data) => {
            this.setState({
                dataset: data
            })
        })
        .catch((error) => {
            console.log(error)
        })
    }

    handlePrev() {
        console.log(this.state.activeIndex)
        if (this.state.activeIndex !== 0) {
            this.decrementActiveIndex()
        }
    }

    handleNext() {
        console.log(this.state.activeIndex)
        if (this.state.activeIndex < this.state.dataset.length - 3) {
            this.incrementActiveIndex()
        }
    }

    handleOnClick = (index) => {
        window.open(this.state.dataset[index].url, "_blank")
    }
 
    showcase() {
        var rowCards = []
        var row;
        // If the sliders have less than three values to show.
        if (this.state.dataset.length < 3) {
            for (let i = 0; i < this.state.dataset.length; i++) {
                row = this.state.dataset[i]
                rowCards.push(
                    <Col key={row.title} className="npcard" align="center">
                    <Card style={{width:"120%", height:"50%"}}>
                    <CardImg height="180" src={row.imgsrc}/>
                    <CardBody align="center">
                        <CardTitle>{row.title}</CardTitle>
                        <CardSubtitle>{row.subtitle}</CardSubtitle>
                        <CardText>{row.descp}</CardText>
                        <Button color="link" 
                            onClick={() => this.handleOnClick(this.state.activeIndex + i)}
                        > Learn More! </Button>
                    </CardBody>
                    </Card>
                    </Col>
                )
            }
        // Otherwise we print the next three values.
        } else {
            for (let i = 0; i < 3; i++) {
                row = this.state.dataset[this.state.activeIndex + i]
                rowCards.push(
                    <Col key={row.title} className="npcard" align="center">
                    <Card style={{width:"120%", height:"100%"}}>
                    <CardImg height="180" src={row.imgsrc}/>
                    <CardBody align="center">
                        <CardTitle>{row.title}</CardTitle>
                        <CardSubtitle>{row.subtitle}</CardSubtitle>
                        <CardText>{row.descp}</CardText>
                        <Button color="link" 
                                onClick={() => this.handleOnClick(this.state.activeIndex + i)}
                        > Learn More! </Button>
                    </CardBody>
                    </Card>
                    </Col>
                )
            }
        }
        return rowCards;
    }

    incrementActiveIndex() {
        this.setState({
            activeIndex: this.state.activeIndex + 1
        });
    }

    decrementActiveIndex() {
        this.setState({
            activeIndex: this.state.activeIndex - 1
        })
    }

    render() {

        let allRows = this.showcase();
        console.log(this.state.activeIndex)
        return (
            <Container>
            <Row>
                <Col className="npbutton" onClick={this.handlePrev.bind(this)}><Button>Previous</Button></Col>
                {allRows}
                <Col className="npbutton" onClick={this.handleNext.bind(this)}><Button>Next</Button></Col>
            </Row>
            </Container>
        );
    }

}
export default CardSlider;
