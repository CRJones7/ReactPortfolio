import React from "react";


const styles = {

    wrapper: {
        minHeight: "100%",
        // paddingBottom: "100px",
        marginBottom: "500px"
    }
}


function Wrapper(props) {
    return <main className="wrapper" style={styles.wrapper}{...props} />;
}

export default Wrapper;