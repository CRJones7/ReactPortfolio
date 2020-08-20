import React from 'react';
import { Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Container from './Project';

const styles = {
    footer: {
        backgroundColor: "#f1faee",
        // position: "absolute",
        height: "70px",
        display: "flex",
        justifyContent: "center",
        bottom: 0
    },
    fa: {
        marginLeft: "15px",
        marginRight: "15px",
        color: "#00b4d8"
    }
}

function Footer() {

    return (

        <div fixed="bottom">
            <Navbar fixed="bottom" expand="lg" variant="light" bg="light" className="footer navbar fixed-bottom" style={styles.footer}>
                <Container>
                    <div>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/courtney-jones-458362b3/" className="btn app-btn">
                            <FontAwesomeIcon className="fa fa-3x" icon={faLinkedin} style={styles.fa} />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/CRJones7" className="btn app-btn">
                            <FontAwesomeIcon className="fa fa-3x" icon={faGithubSquare} style={styles.fa} />
                        </a>

                    </div>
                </Container>
            </Navbar>
        </div>
    )
}
export default Footer;