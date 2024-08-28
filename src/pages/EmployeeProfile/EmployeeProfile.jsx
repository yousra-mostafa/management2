import React from 'react';
import '../../assets/styles/general.css';
import './EmployeeProfile.css';
import {NavLink} from 'react-router-dom';
import arrow from './image/fi-rr-arrow-small-left.svg';
import photo from './image/photo.svg';
import active from './image/active-tech.svg';
import del from './image/del.svg';
import Edit from './image/Edit.svg';
import User from './image/User.svg';
import up_arrow from './image/up-arrow.svg';
import fire from './image/fire.svg';
import Dots from './image/threeDots.svg';
function EmployeeProfile() {
    return (
        <>
<div className="d-flex flex-column">
        <div className="main-content p-3">
            <NavLink to="/dashboard">
            <div className="course-manage justify-content-start">
                <div>
                    <img src={arrow} alt="arrow" />
                </div>
                <h1>Management</h1>
                {}
            </div>
            </NavLink>
            {}
            <div className="row gap-3">
                <div className="teacher-info col-3 p-3">
                    <div className="tech-photo">
                        <div>
                            <img src={photo} alt="photo" />
                        </div>
                        <div className="tech-active">
                            <h3>Ahmed Mohamed</h3>
                            <div className="d-flex">
                                <img src={active} alt="active" />
                                <p className="green-active">Active</p>
                            </div>
                            <h4>https://Ahmed M.com/stasyabis</h4>
                        </div>
                    </div>
                    <div className="edit-info">
                        {}
                        <img src={del} alt="del" />
                        {}
                        <img src={Edit} alt="Edit" />
                        <div className="hourss">
                            <p>120 <span>SAR</span> / per hour</p>
                        </div>
                    </div>
                    <div className="course-info">
                        <ul className="question">
                            <li>Record how many hours:</li>
                            <li>How much is he<br />
                                getting paid?</li>
                            <li>Subscribed:</li>
                        </ul>
                        <ul className="answer">
                            <li>120 hours</li>
                            <li>2000 SAR</li>
                            <li>21 days ago</li>
                        </ul>
                    </div>
                    <hr className="info-hr" />
                    <div className="basic-info">
                        {}
                        <div className="basic-info-title">
                            <div>
                                <img src={User} alt="user" />
                            </div>
                            <p>Basic information</p>
                        </div>
                        {}
                        {}
                    </div>
                    <div className="toggel-info">
                        <ul className="title-info-ul">
                            <li>Name:</li>
                            <li>Telephone:</li>
                            <li>Email:</li>
                            <li>Notes:</li>
                        </ul>
                        <ul className="my-info-ul">
                            <li>Ahmed Mohamed</li>
                            <li>011232435345</li>
                            <li>https:</li>
                            <li>Add</li>
                        </ul>
                    </div>
                </div>
                <div className="all-coursess col-8 custom-col-8 p-4">
                    <h5>All Courses</h5>
                    <div className="the-courses">
                        {}
                        <div className="course">
                            <div className="my-course">
                                <div className="putImage-course">
                                </div>
                                <div className="course-name">
                                    <h4>E-Learning and digital cultures</h4>
                                    <p className="duration">Feb 4, 2024 - Feb 22, 2024</p>
                                </div>
                            </div>
                            <div className="course-rate">
                                <div>
                                    <img src={fire} alt="fire" />
                                    <span>6.4</span>
                                </div>
                                <button className="view-course-btn">
                                    View Course
                                </button>
                                <img src={Dots} alt="Dots" />
                            </div>
                        </div>
                        {}
                        <div className="course">
                            <div className="my-course">
                                <div className="putImage-course">
                                </div>
                                <div className="course-name">
                                    <h4>E-Learning and digital cultures</h4>
                                    <p className="duration">Feb 4, 2024 - Feb 22, 2024</p>
                                </div>
                            </div>
                            <div className="course-rate">
                                <div>
                                    <img src={fire} alt="fire" />
                                    <span>6.4</span>
                                </div>
                                <button className="view-course-btn">
                                    View Course
                                </button>
                                <img src={Dots} alt="Dots" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {}
        </div>
         </div>
       </>
    )
}
export default EmployeeProfile