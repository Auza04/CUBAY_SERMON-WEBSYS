import CS from '../assets/CSlogo.png'
export default function Home() {
    return (
        <>
            <div className='container'>
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12">
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
                                    <div className="offcanvas-body-container d-grid justify-content-center" style={{ fontSize: '30px', fontWeight: 'lighter', fontFamily: 'initial', opacity: 0.7 }}>
                                        <div className="offcanvas-body">
                                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
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
                            </div>
                        </nav>
                    </div>
                </div>

                <div className="row" style={{ marginTop: '10rem' }}>
                    <div className="col-sm-12 col-md-8 col-lg-6 mb-5 mb-lg-0">
                        <h1 style={{ fontSize: '8rem', fontWeight: 'bold', fontFamily: 'sans-serif' }}>CUBAY</h1>
                        <h2 style={{ fontSize: '5rem', fontWeight: 'lighter', marginTop: '-2rem', marginLeft: '1rem' }}>Sermon</h2>
                        <br />
                        <p>
                            Barangay Cubay Sermon represents a cherished tradition within its community, embodying a spirit of shared
                            values and communal reflection. Rooted in the heart of Cubay, this gathering fosters unity and spiritual
                            growth among its residents. Through insightful teachings and discussions, the Barangay Cubay Sermon provides
                            a platform for moral guidance, encouragement, and the exploration of faith. It serves not only as a religious
                            practice but also as a cultural cornerstone, celebrating heritage and nurturing bonds that strengthen the
                            fabric of Cubay society. As residents come together to listen, learn, and engage, the Barangay Cubay Sermon
                            continues to be a vital thread in the rich tapestry of community life, promoting understanding, compassion,
                            and a sense of belonging among all who participate.
                        </p>
                    </div>
                    <br />
                    <div className="col-sm-12 col-md-8 col-lg-6" style={{ width: '30rem', marginTop: '5rem', marginBottom: '5rem', marginLeft: '10px' }}>
                        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={CS} className="d-block w-100" alt="First slide" />
                                </div>
                                <div className="carousel-item">
                                    <img src={CS} className="d-block w-100" alt="Second slide" />
                                </div>
                                <div className="carousel-item">
                                    <img src={CS} className="d-block w-100" alt="Third slide" />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='row justify-content-center mt-5'>
                    <div className='col-12 col-sm-12 col-md-8 col-lg-4' style={{ marginLeft: '-3rem' }}>
                        <h1 style={{ fontSize: '8rem', fontFamily: 'monospace', fontWeight: 'bold', marginBottom: '-1rem' }}>Barangay</h1>
                        <h3 style={{ fontSize: '1.8rem', marginTop: '-2rem', fontWeight: 'lighter', marginLeft: '10px' }}>Update and Announcement</h3>
                    </div>
                </div>

                <div className='row p-5'>
                    <div className='col-12 col-sm-12 col-md-12 col-lg-6' style={{ marginTop: '2rem' }}>
                        <img src={CS} alt="" className='img-fluid' style={{ width: '40rem', marginRight: '2rem' }} />
                    </div>

                    <div className='col-12 col-sm-12 col-md-12 col-lg-6'>
                        <p>
                            Barangay Cubay Sermon represents a cherished tradition within its community, embodying a spirit of shared
                            values and communal reflection. Rooted in the heart of Cubay, this gathering fosters unity and spiritual
                            growth among its residents. Through insightful teachings and discussions, the Barangay Cubay Sermon provides
                            a platform for moral guidance, encouragement, and the exploration of faith. It serves not only as a religious
                            practice but also as a cultural cornerstone, celebrating heritage and nurturing bonds that strengthen the
                            fabric of Cubay society. As residents come together to listen, learn, and engage, the Barangay Cubay Sermon
                            continues to be a vital thread in the rich tapestry of community life, promoting understanding, compassion,
                            and a sense of belonging among all who participate.
                            <br /> <br />

                            Barangay Cubay Sermon represents a cherished tradition within its community, embodying a spirit of shared
                            values and communal reflection. Rooted in the heart of Cubay, this gathering fosters unity and spiritual
                            growth among its residents. Through insightful teachings and discussions, the Barangay Cubay Sermon provides
                            a platform for moral guidance, encouragement, and the exploration of faith. It serves not only as a religious
                            practice but also as a cultural cornerstone, celebrating heritage and nurturing bonds that strengthen the
                            fabric of Cubay society. As residents come together to listen, learn, and engage, the Barangay Cubay Sermon
                            continues to be a vital thread in the rich tapestry of community life, promoting understanding, compassion,
                            and a sense of belonging among all who participate.
                        </p>
                    </div>
                </div>

                <div className='row'>
    <div className='col-12'>
        <footer style={{ backgroundColor: 'gray', color: '#ffffff', padding: '1rem 0', textAlign: 'center', width: '100%', position: 'relative', marginTop:'5rem' }}>
            <div className='container-fluid' style={{ maxWidth: '100%', padding: '0 1rem' }}>
                <div className='row'>
                    <div className='col-12 col-md-4'>
                        <h4 style={{ marginBottom: '1rem' }}>About Us</h4>
                        <p style={{ marginBottom: '0' }}>We are committed to providing the best community experience and fostering a spirit of unity and growth.</p>
                    </div>
                    <div className='col-12 col-md-4'>
                        <h4 style={{ marginBottom: '1rem' }}>Quick Links</h4>
                        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '0' }}>
                            <li><a href='/home' style={{ color: '#ffffff', textDecoration: 'none' }}>Home</a></li>
                            <li><a href='/Barangay_Officials' style={{ color: '#ffffff', textDecoration: 'none' }}>Barangay Officials</a></li>
                            <li><a href='/RequestCertificate' style={{ color: '#ffffff', textDecoration: 'none' }}>Request Certificate</a></li>
                        </ul>
                    </div>
                    <div className='col-12 col-md-4'>
                        <h4 style={{ marginBottom: '1rem' }}>Contact Us</h4>
                        <p style={{ marginBottom: '0.5rem' }}>123 Community St,<br />City, Country</p>
                        <p style={{ marginBottom: '0.5rem' }}>Email: <a href='mailto:info@example.com' style={{ color: '#ffffff', textDecoration: 'none' }}>info@example.com</a></p>
                        <p style={{ marginBottom: '0.5rem' }}>Phone: (123) 456-7890</p>
                        <div>
                            <a href='#' style={{ color: '#ffffff', margin: '0 0.5rem', fontSize: '1.5rem' }}><i className='fab fa-facebook-f'></i></a>
                            <a href='#' style={{ color: '#ffffff', margin: '0 0.5rem', fontSize: '1.5rem' }}><i className='fab fa-twitter'></i></a>
                            <a href='#' style={{ color: '#ffffff', margin: '0 0.5rem', fontSize: '1.5rem' }}><i className='fab fa-instagram'></i></a>
                            <a href='#' style={{ color: '#ffffff', margin: '0 0.5rem', fontSize: '1.5rem' }}><i className='fab fa-linkedin-in'></i></a>
                        </div>
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col-12'>
                        <p style={{ fontSize: '0.8rem', marginBottom: '0' }}>&copy; {new Date().getFullYear()} BSIT2A UA. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</div>

            </div>

        </>
    )
}