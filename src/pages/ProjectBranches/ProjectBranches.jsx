import React from 'react';
import '../../assets/styles/general.css';
import './ProjectBranch.css';
import {NavLink} from 'react-router-dom';
import ProjectBranchesSubNav from '../../components/SubNavProjectBranches/ProjectBranchesSubNav';
import GreenDot from './image/p-1.svg';
import horizontalDots from './image/horizontal-dots.svg';
import arrowRight from './image/arrow-caret-right.svg';
import addCircle from './image/add-circle.svg';
import dot2 from './image/p-2.svg';
import dot3 from './image/p-3.svg';
import dot4 from './image/p-4.svg';
import dot5 from './image/p-5.svg';
import dot6 from './image/p-6.svg';
const titleLinks = [
    { name: 'Subjects', path: '/primary/grade1/math' },
    { name: 'Primary', path: '/primary/grade1/science' }
  ];
  const ProjectBranchesLinks = [
    { name: 'Grade 1', path: '/primary/grade1/math' },
    { name: 'Grade 2', path: '/primary/grade1/science' },
    { name: 'Grade 3', path: '/primary/grade1/history' },
    { name: 'Grade 4', path: '/primary/grade1/english' },
  ];
const projectTwoLevelsLinks = [
    {name: 'First term', path: '/f/f'},
    {name: 'Second term', path: 's/s'}
]
function ProjectBranches() {
    return (
        <section className='mycontent'>
            <ProjectBranchesSubNav/>
            {}
            <div className="projectsByName d-flex gap-2">
                {}
                <div className="filed">
                    <div className="filed-title-cont d-flex justify-content-between">
                        <div className="projects-name">
                            <img src={GreenDot} alt="dot" />
                            <span>Arabic</span>
                            <span className="offer">50%</span>
                        </div>
                        <div>
                            <img src={horizontalDots} alt="3dots" />
                        </div>
                    </div>
                    <hr className="green-hr" />
                    <div className="all-courses d-flex flex-column gap-2">
                        {}
                        <div className="card custom-card">
                            <div className="card-body">
                                <h5 className="card-title">Mr.Mahmoud Ali</h5>
                                <p className="card-text">ID: 123</p>
                                <p className="hours"><span>10/h</span> <span>20/h</span></p>
                                <hr className="hr-card" />
                                <NavLink to="/projectBranches/project1/emp1">
                                <span className="btn-color"><span>View all details</span> <img src={arrowRight} alt="arrow" /></span>
                                </NavLink>
                            </div>
                        </div>
                        {}
                        <div className="last-card text-center">
                            <img src={addCircle} alt="add" />
                        </div>
                    </div>
                </div>
                {}
                {}
                <div className="filed">
                    <div className="filed-title-cont d-flex justify-content-between">
                        <div className="projects-name">
                            <img src={dot2} alt="dot" />
                            <span>English</span>
                            {}
                        </div>
                        <div>
                            <img src={horizontalDots} alt="3dots" />
                        </div>
                    </div>
                    <hr className="blue-hr" />
                    <div className="all-courses d-flex flex-column gap-2">
                        {}
                        <div className="card custom-card">
                            <div className="card-body">
                                <h5 className="card-title">Mr.Mahmoud Ali</h5>
                                <p className="card-text">ID: 123</p>
                                <p className="hours"><span>10/h</span> <span>20/h</span></p>
                                <hr className="hr-card" />
                                <a href="#" className="btn-color"><span>View all details</span> <img src={arrowRight} alt="arrow" /></a>
                            </div>
                        </div>
                        {}
                        <div className="last-card text-center">
                            <img src={addCircle} alt="add" />
                        </div>
                    </div>
                </div>
                {}
                {}
                <div className="filed">
                    <div className="filed-title-cont d-flex justify-content-between">
                        <div className="projects-name">
                            <img src={dot3} alt="dot" />
                            <span>Math</span>
                            {}
                        </div>
                        <div>
                            <img src={horizontalDots} alt="3dots" />
                        </div>
                    </div>
                    <hr className="purple-hr" />
                    <div className="all-courses d-flex flex-column gap-2">
                        {}
                        <div className="card custom-card">
                            <div className="card-body">
                                <h5 className="card-title">Mr.Mahmoud Ali</h5>
                                <p className="card-text">ID: 123</p>
                                <p className="hours"><span>10/h</span> <span>20/h</span></p>
                                <hr className="hr-card" />
                                <a href="#" className="btn-color"><span>View all details</span> <img src={arrowRight} alt="arrow" /></a>
                            </div>
                        </div>
                        {}
                        <div className="last-card text-center">
                            <img src={addCircle} alt="add" />
                        </div>
                    </div>
                </div>
                {}
                {}
                <div className="filed">
                    <div className="filed-title-cont d-flex justify-content-between">
                        <div className="projects-name">
                            <img src={dot4} alt="dot" />
                            <span>Sciences</span>
                            {}
                        </div>
                        <div>
                            <img src={horizontalDots} alt="3dots" />
                        </div>
                    </div>
                    <hr className="yellow-hr" />
                    <div className="all-courses d-flex flex-column gap-2">
                        {}
                        <div className="card custom-card">
                            <div className="card-body">
                                <h5 className="card-title">Mr.Mahmoud Ali</h5>
                                <p className="card-text">ID: 123</p>
                                <p className="hours"><span>10/h</span> <span>20/h</span></p>
                                <hr className="hr-card" />
                                <a href="#" className="btn-color"><span>View all details</span> <img src={arrowRight} alt="arrow" /></a>
                            </div>
                        </div>
                        {}
                        <div className="last-card text-center">
                            <img src={addCircle} alt="add" />
                        </div>
                    </div>
                </div>
                {}
                {}
                <div className="filed">
                    <div className="filed-title-cont d-flex justify-content-between">
                        <div className="projects-name">
                            <img src={dot5} alt="dot" />
                            <span>Geography</span>
                            {}
                        </div>
                        <div>
                            <img src={horizontalDots} alt="3dots" />
                        </div>
                    </div>
                    <hr className="aqua-hr" />
                    <div className="all-courses d-flex flex-column gap-2">
                        {}
                        <div className="card custom-card">
                            <div className="card-body">
                                <h5 className="card-title">Mr.Mahmoud Ali</h5>
                                <p className="card-text">ID: 123</p>
                                <p className="hours"><span>10/h</span> <span>20/h</span></p>
                                <hr className="hr-card" />
                                <a href="#" className="btn-color"><span>View all details</span> <img src={arrowRight} alt="arrow" /></a>
                            </div>
                        </div>
                        {}
                        <div className="last-card text-center">
                            <img src={addCircle} alt="add" />
                        </div>
                    </div>
                </div>
                {}
                {}
                <div className="filed">
                    <div className="filed-title-cont d-flex justify-content-between">
                        <div className="projects-name">
                            <img src={dot6} alt="dot" />
                            <span>Geography</span>
                            {}
                        </div>
                        <div>
                            <img src={horizontalDots} alt="3dots" />
                        </div>
                    </div>
                    <hr className="aqua-hr" />
                    <div className="all-courses d-flex flex-column gap-2">
                        {}
                        <div className="card custom-card">
                            <div className="card-body">
                                <h5 className="card-title">Mr.Mahmoud Ali</h5>
                                <p className="card-text">ID: 123</p>
                                <p className="hours"><span>10/h</span> <span>20/h</span></p>
                                <hr className="hr-card" />
                                <a href="#" className="btn-color"><span>View all details</span> <img src={arrowRight} alt="arrow" /></a>
                            </div>
                        </div>
                        {}
                        <div className="last-card text-center">
                            <img src={addCircle} alt="add" />
                        </div>
                    </div>
                </div>
                {}
            </div>
            {}
        </section>
    )
}
export default ProjectBranches