// import react from 'react';

export default function Resume(props) {
    return (
        <>
            <div className="container my-5 books-container" style={{ fontFamily: props.font }}>
                <h1 className="text-center">Resume</h1>
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <div className="card mb-4 " style={{ backgroundColor: '#DAD7D7C7', borderBlockColor: props.themeColor }}>
                            <img
                                className="btn btn-outline-light" href="RESUME.png" rel="noopener noreferrer"
                                src="RESUME.png" alt="..."
                                // className="card-img-top img-thumbnail rounded"

                                style={{ maxHeight: "380px", width: "auto" }}
                            />
                            <div className="card-body text-center">
                                {/* <h5 className="card-title">Saad's Book of Surgery</h5> */}
                                {/* <p>Price: 1800</p> */}
                                <button
                                    className="btn btn-light"
                                >
                                    <a href="Resume.pdf" target="_blank" rel="noopener noreferrer" style={{ color: props.themeColor }}>
                                        Open
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}