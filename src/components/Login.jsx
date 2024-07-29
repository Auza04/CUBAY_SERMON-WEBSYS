import CS from '../assets/CSlogo.png';

export default function LogIn() {
    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col'>
                        <nav className="navbar bg-body-tertiary p-3">
                            <div className="container-fluid d-flex justify-content-center align-items-center">
                                <a className="navbar-brand" href="#">
                                    <img src={CS} alt="CS Logo" style={{ width: '80px' }} />
                                </a>
                                <div className="text-center">
                                    <h1 style={{ fontSize: '30px', margin: '0', fontWeight: 'bold' }}>
                                        CUBAY SERMON <br />
                                        INFORMATION SYSTEM
                                    </h1>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-sm-6 col-md-8 col-lg-6 mx-auto' style={{ marginTop: '15rem' }}>
                        <div className="card shadow-lg p-3 mb-5 bg-gray rounded" style={{ maxWidth: '400px', margin: 'auto' }}>
                            <div className="card-body">
                                <h5 className="card-title text-center mb-4">Login</h5>
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div className="d-grid gap-2">
                                        <button type="submit" className="btn btn-primary">Log In</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Background Image */}
            <div className="background-image" style={{ backgroundImage: `url(${CS})`, opacity: '0.1', position: 'absolute', bottom: '0', top: '0', display: 'flex', justifySelf: 'center', alignSelf: 'center', width: '100vw', height: '100vh', zIndex: '-999', backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'center' }}></div>
        </>
    );
}




