import React from 'react';
import Jumbotron from '../Jumbotron';
import Image from 'react-bootstrap/Image';
import Photo from '../assets/image.jpg';
import Project from '../Project';

// import Head from '../Navbar'


const styles = {

    headshot: {
        marginTop: '50px',
        height: "300px",
        weight: "100px",
        float: "right",
        // margin: "50px"
        border: '5px solid #353535',
        display: 'inline'


    },
    welcome: {

        textAlign: "left",
        fontSize: "40px",
        display: 'inline',

        backgroundColor: '#f3ec78',
        // backgroundImage: 'linear-gradient(45deg, #023e8a, #00b4d8, #03045e)',
        backgroundImage: 'linear-gradient(45deg, #e500a4, #a100f2, #6a00f4, #2d00f7)',
        backgroundSize: '100%',
        webkitBackgroundClip: 'text',
        mozBackgroundClip: 'text',
        webkitTextFillColor: 'transparent',
        mozTextFillColor: 'transparent',


    },
    intro: {
        // justifyContent: "flex-start",
        fontSize: "20px",
        fontFamily: 'Baloo Tamma 2',
        color: '#353535',
        fontWeight: 'normal'


    },
    introDiv: {
        maxWidth: "400px",
        marginTop: "80px"
    },
    jumboT: {
        display: 'flex',
        justifyContent: "left",
        maxWidth: "800px",


    },
    welcomeDiv: {
        height: '20vh',
        marginTop: '90px',
        display: 'inline'
    }

}
function Home() {
    return (
        <>
            <Project>
                <Jumbotron className="jumboT" style={styles.jumboT}>
                    {/* <div className='welcomeDiv' style={styles.welcomeDiv}>

                    </div> */}
                    <Image className="headshot" style={styles.headshot} src={Photo} rounded />
                    <div className="introDiv" style={styles.introDiv}>
                        <h1 className="welcome" style={styles.welcome}>Welcome</h1>
                        <h2 className="intro" style={styles.intro}>Hi, my names Courtney Jones I am a junior full-stack developer and this is a portfolio sight I've built to connect with employers and fellow developers.
                        <br></br>
                        I have a bachelors of science in Biology with a minor in organic chemistry. My professional experience includes two years of quality assurance testing at fast pace and quickly growing startup in Austin Texas.
                        With my background in QA and training in lab techniques I have found a passion for detail oriented work.
                        <br></br>
                        Currently working on learning mobile dev I hope to continue learning and growing my skills as a developer in the upcoming years .
                        </h2>
                    </div>
                </Jumbotron>
            </Project>
        </>
    );
}

export default Home;