import React from 'react';
import Jumbotron from '../Jumbotron';
import Col from '../Col';
import Row from '../Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Scope from '../assets/scope.png';
import travelbuddy from '../assets/travelbuddy.png';
import weatherapp from '../assets/weatherapp.png';
import fitnessTracker from '../assets/fittnesstracker.png';
import Project from '../Project';

const styles = {
    a: {
        marginLeft: '20px'
    },
    cardImage: {
        height: "25vh",
        width: "24vw",
        // marginRight: '20px',


    },

    body: {
        width: "24vw",
        borderColor: "lightblue",
        textAlign: 'center',
        // marginRight: '20px',
        justifyContent: 'center'
    },
    title: {
        fontSize: '25px'
    },
    btn: {
        backgroundColor: '#00b4d8',
        borderColor: '#00b4d8',
        display: 'inline',
        marginTop: '0px',
        marginLeft: '10px',
        borderRadius: '10%',
        textAlign: 'center',
        padding: '.5rem 1rem',

    },
    card: {
        height: "45vh",
        width: "24vw",
        display: 'inline',
        margin: '25px',
        borderStyle: 'solid',
        borderColor: 'black',

    }

}

function Port() {
    return (
        <>
            <Project>
                <Jumbotron className="jumbo" style={styles.jumbo}>
                    <Row >
                        <Col size="md-12" className='col' >
                            <Card className='card' style={styles.card}>
                                <Card.Img className="cardImage" style={styles.cardImage} variant="top" src={Scope} alt="Scope" />
                                <Card.Body className='body' style={styles.body}>
                                    <Card.Title className='title' style={styles.title}>Scope</Card.Title>
                                    <Card.Text>
                                        Daily Horoscope and Compatability Application.
                                    </Card.Text>
                                    <Button variant="flat" className='btn' style={styles.btn}>Github</Button>
                                    <Button variant="flat" className='btn' style={styles.btn}>Deployed App</Button>
                                </Card.Body>
                            </Card>
                            <Card style={styles.card} >
                                <Card.Img className="cardImage" style={styles.cardImage} variant="top" src={travelbuddy} alt="TravelBuddy" />
                                <Card.Body className='body' style={styles.body}>
                                    <Card.Title className='title' style={styles.title}>Travel Buddy</Card.Title>
                                    <Card.Text>
                                        Travel Translator and Navigation Application.
    </Card.Text>
                                    <Button variant="flat" className='btn' style={styles.btn}>Github</Button>
                                    <Button variant="flat" className='btn' style={styles.btn}>Deployed App</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>
                    <Row style={{ display: 'flex' }}>
                        <Col size="md-12" className='col' >
                            <Card style={styles.card}>
                                <Card.Img className="cardImage" style={styles.cardImage} variant="top" src={weatherapp} alt="WeatherApp" />
                                <Card.Body className='body' style={styles.body}>
                                    <Card.Title className='title' style={styles.title}>Weather Checker</Card.Title>
                                    <Card.Text>
                                        Classic weather application with the ability to search cities.
    </Card.Text>
                                    <Button variant="flat" className='btn' style={styles.btn}>Github</Button>
                                    <Button variant="flat" className='btn' style={styles.btn}>Deployed App</Button>
                                </Card.Body>
                            </Card>
                            <Card style={styles.card}>
                                <Card.Img className="cardImage" style={styles.cardImage} variant="top" src={fitnessTracker} alt="Fitness Tracker" />
                                <Card.Body className='body' style={styles.body} >
                                    <Card.Title className='title' style={styles.title}>Fitness Tracker</Card.Title>
                                    <Card.Text>
                                        Application designed to help record and store daily workouts.
    </Card.Text>
                                    <Button variant="flat" className='btn' style={styles.btn}>Github</Button>
                                    <Button variant="flat" className='btn' style={styles.btn}>Deployed App</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                </Jumbotron>
            </Project>
        </>
    );
}

export default Port;