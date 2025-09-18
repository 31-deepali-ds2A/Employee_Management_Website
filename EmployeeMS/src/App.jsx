import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Component/Login'
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
import Dashboard from './Component/Dashboard'
import Home from './Component/Home'
import Employee from './Component/Employee'
import Category from './Component/Category'
import Profile from './Component/Profile'
import AddCategory from './Component/AddCategory'
import AddEmployee from './Component/AddEmployee'
import EditEmployee from './Component/EditEmployee'
import Start from './Component/Start'
import EmployeeLogin from './Component/EmployeeLogin'
import EmployeeDetail from './Component/EmployeeDetail'
import PrivateRoute from './Component/PrivateRoute'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Start />}></Route>
      <Route path='/adminlogin' element={<Login />}></Route>
      <Route path='/employee_login' element={<EmployeeLogin />}></Route>
      <Route path='/employee_detail/:id' element={<EmployeeDetail />}></Route>
      <Route path='/dashboard' element={
        <PrivateRoute >
          <Dashboard />
        </PrivateRoute>
      }>
        <Route path='' element={<Home />}></Route>
        <Route path='/dashboard/employee' element={<Employee />}></Route>
        <Route path='/dashboard/category' element={<Category />}></Route>
        <Route path='/dashboard/profile' element={<Profile />}></Route>
        <Route path='/dashboard/add_category' element={<AddCategory />}></Route>
        <Route path='/dashboard/add_employee' element={<AddEmployee />}></Route>
        <Route path='/dashboard/edit_employee/:id' element={<EditEmployee />}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App