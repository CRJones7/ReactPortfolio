import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation } from "react-router-dom";
import Resume from "./resume.pdf";
import Container from "./Project"

const styles = {
    brand: {

        fontWeight: 'bold',
        justifyContent: 'flex-end',
        fontSize: '30px',
        backgroundColor: '#f3ec78',
        // backgroundImage: 'linear-gradient(45deg, #023e8a, #00b4d8, #03045e)',
        backgroundImage: 'linear-gradient(45deg, #e500a4, #a100f2, #6a00f4, #2d00f7)',
        backgroundSize: '100%',
        webkitBackgroundClip: 'text',
        mozBackgroundClip: 'text',
        webkitTextFillColor: 'transparent',
        mozTextFillColor: 'transparent',



    },
    dark: {
        height: "50px",
        backgroundColor: '#f1faee',
        display: "flex",
        justifyContent: 'center'

    },
    nav: {
        justifyContent: 'center',
        marginLeft: "10px",
        fontSize: "20px",
        textDecoration: "none",
        color: '#2d00f7'

    },
    brandDiv: {
        display: 'inline',

    }
};


function Head() {
    const location = useLocation()
    return (
        <Container className="p-0" fluid>
            <div className="brandDiv" style={styles.brandDiv}>
                <Navbar.Brand className='brand mr-auto' style={styles.brand}>Courtney Jones</Navbar.Brand>
            </div>
            <Navbar bg="dark" className="dark border-bottom s-navbar" expand="lg" style={styles.dark}>


                <Link to="/" className={location.pathname === "/" ? "mr-auto nav nav-link active justify-content-end" : "mr-auto nav nav-link justify-content-end"} style={styles.nav}>Home |</Link>
                <Link to="/portfolio" className={location.pathname === "/portfolio" ? "mr-auto nav nav-link active justify-content-end" : " mr-auto nav nav-link justify-content-end"} style={styles.nav}>Portfolio |</Link>
                <Link to={Resume} target="_blank" rel="noopener noreferrer" className="nav" style={styles.nav}>Resume</Link>

            </Navbar>
        </Container>

    )
}

export default Head;