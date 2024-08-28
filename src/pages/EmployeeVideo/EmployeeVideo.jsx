import React from 'react';
import '../../assets/styles/general.css';
import './EmployeeVideo.css';
import search from './image/search.svg';
import learning from './image/e-learning1.svg';
import review from './image/review.svg';
import done from './image/done.svg';
import GrowthDesktop from './image/GrowthDesktop.mp4';
function EmployeeVideo() {
    return (
        <section className="mycontent">
            {}
            <div className="lesson-search">
                <div>
                    <img src={search} alt="Search" />
                </div>
                <h6 className="fw-normal fs-14px">Search</h6>
            </div>
            {}
            {}
            <section className="lessonsDetalsContainer row gap-3">
                <aside className="allChapters col-3">
                    <h2>All Chapters</h2>
                    <div className="the-container container">
                        <hr className="my-hr ms-md-2 me-2" />
                        <div className="scroll">
                            {}
                            <div className="chapters">
                                <ul className="main-chapters-ul">
                                    <li>
                                        <h4 className="ul-title">Chapter one</h4>
                                        <ul className="sub-list">
                                            <li><span>Lesson 1</span> <img src={learning} alt ="e-learn" /></li>
                                            <li><span>Lesson 1</span> <img src={learning} alt="e-learn" /></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <h4 className="ul-title">Chapter two</h4>
                                        <ul className="sub-list">
                                            <li><span>Lesson 1</span> <img src={learning} alt= "e-learn" /></li>
                                            <li><span>Lesson 1</span> <img src={learning} alt="e-learn" /></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <h4 className="ul-title">Chapter three</h4>
                                        <ul className="sub-list">
                                            <li><span>Lesson 1</span> <img src={learning} alt= "e-learn" /></li>
                                            <li><span>Lesson 1</span> <img src={learning} alt= "e-learn" /></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </aside>
                <aside className="myVedio col-8">
                    <h3>Lesson 1</h3>
                    <div className="container">
                        <hr className="my-hr" />
                        <video controls id="video1">
                            <source src={GrowthDesktop} type="video/mp4" />
                            {}
                            Your browser does not support video formats.
                        </video>
                        <form>
                            <div className="comment-div">
                                {}
                                {}
                                <textarea placeholder="+ Add comment" name="comment" id="comment" defaultValue={""} />
                            </div>
                            {}
                            <div className="d-flex justify-content-end gap-3">
                                <button type="reset" className="my-btn" id="review"><span>Review</span> <img src={review} alt="review" /></button>
                                <button type="reset" className="my-btn" id="done"><span>Done</span> <img src={done} alt="Done" /></button>
                            </div>
                            {}
                        </form>
                    </div>
                </aside>
            </section>
            {}
        </section>
    )
}
export default EmployeeVideo