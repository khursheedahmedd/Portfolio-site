import React, { useState, useEffect } from 'react';
import './FAQ.css'; // Import your CSS file for styling

function FAQ(props) {
    const [questions, setQuestions] = useState([]);
    const [newQuestion, setNewQuestion] = useState('');
    const [newAnswer, setNewAnswer] = useState('');

    useEffect(() => {
        // Retrieve questions and answers from localStorage when the component mounts
        const storedQuestions = JSON.parse(localStorage.getItem('faqQuestions'));
        if (storedQuestions) {
            setQuestions(storedQuestions);
        }
    }, []);

    useEffect(() => {
        // Save questions and answers to localStorage whenever questions change
        localStorage.setItem('faqQuestions', JSON.stringify(questions));
    }, [questions]);

    const handleQuestionSubmit = (e) => {
        e.preventDefault();

        if (newQuestion.trim() === '') {
            alert('Please enter a question.');
            return;
        }

        const newQuestionObj = { question: newQuestion, answer: '' };
        setQuestions([...questions, newQuestionObj]);

        setNewQuestion('');
    };

    const handleAnswerSubmit = (index) => {
        const updatedQuestions = [...questions];
        updatedQuestions[index].answer = newAnswer;
        setQuestions(updatedQuestions);

        // Clear the answer input
        setNewAnswer('');
    };

    return (
        <>
            <div className="faq-container" style={{ fontFamily: props.font }} >
                <h2>Have a question? Ask it here:</h2>


                <form onSubmit={handleQuestionSubmit}>
                    <div className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Ask a question..."
                            value={newQuestion}
                            onChange={(e) => setNewQuestion(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-light" style={{ color: props.themeColor }}>Submit Question</button>
                </form>

                {questions.length > 0 && (
                    <div>
                        <h3>Questions:</h3>
                        <ul className="faq-list">
                            {questions.map((q, index) => (
                                <li key={index} className="faq-item">
                                    <strong>Q:</strong> {q.question}
                                    <br />
                                    {q.answer ? (
                                        <div className="faq-answer">
                                            <strong>A:</strong> {q.answer}
                                        </div>
                                    ) : (
                                        <div>
                                            <textarea
                                                className="form-control"
                                                placeholder="Answer this question..."
                                                value={newAnswer}
                                                onChange={(e) => setNewAnswer(e.target.value)}
                                            />
                                            <button
                                                className="btn btn-secondary mt-2"
                                                onClick={() => handleAnswerSubmit(index)}
                                            >
                                                Submit Answer
                                            </button>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div >
        </>

    );
}

export default FAQ;
