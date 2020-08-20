import React from 'react';
import { Jumbotron } from 'react-bootstrap';

const styles = {
    jumbo: {
        height: '500px',
        width: '800px',
        backgroundColor: '#f1faee',
        margin: "auto",

    }
}


function Jumbo(props) {
    return (
        <Jumbotron className={"jumbo"} style={styles.jumbo}>
            {props.children}
        </Jumbotron>


    );
}

export default Jumbo; 