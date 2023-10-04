// import react from 'react';
// import React, { useState } from 'react'
export default function Skills(props) {

    return (
        <>
            <div className="container my-5 books-container" style={{ fontFamily: props.font, color: props.themeColor }}>
                <h2 className="text-center">Programming Languages</h2>
                <div className="row justify-content">
                    {/* <div className="col-md-4">
                        <div className="card mb-4 " style={{ backgroundColor: '#BABABAC7', width: "1350px" }}> */}


                    <div className="accordion  text-center" id="accordionExample" >
                        <div className="accordion-item">
                            <h2 className="accordion-header" >
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"  >
                                    <b> C</b>
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <pre> I did C language in my college because that language included in my acadamic syllabus. I have a string grip on basics of this language because that<br></br> was my first programming language.</pre>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    <b> C#</b>
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <pre>I've gained proficiency in C# primarily through my experience with <b>game development in Unity.</b> Working with Unity, I've had the opportunity to harness<br></br>the power of C# to create interactive and immersive experiences. I've written scripts to control game mechanics, character behavior, user interfaces,<br></br>and more.</pre>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    <b>C++</b>
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <pre>Initially I have learned C++ basics  from various online resources, than I studied <b>OOP</b> and <b>Data Structure and Algorithms</b> from my university while<br></br>doing BS Software Engineering. After that I practice DSA problems on different online platform like, leetCode, hackerRank and coderByte. Now I have<br></br>strong grip on <b>Data Structure and Algorithms.</b>
                                    </pre>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    <b> JavaScript</b>
                                </button>
                            </h2>
                            <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <pre>I have learned Javascript from different online resources and make various projects on it. After that I impliment Javascript into HTML and CSS and<br></br>make websites. Javascipt <b>Document Object Manipulation</b> help me alot to make optimal solutions while doing web development. After that I impliment<br></br>Javascript into react and make dynamic web-applications.</pre>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                    <b>Java</b>
                                </button>
                            </h2>
                            <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <pre>
                                        I also learned Java basics and OOP in Java.
                                    </pre>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* </div>
                </div> */}
            </div>

            <div className="container my-5 books-container" style={{ fontFamily: props.font, color: props.themeColor }}>
                <h2 className="text-center">Frameworks</h2>
                <div className="row justify-content">
                    {/* <div className="col-md-4">
                        <div className="card mb-4 " style={{ backgroundColor: '#FFFFFFC7', width: "1350px" }}>
 */}

                    <div class="accordion" id="accordion2" >
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="false" aria-controls="collapse1">
                                    <b> React.js</b>
                                </button>
                            </h2>
                            <div id="collapse1" class="accordion-collapse collapse" data-bs-parent="#accordion2">
                                <div class="accordion-body">
                                    I've recently acquired proficiency in React.js, a popular JavaScript library for building interactive user interfaces. I've applied my knowledge to develop several noteworthy projects:
                                    <ul>
                                        <li><b>TextUtils:</b> A versatile text manipulation tool that enables users to perform various operations on text, enhancing readability and usability.</li>
                                        <li><b>Portfolio site: </b>A comprehensive personal website for a doctor, featuring appointment booking, a medical book store, and a platform for posting research articles and blogs.
                                        </li>
                                        <li><b>CircNews:</b>A dynamic website that provides real-time cricket news, player and team rankings, statistics, and updates on international tournaments using API.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            React Native
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            I've gained proficiency in C# primarily through my experience with game development in Unity. Working with Unity, I've had the opportunity to harness the power of C# to create interactive and immersive experiences. I've written scripts to control game mechanics, character behavior, user interfaces, and more.
                                        </div>
                                    </div> */}
                        {/* </div> */}
                    </div>
                </div>
                {/* </div>
                </div> */}
            </div>
            <div className="container my-5 books-container" style={{ fontFamily: props.font, color: props.themeColor }}>
                <h2 className="text-center">Tools</h2>
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <div className="card mb-4 " style={{ backgroundColor: '#FFFFFFDC' }}>
                            <ul style={{ marginTop: "1rem", marginBottom: "1rem" }}>
                                <li><h4>WordPress</h4></li>
                                <li><h4>MS Word</h4></li>
                                <li><h4>MS Excel</h4></li>
                                <li><h4>MS PowerPoint</h4></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}