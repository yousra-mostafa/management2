import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./index.css"
import './App.css'
import {BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Layout';
import TableManage from './pages/TableManage/TableManage';
import ProjectBranches from './pages/ProjectBranches/ProjectBranches';
import ProjectBranchEmp from './pages/ProjectBranchEmployee/ProjectBranchEmp';
import EmployeeVideo from './pages/EmployeeVideo/EmployeeVideo';
import EmployeeProfile from './pages/EmployeeProfile/EmployeeProfile';
import NotFound from './components/NotFound/NotFound';


function App() {

  return (
  <Router>
    <Routes>
      <Route path='/' element ={<Layout />}>
      <Route index element ={<Navigate to="/dashboard" /> }/>
      <Route path='/dashboard' element ={<TableManage />}/>
      <Route path='/EmployeeProfile' element = {<EmployeeProfile />} />
      <Route path='/projectBranches/project1' element ={<ProjectBranches />}/>
      <Route path='/projectBranches/project1/emp1' element ={<ProjectBranchEmp />}/>
      <Route path='/projectBranches/project1/emp1/videos' element = {<EmployeeVideo />}/>
      <Route path="*" element={<NotFound />} />

      </Route>
    </Routes>
  </Router>

  )
}

export default App
