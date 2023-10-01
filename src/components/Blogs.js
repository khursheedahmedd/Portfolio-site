// import react from 'react';

export default function Blogs(props) {
    return (
        <>
            <div className="container my-5 books-container" style={{ fontFamily: props.font, marginLeft: "3.5rem", marginTop: "2rem" }}>
                <h2 className="text-center">Coding Articles</h2>
                <div className="row justify-content">
                    {/* <div className="col-md-4">
                        <div className="card mb-4 " style={{ backgroundColor: '#FFFFFFC7', width: "1350px" }}>
 */}

                    <div class="accordion" id="accordion2" >
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="false" aria-controls="collapse1">
                                    <b style={{ color: props.themeColor }}>Why a site made with React.js is called single-page web-application?</b>
                                </button>
                            </h2>
                            <div id="collapse1" class="accordion-collapse collapse" data-bs-parent="#accordion2">
                                <div class="accordion-body">
                                    <p className="card-text">A site made with React.js is often referred to as a "single-page web application" (SPA) because it operates as a single, dynamic web page that loads and updates
                                        content without requiring full page reloads. Unlike traditional multi-page websites, where each page is a separate HTML document, SPAs load a single HTML page
                                        initially and then use JavaScript to dynamically update the content as needed.<br></br> Here are some key characteristics of single-page web applications:<br></br>
                                        <ul>
                                            <li>
                                                <p><b>Initial Load:</b> When you visit an SPA, it loads a single HTML file, which typically includes the JavaScript code for rendering and managing the application.</p>
                                            </li>
                                            <li>
                                                <p><b>Dynamic Updates:</b> SPAs use JavaScript frameworks like React to render and update content dynamically within the same page. When you navigate to different sections or interact with the site, the content changes without triggering full page refreshes.</p>
                                            </li>
                                            <li>
                                                <p><b>Smooth User Experience:</b> SPAs provide a smoother and more responsive user experience because they can fetch and display new data from the server without the need to reload the entire page. This results in faster transitions between views and a more app-like feel.</p>
                                            </li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
