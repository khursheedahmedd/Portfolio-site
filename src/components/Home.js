import React from 'react';
// import './Home.css'; // Import your CSS file

export default function Home(props) {
    return (

        <div className='background-image' > {/* Apply the CSS class here */}
            <h3 className="container" style={{ marginLeft: "10rem", marginTop: "6rem", fontFamily: props.font }}>
                Hi! this is <b style={{ color: props.themeColor }}>Khursheed Ahmed</b><br></br>
                Welcome to my <b style={{ color: props.themeColor }}>portfolio </b>site</h3>
        </div>
    );
}
