import React from 'react';
import '../../assets/styles/general.css'
import './ProjectBranchesSubNav.css';
function ProjectBranchesSubNav() {
    return (
        <>
            <div className="Subjects">
                <p>Subjects <span>Primary,</span> <span> Grade 1</span></p>
            </div>
            {}
            <nav className="nav2 d-flex align-items-center">
                <div>
                    <ul className="d-flex gap-4">
                        {}
                        <li><a href="#">First term</a></li>
                        <li><a href="#">Second term</a></li>
                    </ul>
                </div>
            </nav>
            <hr className="hr-nav2" />
            {}
        </>
    )
}
export default ProjectBranchesSubNav