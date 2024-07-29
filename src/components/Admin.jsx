import { useEffect, useState } from 'react';
import CS from '../assets/CSlogo.png';
import CER2 from '../assets/Certificate1.png';
import Tick from '../lib/components/Tick';
import axios from 'axios';
import NotifyDlg from './NotifyDlg';

export default function CRUD() {
    useEffect(() => {
        Tick(GetNotifications)
    }, []);

    const [data, sendData] = useState({});

    const GetNotifications = async () => {
        const res = await axios.get('http://cubaysermon.system:4435/notifications');
        sendData(res.data);
    }

    useEffect(() => {
        Tick(GetPersonnel)
    }, []);

    const [personnel, sendPersonnel] = useState([]);

    const GetPersonnel = async () => {
        const res = await axios.get('http://cubaysermon.system:4435/accounts/order/id');
        sendPersonnel(res.data);
    }

    useEffect(() => {
        Tick(GetResidents)
    }, []);

    const [residents, sendResidents] = useState([]);

    const GetResidents = async () => {
        const res = await axios.get('http://cubaysermon.system:4435/residents/order/id');
        sendResidents(res.data);
    }
    
    useEffect(() => {
        Tick(GetNotifications)
    }, [])

    return (
        <>
        <NotifyDlg />
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                    <nav className="navbar bg-body-tertiary fixed-top navbar-expand-lg">
                        <div className="container-fluid">
                            <a className="navbar-brand">
                                <img src={CS} style={{ width: '80px', marginLeft: '2rem' }} alt="Logo" />
                            </a>

                            <div className="flex">
                                <button type='button' id='liveToastBtn' className="btn btn-primary position-relative mx-5" data-bs-toggle='modal' data-bs-target='#notificationsDlg'>
                                    <i className="material-icons">notifications_active</i>
                                    <span className="position-absolute top-20 start-80 badge translate-middle rounded-pill bg-danger">
                                        {data.length}
                                    </span>
                                </button>
                                <button className="btn btn-outline-dark">Log Out</button>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>


            <div className='row'>
                <div className='col-12 col-sm-12 col-md-12 col-lg-12'>
                    <div className='row text-center' style={{ marginTop: '15rem' }}>
                        <div className='col-12 col-sm-6 col-md-4 col-lg-3 mb-4 pop'>
                            <div className="card border-0 shadow-lg mx-auto" style={{ width: '18rem', height: '27rem', borderRadius: '1rem', backgroundColor: '#f0f0f0' }}>
                                <img src={CER2} className="card-img-top mx-auto d-block" alt="Card image cap" style={{ width: '12rem', marginTop: '2rem' }} />
                                <div className="card-body text-center">
                                    <h5 className="card-title font-weight-bold" style={{ fontWeight: 'bold' }}>Manage</h5>
                                    <h5 className="card-title font-weight-bold mb-3" style={{ fontWeight: 'bold' }}>Resident</h5>
                                    <a href="/manage_residents" className="btn btn-primary" style={{ width: '8rem', marginTop: '1.5rem' }}>Manage</a>
                                </div>
                            </div>
                        </div>


                        <div className='col-12 col-sm-6 col-md-4 col-lg-3 mb-4 pop' style={{ marginRight: '-5rem', marginLeft: '-5rem' }}>
                            <div className="card border-0 shadow-lg mx-auto" style={{ width: '18rem', height: '27rem', borderRadius: '1rem', backgroundColor: '#f0f0f0' }}>
                                <img src={CER2} className="card-img-top mx-auto d-block" alt="Card image cap" style={{ width: '12rem', marginTop: '2rem' }} />
                                <div className="card-body text-center">
                                    <h5 className="card-title font-weight-bold" style={{ fontWeight: 'bold' }}>Manage</h5>
                                    <h5 className="card-title font-weight-bold mb-3" style={{ fontWeight: 'bold' }}>Personnel/Users</h5>
                                    <a href="/manage_personnel_users" className="btn btn-primary" style={{ width: '8rem', marginTop: '1.5rem' }}>Manage</a>
                                </div>
                            </div>
                        </div>

                        <div className='col-12 col-sm-6 col-md-4 col-lg-3 mb-4 pop'>
                            <div className="card border-0 shadow-lg mx-auto" style={{ width: '18rem', height: '27rem', borderRadius: '1rem', backgroundColor: '#f0f0f0' }}>
                                <img src={CER2} className="card-img-top mx-auto d-block" alt="Card image cap" style={{ width: '12rem', marginTop: '2rem' }} />
                                <div className="card-body text-center">
                                    <h5 className="card-title font-weight-bold" style={{ fontWeight: 'bold' }}>Manage</h5>
                                    <h5 className="card-title font-weight-bold mb-3" style={{ fontWeight: 'bold' }}>Documents</h5>
                                    <a href="manage_documents" className="btn btn-primary" style={{ width: '8rem', marginTop: '1.5rem' }}>Manage</a>
                                </div>
                            </div>
                        </div>

                        <div className='col-12 col-sm-12 col-md-12 col-lg-3' style={{ marginLeft: '7rem', marginTop: '-5rem' }}>
                            <div className='card' style={{ width: '20rem', backgroundColor: 'lightgray' }}>
                                <div className='card-body'>
                                    <h1 style={{ marginBottom: '-1rem' }}><i className="material-icons icon">person</i></h1>
                                    <h2 style={{ fontSize: '5rem', marginTop: '1rem', color: 'white' }}>
                                        {residents.length}
                                    </h2>
                                    <h3>Total Residents</h3>
                                </div>
                            </div>

                            <div className='col-12 col-sm-12 col-md-12 col-lg-3' style={{ marginTop: '2rem' }}>
                                <div className='card' style={{ width: '20rem', backgroundColor: 'lightgray' }}>
                                    <div className="card-body">
                                        <h1 style={{ marginBottom: '-2rem' }}>
                                            <i className="material-icons" style={{ fontSize: '8rem' }}>admin_panel_settings</i>
                                        </h1>
                                        <h2 style={{ fontSize: '5rem', marginTop: '1rem', color: 'white' }}>
                                            {personnel.length}
                                        </h2>
                                        <h3>Total Personnels</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}