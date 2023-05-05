import { useState, useEffect } from "react";
const App = () => {

    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch("api/courses/GetCourses")
            .then(response => { return response.json() })
            .then(responseJson => {
                setCourses(responseJson)
            })
    }, [])


    return (
        <div className="container">
            <h1>Employees</h1>
            <div className="row">
                <div className="col-sm-12">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>imgURL</th>
                                <th>Ime</th>
                                <th>Pisatel</th>
                                <th>Predmet</th>
                                <th>Opis</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                courses.map((item) => (
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.imgURL}</td>
                                        <td>{item.ime}</td>
                                        <td>{item.pisatel}</td>
                                        <td>{item.predmet}</td>
                                        <td>{item.opis}</td>
                                    </tr>

                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default App;