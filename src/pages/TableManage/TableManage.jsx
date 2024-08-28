import React from 'react';
import '../../assets/styles/general.css';
import './TableManage.css';
import {NavLink} from 'react-router-dom';
import add from './images/add.svg';
import search from './images/search.svg';
import plus1 from './images/plus1.svg';
import checkCircle1 from './images/check-circle1.svg';
import uploadDocument2 from './images/upload-document2.svg';
import dots from './images/3dot.svg';
import loading from './images/loading-1.svg';
function TableManage() {
    return (
        <div id="secound-part" className="d-flex flex-column">
            {}
            <div className="main-content">
                <div className="course-manage">
                    <h1>Management</h1>
                    <button className="addCourse-btn"><img src={add} alt="add" /> <span>Add new
                        course</span></button>
                </div>
                <div className="search sec-search">
                    <div>
                        <img src={search} alt="Search" />
                    </div>
                    <h6 className="fw-normal fs-14px">Search</h6>
                </div>
                {}
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
                        <thead>
                            <tr>
                                <th />
                                <th>Teachers name</th>
                                <th>Courses</th>
                                <th>Grades</th>
                                <th>Status</th>
                                <th>Due Time date</th>
                                <th>Add Files</th>
                                <th><img src={plus1} alt="plus" /></th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>
                                <NavLink to="/EmployeeProfile">
                                    Ahmed Gad Mohamed
                                </NavLink>
                                    </td>
                                <td>Course 1</td>
                                <td>Grade 1</td>
                                <td className="status Done">Done</td>
                                <td><div className="due-time"><img src={checkCircle1} alt="check" /> <span>13 Feb</span></div></td>
                                <td><img src={uploadDocument2} alt="upload-file" /></td>
                                <td />
                                <td className="text-center"><img src={dots} alt="3dot" /></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Ahmed Gad Mohamed</td>
                                <td>Course 1</td>
                                <td>Grade 1</td>
                                <td className="status stuck">Stuck</td>
                                <td><div className="due-time"><img src={loading} alt="/check" /> <span>13 Feb</span></div></td>
                                <td><img src={uploadDocument2} alt="upload-file" /></td>
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
            </div>
            {}
        </div>
    )
}
export default TableManage