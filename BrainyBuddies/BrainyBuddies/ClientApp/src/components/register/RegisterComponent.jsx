// import React, { useState, useEffect } from 'react';
// import './register.css';
// import { HiPlusCircle } from 'react-icons/hi'
// import { HiMinusCircle } from 'react-icons/hi'
// import { RiCloseCircleFill } from 'react-icons/ri'
// import { useNavigate } from "react-router-dom";

// const Register = () => {

//     const usenavigate = useNavigate();

//     const [member, setMember] = useState({
//         name: '',
//         surname: '',
//         age: '',
//         gender: '',
//         username: '',
//         password: '',
//         email: '',
//     });

//     const [role, setRole] = useState('');
//     const [showSecondModal, setShowSecondModal] = useState(false);

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setMember({ ...member, [name]: value });
//     };

//     const handleRoleChange = (selectedRole, callback) => {
//         setRole(selectedRole, () => {
//             callback(); // Call the callback function after setting the role state
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setShowSecondModal(true);
//     };

//     useEffect(() => {
//         if (role !== '') {
//             handleRegister();
//         }
//     }, [role]);

//     const handleRegister = async () => {
//         try {
//             await fetch('/api/register/CreateMember', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },

//                 body: JSON.stringify({ ...member, role }),
//             });

//             // Handle successful registration
//             console.log('Member registered successfully!');
//             usenavigate('/login');
//         } catch (error) {
//             // Handle registration error
//             console.error(error);
//         }
//     };

//     return (
//         <div>
//             {/* First Modal */}
//             {!showSecondModal && (
//                 <div class='container'>
//                     <div class='sign-up'>
//                         <div class='icons'>
//                             <HiPlusCircle class='icon' />
//                             <HiMinusCircle class='icon' />
//                             <RiCloseCircleFill class='icon' />
//                         </div>
//                         <h2>Sign Up</h2>
//                     </div>
//                     <div class="content">
//                         <form onSubmit={handleSubmit}>
//                             <input
//                                 type="text"
//                                 name="name"
//                                 placeholder="Name"
//                                 value={member.name}
//                                 className="form-control"
//                                 onChange={handleInputChange}
//                             />
//                             <input
//                                 type="text"
//                                 name="surname"
//                                 placeholder="Surname"
//                                 value={member.surname}
//                                 className="form-control"
//                                 onChange={handleInputChange}
//                             />
//                             <input
//                                 type="number"
//                                 name="age"
//                                 placeholder="Age"
//                                 value={member.age}
//                                 className="form-control"
//                                 onChange={handleInputChange}
//                             />
//                             <input
//                                 type="text"
//                                 name="gender"
//                                 placeholder="Gender"
//                                 value={member.gender}
//                                 className="form-control"
//                                 onChange={handleInputChange}
//                             />
//                             <input
//                                 type="text"
//                                 name="username"
//                                 placeholder="Username"
//                                 value={member.username}
//                                 className="form-control"
//                                 onChange={handleInputChange}
//                             />
//                             <input
//                                 type="password"
//                                 name="password"
//                                 placeholder="Password"
//                                 value={member.password}
//                                 className="form-control"
//                                 onChange={handleInputChange}
//                             />
//                             <input
//                                 type="email"
//                                 name="email"
//                                 placeholder="Email"
//                                 value={member.email}
//                                 className="form-control"
//                                 onChange={handleInputChange}
//                             />
//                             <button type="submit" >Create Account</button>
//                         </form>
//                     </div>
//                 </div>
//             )}

//             {/* Second Modal */}
//             {showSecondModal && (
//                 <div className='container'>
//                     <div class='sign-up'>
//                         <div class='icons'>
//                             <HiPlusCircle class='icon' />
//                             <HiMinusCircle class='icon' />
//                             <RiCloseCircleFill class='icon' />
//                         </div>
//                         <h2>Sign Up</h2>
//                     </div>
//                     <div className="content">
//                         <h2>Create Account</h2>
//                         <h4>Who is primarily going to use this content?</h4>
//                         <button
//                             onClick={() => handleRoleChange('Admin')}
//                             className={role === 'Admin' ? 'selected' : ''}
//                         >
//                             Admin
//                         </button>
//                         <button
//                             onClick={() => handleRoleChange('Teacher')}
//                             className={role === 'Teacher' ? 'selected' : ''}
//                         >
//                             Teacher
//                         </button>
//                         <button
//                             onClick={() => handleRoleChange('Parent')}
//                             className={role === 'Parent' ? 'selected' : ''}
//                         >
//                             Parent
//                         </button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Register;