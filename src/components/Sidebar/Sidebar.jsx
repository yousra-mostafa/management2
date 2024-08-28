import React, { useEffect } from 'react'
import '../../assets/styles/general.css'
import './Sidebar.css';
import { NavLink } from 'react-router-dom';
import { setupSidebarToggle, setupDropdownToggle } from '../../utils/main'
import logo from '../../assets/image-sidebar&tecProfile/small-logo.svg'
import arrowToggelNav from '../../assets/image-sidebar&tecProfile/arrow.svg'
import whiteDot from '../../assets/image-sidebar&tecProfile/dot2.svg'
import grayDot from '../../assets/image-sidebar&tecProfile/dot.svg'
import dropdownArrowBottom from '../../assets/image-sidebar&tecProfile/arrow-down-blue.svg'
import dropdownArrowRight from '../../assets/image-sidebar&tecProfile/arrow-right.svg'
import gradeLogo from '../../assets/image-sidebar&tecProfile/medal.svg'
function Sidebar() {
  useEffect(() => {
    setupSidebarToggle();
    setupDropdownToggle();
  }, []);
  return (
    <>
      <div>
        <nav id="my-offcanvas" className="my-offcanvas side-nav">
          <div className="dash-name d-flex justify-content-between">
            <div className="my-logo">
              <div>
                <img src={logo} alt="logo" />
              </div>
              <h5 className="fs-18px fw-medium ms-1">Project M.</h5>
            </div>
            <img id="my-toggleOffcanvas" className="my-toggle-button" src={arrowToggelNav} alt="button" />
          </div>
          <div>
            <ul className="d-flex flex-column ms-2 nav-list fs-14px fw-normal">
              <li className="myActive">
                <NavLink to="/dashboard">
                  <img className="me-1" src={whiteDot} alt="1-" /> <span>Management</span>
                </NavLink>
              </li>
              <li>
                <div className="d-flex justify-content-between">
                  <div><img className="me-1" src={grayDot} alt="2-" /> <span>Courses</span></div> <img src={dropdownArrowBottom} alt="img" />
                </div>
                <div className="sub-courses-list">
                  <ul>
                    <li className="dropdown-li"> <div className="myDropdownTitle"><img src={dropdownArrowRight} alt="img" /><span> Primary</span></div>
                      <div className="project-sub-group course-grades-list">
                        <ul className="text-end mt-2">
                          <li>
                            <NavLink to="/projectBranches/project1">
                            <img src={gradeLogo} alt="1-" /> <span>Grade 1</span>
                            </NavLink>
                          </li>
                          <li>
                          {}
                            <img src={gradeLogo} alt="2-" /> <span>Grade 2</span>
                            {}
                            </li>
                          <li>
                          {}
                            <img src={gradeLogo} alt="3-" /> <span>Grade 3</span>
                            {}
                            </li>
                          <li>
                          {}
                            <img src={gradeLogo} alt="4-" /> <span>Grade 4</span>
                            {}
                            </li>
                          <li>
                          {}
                            <img src={gradeLogo} alt="5-" /> <span>Grade 5</span>
                            {}
                            </li>
                          <li>
                          {}
                            <img src={gradeLogo} alt="6-" /> <span>Grade 6</span>
                            {}
                            </li>
                        </ul>
                      </div>
                    </li>
                    <li className="dropdown-li"> <div className="myDropdownTitle"><img src={dropdownArrowRight} alt="arrow" /> <span> Preparatory</span></div>
                      <div className="project-sub-group course-grades-list">
                        <ul className="text-end mt-2">
                          <li><img src={gradeLogo} alt="1-" /> Grade 1</li>
                          <li><img src={gradeLogo} alt="2-" /> Grade 2</li>
                          <li><img src={gradeLogo} alt="3-" /> Grade 3</li>
                          <li><img src={gradeLogo} alt="4-" /> Grade 4</li>
                          <li><img src={gradeLogo} alt="5-" /> Grade 5</li>
                          <li><img src={gradeLogo} alt="6-" /> Grade 6</li>
                        </ul>
                      </div>
                    </li>
                    <li className="dropdown-li"> <div className="myDropdownTitle"><img src={dropdownArrowRight} alt="arrow" /> <span> Secondary</span> </div>
                      <div className="project-sub-group course-grades-list">
                        <ul className="text-end mt-2">
                          <li><img src={gradeLogo} alt="1-" /> Grade 1</li>
                          <li><img src={gradeLogo} alt="2-" /> Grade 2</li>
                          <li><img src={gradeLogo} alt="3-" /> Grade 3</li>
                          <li><img src={gradeLogo} alt="4-" /> Grade 4</li>
                          <li><img src={gradeLogo} alt="5-" /> Grade 5</li>
                          <li><img src={gradeLogo} alt="6-" /> Grade 6</li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li><img className="me-1" src={grayDot} alt="-" />Teachers</li>
            </ul>
          </div>
        </nav>
        {}
      </div>
    </>
  )
}
export default Sidebar;