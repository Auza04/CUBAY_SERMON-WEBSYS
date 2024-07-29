import CS from '../assets/CSlogo.png'
export default function Barangay_Officials() {
    return (
        <>
            <div className='container'>
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <nav className="navbar bg-body-tertiary fixed-top navbar-expand-lg">
                            <div className="container-fluid">
                                <a className="navbar-brand"> <img src={CS} style={{ width: '80px', marginLeft: '2rem' }} alt="Logo" /></a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation" style={{ marginRight: '2rem' }}>
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                                    <div className="offcanvas-header">
                                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                    </div>
                                    <div className="offcanvas-body-container d-grid justify-content-center" style={{ fontSize: '30px', fontWeight: 'lighter', fontFamily: 'initial', opacity: 0.7 }}>
                                        <div className="offcanvas-body">
                                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                                <li className="nav-item">
                                                    <b><a className="nav-link active" aria-current="page" href='/'>Home</a></b>
                                                </li>
                                                <li className="nav-item">
                                                    <b><a className="nav-link" href="Barangay_Officials" style={{ color: 'black', marginLeft: '2rem', marginRight: '2rem' }}>Barangay Officials</a></b>
                                                </li>
                                                <li className="nav-item">
                                                    <b><a className="nav-link" href="RequestCertificate" style={{ color: 'black' }}>Request Certificate</a></b>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>

                <div className='row p-5 text-center' style={{ marginTop: '10rem' }}>
                    <div className='col-12'>
                        <h1 className='mb-5' style={{ fontSize: '3rem', fontFamily: 'fantasy', fontWeight: 'bold' }}>Barangay Officials</h1>
                    </div>
                </div>

                <div className='row justify-content-center align-items-center text-center' style={{ minHeight: '100vh', marginTop:'-15rem' }}>
                    <div className='col-12 col-md-6 col-lg-4 p-5'>
                        <div className="card shadow-sm" style={{ width: '18rem', margin: 'auto' }}>
                            <img src={CS} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Capt. Bartolome Bertolano</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Barangay Captain</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                <div className='row p-5 text-center' style={{ marginTop: '-10rem' }}>
                    <div className='col-12'>
                        <h1 className='' style={{ fontSize: '3rem', fontFamily: 'fantasy', fontWeight: 'bold' }}>Barangay Kagawad</h1>
                    </div>
                </div>
                
                </div>
                <div className='row justify-content-center align-items-center text-center' style={{ minHeight: '100vh', marginTop:'-15rem' }}>
                    <div className='col-12 col-sm-8 col-md-6 col-lg-4'>
                        <div className="card shadow-sm" style={{ width: '18rem', margin: 'auto' }}>
                            <img src={CS} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Kgwd. Bartolome Bertolano</h5>
                                <h6 className="card-subtitle mb-2 text-muted" style={{fontWeight:'bold'}}>Barangay Kagawad</h6>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-sm-8 col-md-6 col-lg-4 p-5'>
                        <div className="card shadow-sm" style={{ width: '18rem', margin: 'auto' }}>
                            <img src={CS} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Kgwd. Bartolome Bertolano</h5>
                                <h6 className="card-subtitle mb-2 text-muted" style={{fontWeight:'bold'}}>Barangay Kagawad</h6>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-sm-8 col-md-6 col-lg-4 p-5'>
                        <div className="card shadow-sm" style={{ width: '18rem', margin: 'auto' }}>
                            <img src={CS} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Kgwd. Bartolome Bertolano</h5>
                                <h6 className="card-subtitle mb-2 text-muted" style={{fontWeight:'bold'}}>Barangay Kagawad</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}