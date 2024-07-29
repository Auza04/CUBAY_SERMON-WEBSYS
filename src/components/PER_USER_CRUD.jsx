/* eslint-disable no-useless-catch */
import { useEffect } from 'react';
import CS from '../assets/CSlogo.png';
import { Loop, Tick } from '../lib';
import { useState } from 'react';
import axios from 'axios';
import AddUser from './Actions/AddUser';
import DeleteUser, { SetUserId } from './Actions/DeleteUser';
import EditUser, { FillUserForm } from './Actions/EditUser';
export default function PUCRUD() {
    useEffect(() => {
        Tick(RecognizeFilteringMethod)
    }, []);

    const [data, sendData] = useState({});

    const RecognizeFilteringMethod = () => {
        let search = document.querySelector('#searchUsers');

        if (search.value !== '') return SearchUser(search.value);

        return OrderById();
    };

    const SearchUser = async (keyword) => {
        try {
            const searchKey = {
                account_id: keyword,
                account_username: keyword
            };

            const res = await axios.post('http://cubaysermon.system:4435/accounts/search', searchKey)

            sendData(res.data);
        } catch (e) {
            throw e;
        }
    };

    const OrderById = async () => {
        try {
            const res = await axios.get('http://cubaysermon.system:4435/accounts/order/id')
            sendData(res.data);
        } catch (e) {
            throw e;
        }
    }

    return (
        <>
            <AddUser />
            <EditUser />
            <DeleteUser />

            <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                    <nav className="navbar bg-body-tertiary fixed-top navbar-expand-lg">
                        <div className="container-fluid">
                            <a className="navbar-brand">
                                <img src={CS} style={{ width: '80px', marginLeft: '2rem' }} alt="Logo" />
                            </a>

                            <div className="ml-auto" style={{ marginRight: '2rem' }}>
                                <button className="btn btn-outline-dark">Log Out</button>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            <div className='row justify-content-center' style={{ marginTop: '13rem' }}>
                <div className='col-12 col-sm-12 col-md-10 col-lg-10 p-4' style={{ background: '#f8f9fa', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                    <h2 className="text-center mb-5">Manage Personel</h2>

                    {/* Search Form */}
                    <form className="mb-3">
                        <div className="row">
                            <div className="col-8 col-sm-8 col-md-6 col-lg-4">
                                <input id='searchUsers' type="text" className="form-control" placeholder="Search by name..." />
                            </div>
                            <div className="col-4 col-sm-4 col-md-3 col-lg-2">
                                <button type="button" className="btn btn-success btn-block" data-bs-toggle='modal' data-bs-target='#addUser'>Add</button>
                            </div>
                        </div>
                    </form>

                    {/* Table */}
                    <div className="table-responsive">
                        <table className="table table-bordered table-hover">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col" style={{ minWidth: '150px' }}>Name</th>
                                    <th scope="col">Password</th>
                                    <th scope="col">Role</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <Loop repeat={data.length}>
                                    {(index) => <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>{data[index].account_username}</td>
                                        <td>{data[index].account_password}</td>
                                        <td>{data[index].account_type}</td>
                                        <td>
                                            <button className='btn bg-primary' data-bs-toggle='modal' data-bs-target='#editUser' onClick={() => FillUserForm(data[index].account_username, data[index].account_password, data[index].account_id)}>
                                                <i className="material-icons">edit</i>
                                            </button>
                                            <button className='btn bg-danger mx-3' data-bs-toggle='modal' data-bs-target='#deleteUser' onClick={() => SetUserId(data[index].account_id)}>
                                                <i className="material-icons">delete</i>
                                            </button>
                                        </td>
                                    </tr>}
                                </Loop>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}