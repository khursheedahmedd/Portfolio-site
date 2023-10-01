// import react from 'react';
// import React, { useState } from 'react'
export default function Skills(props) {

    return (
        <>
            <div className="container my-5 books-container" style={{ fontFamily: props.font }}>
                <h2 className="text-center">Programming Languages</h2>
                <div className="row justify-content">
                    {/* <div className="col-md-4">
                        <div className="card mb-4 " style={{ backgroundColor: '#BABABAC7', width: "1350px" }}> */}


                    <div className="accordion  text-center" id="accordionExample" >
                        <div className="accordion-item">
                            <h2 className="accordion-header" >
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"  >
                                    <b style={{ color: props.themeColor }}> C</b>
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    I have a strong foundation in C programming, which I initially learned during my college studies and continued to develop my skills through various projects. During my academic journey, I completed numerous projects in C, gaining valuable experience in problem-solving and algorithmic thinking.

                                    My dedication to mastering data structures and algorithms in C has further enriched my understanding of the language. This knowledge not only allows me to write efficient and optimized code but also enables me to tackle complex software engineering challenges with confidence.

                                    With my expertise in C, I'm well-equipped to design and implement robust and efficient solutions, making it one of my core programming languages in my toolkit.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    <b style={{ color: props.themeColor }}> C#</b>
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    I've gained proficiency in C# primarily through my experience with game development in Unity. Working with Unity, I've had the opportunity to harness the power of C# to create interactive and immersive experiences. I've written scripts to control game mechanics, character behavior, user interfaces, and more.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    <b style={{ color: props.themeColor }}>C++</b>
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    My journey with C++ began during my university studies, where I gained a solid foundation in the language's fundamentals. In the initial stages, I learned the basics of C++, and in the subsequent semester, I delved deeply into Object-Oriented Programming (OOP) principles using C++. This allowed me to understand the importance of modularity and encapsulation in software design.

                                    One of the highlights of my experience with C++ was the development of various projects, including systems like bank management, library management, and Lahore Zoo information management. These projects honed my skills in applying OOP concepts to real-world scenarios, enhancing my problem-solving abilities.

                                    During the summer break, I embarked on a journey to explore data structures and algorithms in C++. This knowledge opened the doors to competitive programming challenges on various online platforms. I honed my ability to solve complex problems efficiently and optimize code for better performance.

                                    C++ has become a versatile tool in my programming toolkit, enabling me to build efficient, modular, and high-performance software solutions. Whether it's designing intricate data structures or tackling algorithmic challenges, C++ remains an integral part of my programming expertise

                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    <b style={{ color: props.themeColor }}> JavaScript</b>
                                </button>
                            </h2>
                            <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    My journey with JavaScript has been focused on both web and mobile application development, utilizing the power of React.js and React Native. JavaScript, along with React.js and React Native, empowers me to create versatile and visually appealing applications, whether they're destined for the web or mobile devices. It's a language and technology stack that enables me to bring my development projects to life in a user-friendly and efficient manner. </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                    <b style={{ color: props.themeColor }}>Java</b>
                                </button>
                            </h2>
                            <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    I have a strong background in Java programming, which I have honed through a combination of formal education and practical experience. I'm well-versed in the Java programming language, having learned its syntax, core features, and best practices.

                                    One of my significant areas of expertise is data structures and algorithms in Java. I have dedicated time to deeply understanding and implementing various data structures such as arrays, linked lists, stacks, queues, trees, graphs, and hash tables. I've also mastered algorithm design techniques, including sorting, searching, dynamic programming, and graph algorithms.

                                    My commitment to this field has driven me to participate in competitive programming challenges on different online platforms, where I've successfully solved complex problems efficiently and optimally. This practical experience has solidified my understanding of algorithmic complexities and performance analysis.

                                    Java, coupled with my proficiency in data structures and algorithms, empowers me to design and develop efficient and scalable software solutions. Whether it's solving intricate coding challenges or building robust applications, Java remains a cornerstone of my programming toolkit.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* </div>
                </div> */}
            </div>

            <div className="container my-5 books-container" style={{ fontFamily: props.font }}>
                <h2 className="text-center">Frameworks</h2>
                <div className="row justify-content">
                    {/* <div className="col-md-4">
                        <div className="card mb-4 " style={{ backgroundColor: '#FFFFFFC7', width: "1350px" }}>
 */}

                    <div class="accordion" id="accordion2" >
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="false" aria-controls="collapse1">
                                    <b style={{ color: props.themeColor }}> React.js</b>
                                </button>
                            </h2>
                            <div id="collapse1" class="accordion-collapse collapse" data-bs-parent="#accordion2">
                                <div class="accordion-body">
                                    I've recently acquired proficiency in React.js, a popular JavaScript library for building interactive user interfaces. I've applied my knowledge to develop several noteworthy projects:
                                    <ul>
                                        <li><b>TextUtils:</b> A versatile text manipulation tool that enables users to perform various operations on text, enhancing readability and usability.</li>
                                        <li><b>Doctor's site (<a href="mercpk.com">mercpk.com</a>): </b>A comprehensive personal website for a doctor, featuring appointment booking, a medical book store, and a platform for posting research articles and blogs.
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
            <div className="container my-5 books-container" style={{ fontFamily: props.font }}>
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