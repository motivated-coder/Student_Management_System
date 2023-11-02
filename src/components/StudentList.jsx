import React, { useEffect, useState } from 'react'
import { getAllStudents } from '../rest_calls/allRestCalls'

const StudentList = () => {

    const [studentList, setStudentList] = useState([])


    useEffect(() => {

        getAllStudents().then((response) => {
            console.log("Received all students list ", response.data)
            setStudentList(response.data)
        }).catch((error) => console.log(error))

    }, [])


    return (
        <>
            <div className='container'>
                <h2 className='text-center'>List of Students</h2>
                <table className='table table-bordered table-striped'>
                    <thead>
                        <tr>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Email</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {studentList.map((student) => {
                            <tr>
                                <td>{student.firstname}</td>
                                <td>{student.lastname}</td>
                                <td>{student.username}</td>
                            </tr>
                        })}


                    </tbody>
                </table>
            </div>
        </>
    )
}

export default StudentList