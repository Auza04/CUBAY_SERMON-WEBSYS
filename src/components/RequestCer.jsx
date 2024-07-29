import ID from '../assets/ID.png';
import H from '../assets/House.png';
import CER2 from '../assets/Certificate2.png';
import CER from '../assets/Certificate1.png';
import CS from '../assets/CSlogo.png';
import Notify from './Actions/Notify';

export default function Request_Certificate() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="navbar bg-body-tertiary fixed-top navbar-expand-lg">
                            <div className="container-fluid">
                                <a className="navbar-brand"><img src={CS} style={{ width: '80px', marginLeft: '2rem' }} alt="Logo" /></a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation" style={{ marginRight: '2rem' }}>
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                                    <div className="offcanvas-header">
                                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                    </div>
                                    <div className="offcanvas-body">
                                        <ul className="navbar-nav justify-content-center flex-grow-1 pe-3" style={{ fontSize: '30px', fontWeight: 'lighter', fontFamily: 'initial', opacity: 0.7 }}>
                                            <li className="nav-item">
                                                <b><a className="nav-link active" aria-current="page" href='/'>Home</a></b>
                                            </li>
                                            <li className="nav-item">
                                                <b><a className="nav-link" href="BarangayOfficials" style={{ color: 'black', marginLeft: '2rem', marginRight: '2rem' }}>Barangay Officials</a></b>
                                            </li>
                                            <li className="nav-item">
                                                <b><a className="nav-link" href="RequestCertificate" style={{ color: 'black' }}>Request Certificate</a></b>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>

                <div className='row justify-content-center text-center' style={{ marginTop: '15rem' }}>
                    {/* Adjusted the row to center all cards */}
                    {[
                        { id: CER, alt: 'Certificate1', modalId: 'd1Dlg' },
                        { id: CER2, alt: 'Certificate2', modalId: 'd2Dlg' },
                        { id: H, alt: 'House', modalId: 'd3Dlg' },
                        { id: ID, alt: 'ID', modalId: 'd4Dlg' }
                    ].map((card, index) => (
                        <div key={index} className='col-12 col-sm-6 col-md-4 col-lg-3 mb-4'>
                            <div className="card border-0 shadow-lg mx-auto" style={{ width: '18rem', height: '27rem', borderRadius: '1rem' }}>
                                <img src={card.id} className="card-img-top mx-auto d-block" alt={card.alt} style={{ width: '12rem', marginTop: '2rem' }} />
                                <div className="card-body text-center">
                                    <h5 className="card-title font-weight-bold">Request</h5>
                                    <h5 className="card-title font-weight-bold mb-3">Brgy. Certificate</h5>

                                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#${card.modalId}`} style={{ marginTop: '2rem' }}>
                                        Request
                                    </button>

                                    <div className="modal fade" id={card.modalId} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>

                                                <div className="modal-body">
                                                    <form>
                                                        <div className="mb-3">
                                                            <label htmlFor="d1Txt" className="form-label">Please enter your name here</label>
                                                            <input id='d1Txt' type="text" className="form-control" />
                                                        </div>
                                                        <button type="button" className="btn btn-primary" onClick={() => Notify(document.getElementById('d1Txt').value)}>Submit</button>
                                                    </form>
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
