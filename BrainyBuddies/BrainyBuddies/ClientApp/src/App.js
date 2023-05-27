import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from "./Components/login/LoginComponent";
import Register from "./Components/register/RegisterComponent";
import Home from "./Components/home/HomeComponent";
const App = () => {

    // const [courses, setCourses] = useState([])

    // useEffect(() => {
    //     fetch("api/courses/GetCourses")
    //         .then(response => { return response.json() })
    //         .then(responseJson => {
    //             setCourses(responseJson)
    //         })
    // }, [])


    return (
        <div className="App">
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
        </Routes>
        
        </BrowserRouter>
        
      </div>
        // <div className="container">
        //     <h1>Courses</h1>
        //     <div className="row">
        //         <div className="col-sm-12">
        //             <table className="table table-striped">
        //                 <thead>
        //                     <tr>
        //                         <th>Id</th>
        //                         <th>imgURL</th>
        //                         <th>Ime</th>
        //                         <th>Pisatel</th>
        //                         <th>Predmet</th>
        //                         <th>Opis</th>
        //                     </tr>
        //                 </thead>
        //                 <tbody>
        //                     {
        //                         courses.map((item) => (
        //                             <tr>
        //                                 <td>{item.id}</td>
        //                                 <td>{item.imgURL}</td>
        //                                 <td>{item.ime}</td>
        //                                 <td>{item.pisatel}</td>
        //                                 <td>{item.predmet}</td>
        //                                 <td>{item.opis}</td>
        //                             </tr>

        //                         ))
        //                     }
        //                 </tbody>
        //             </table>
        //         </div>
        //     </div>
        // </div>
    )
}

export default App;