

import { useEffect, useState } from 'react';
import CS from '../assets/CSlogo.png';
import AddResident from './Actions/AddResident';
import { Loop, Tick } from '../lib';
import axios from 'axios';
import DeleteResident, { SetResidentId } from './Actions/DeleteResident';
import EditResident, { FillResidentForm } from './Actions/EditResident';
export default function ResCRUD() {
    useEffect(() => {
        Tick(RecognizeFilteringMethod)
    }, []);

    const [data, sendData] = useState({});

    const SearchResidents = async (keyword) => {
        const search = {
            id: keyword,
            name: keyword,
            purok: keyword
        };

        const res = await axios.post('http://localhost:4435/residents/search', search);
        sendData(res.data);
    };

    const OrderById = async () => {
        const res = await axios.get('http://localhost:4435/residents/order/id');
        sendData(res.data);
    }

    const RecognizeFilteringMethod = () => {
        const search = document.querySelector('#SearchResident');

        if (search.value !== "") return SearchResidents(search.value);

        return OrderById();
    }

    return (
        <>
            <AddResident />
            <EditResident />
            <DeleteResident />
            <div className="row">
                <div className="col-12 col-sm-8 col-md-12 col-lg-12">
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
                    <h2 className="text-center mb-5">Manage Residents</h2>

                    {/* Search Form */}
                    <form className="mb-3">
                        <div className="row">
                            <div className="col-8 col-sm-8 col-md-6 col-lg-4">
                                <input id='SearchResident' type="text" className="form-control" placeholder="Search by name..." />
                            </div>
                            <div className="col-4 col-sm-4 col-md-3 col-lg-2">
                                <button type="button" className="btn btn-success btn-block" data-bs-toggle='modal' data-bs-target='#addResident'>Add</button>
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
                                    <th scope="col">Age</th>
                                    <th scope="col">Sex</th>
                                    <th scope="col">Purok</th>
                                    <th scope="col">Birthday</th>
                                    <th scope="col">Contact Number</th>
                                    <th scope="col">CivilStatus</th>
                                    <th scope="col">Occupation</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>

                            <tbody>
                                <Loop repeat={data.length}>
                                    {(index) => <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>{data[index].resident_name}</td>
                                        <td>{data[index].resident_age}</td>
                                        <td>{data[index].resident_sex}</td>
                                        <td>{data[index].resident_purok}</td>
                                        <td>{data[index].resident_birthday}</td>
                                        <td>{data[index].resident_contact_number}</td>
                                        <td>{data[index].resident_civil_status}</td>
                                        <td>{data[index].resident_occupation}</td>
                                        <td>
                                            <button className="btn btn-primary" data-bs-toggle='modal' data-bs-target='#editResident'
                                            onClick={() => FillResidentForm(
                                                data[index].resident_name,
                                                data[index].resident_age,
                                                data[index].resident_sex,
                                                data[index].resident_purok,
                                                data[index].resident_birthday,
                                                data[index].resident_contact_number,
                                                data[index].resident_civil_status,
                                                data[index].resident_occupation,
                                                data[index].resident_id
                                            )}>
                                                <i className="material-icons">edit</i>
                                            </button>
                                            <button className="btn btn-danger mx-3">
                                                <i className="material-icons" data-bs-toggle='modal' data-bs-target='#deleteResident' onClick={() => SetResidentId(data[index].resident_id)}>delete</i>
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

