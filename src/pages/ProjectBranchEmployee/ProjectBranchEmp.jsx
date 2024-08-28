import React from 'react';
import '../../assets/styles/general.css';
import './ProjectBranchEm.css';
import { NavLink } from 'react-router-dom';
import ProjectBranchesSubNav from '../../components/SubNavProjectBranches/ProjectBranchesSubNav';
import search from './image/search.svg';
import plus1 from './image/plus1.svg';
import lessons from './image/lessons.svg';
import dots from './image/3dot.svg';
function ProjectBranchEmp() {
    return (
        <section className="mycontent">
            <ProjectBranchesSubNav />
            {}
            <div className="lesson-search">
                <div>
                    <img src={search} alt="Search" />
                </div>
                <h6 className="fw-normal fs-14px">Search</h6>
            </div>
            {}
            {}
            <div className="table-responsive">
                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
                    <thead>
                        <tr>
                            <th />
                            <th>Chapters</th>
                            <th>Duration</th>
                            <th>Status</th>
                            <th><img src={plus1} alt="plus" /></th>
                            <th />
                            <th />
                            <th />
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <th />
                            <th>Chapters</th>
                            <th>Duration</th>
                            <th>Status</th>
                            <th><img src={plus1} alt="plus" /></th>
                            <th />
                            <th />
                            <th />
                            <th>Action</th>
                        </tr>
                    </tfoot>
                    <tbody>
                        <tr className="partName">
                            <td className="number-cell">1</td>
                            <td>Chapter one</td>
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                            {}
                        </tr>
                        <tr>
                            <td className="number-cell" />
                            <td className="lesson-td">
                                <NavLink to="/projectBranches/project1/emp1/videos">
                                    <div className="d-flex justify-content-between"><span>Lesson 1</span> <img src={lessons} alt="e-learn" /></div>
                                </NavLink>
                            </td>
                            <td>1/h</td>
                            <td className="status Done">Done</td>
                            <td />
                            <td />
                            <td />
                            <td />
                            <td className="text-center"><img src={dots} alt="3dot" /></td>
                        </tr>
                        <tr>
                            <td className="number-cell" />
                            <td className="lesson-td"><div className="d-flex justify-content-between"><span>Lesson 1</span> <img src={lessons} alt="e-learn" /></div></td>
                            <td>1/h</td>
                            <td className="status stuck">Done</td>
                            <td />
                            <td />
                            <td />
                            <td />
                            <td className="text-center"><img src={dots} alt="3dot" /></td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr className="partName">
                            <td className="number-cell">2</td>
                            <td>Chapter two</td>
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                            {}
                        </tr>
                        <tr>
                            <td className="number-cell" />
                            <td className="lesson-td"><div className="d-flex justify-content-between"><span>Lesson 1</span> <img src={lessons} alt="e-learn" /></div></td>
                            <td>1/h</td>
                            <td className="status Done">Done</td>
                            <td />
                            <td />
                            <td />
                            <td />
                            <td className="text-center"><img src={dots} alt="3dot" /></td>
                        </tr>
                        <tr>
                            <td className="number-cell" />
                            <td className="lesson-td"><div className="d-flex justify-content-between"><span>Lesson 1</span> <img src={lessons} alt="e-learn" /></div></td>
                            <td>1/h</td>
                            <td className="status stuck">Done</td>
                            <td />
                            <td />
                            <td />
                            <td />
                            <td className="text-center"><img src={dots} alt="3dot" /></td>
                        </tr>
                    </tbody>
                </table>
                <div className="table-length">
                    <p>Showing 1 to 10 of 58 entries</p>
                    <div className="prev-next">
                        <span>Previous</span>
                        <span className="prev-next-active">1</span>
                        <span>2</span>
                        <span>3</span>
                        <span>Next</span>
                    </div>
                </div>
            </div>
            {}
        </section>
    )
}
export default ProjectBranchEmp