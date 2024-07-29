import axios from "axios";

async function CreateResident() {
    const date = new Date();
    const year = date.getUTCFullYear();
    const month = date.getUTCMonth() <= 9 ? `0${date.getUTCMonth()}` : date.getUTCMonth();
    const day = date.getUTCDate() <= 9 ? `0${date.getUTCDate()}` : date.getUTCDate();

    let a = document.querySelector('#addName');
    let b = document.querySelector('#addAge');
    let c = document.querySelector('#addSex');
    let d = document.querySelector('#addPurok');
    let e = document.querySelector('#addDOB');
    let f = document.querySelector('#addCP');
    let g = document.querySelector('#addStatus');
    let h = document.querySelector('#addOccupation');

    const data = {
        name: a.value,
        age: b.value,
        sex: c.value,
        dob: d.value,
        purok: e.value,
        cpno: f.value,
        status: g.value,
        occupation: h.value,
        creation: `${year}${month}${day}`
    };

    await axios.post('http://cubaysermon.system:4435/residents/post', data)
}

export default function AddResident() {
    document.body.addEventListener('change', () => {
        let done = document.querySelector('#confirmAddResident');

        if (addName.value !== '' &&
            addAge.value !== '' &&
            addSex.value !== '' &&
            addPurok.value !== '' &&
            addDOB.value !== '' &&
            addCP.value !== '' &&
            addStatus.value !== '' &&
            addOccupation.value !== ''
        )
            return done.className = 'btn btn-primary';

        return done.className = 'btn btn-primary disabled';
    });

    return (
        <div id='addResident' className="modal">
            <div className='modal-dialog'>
                <div className='modal-content'>
                    <div className='modal-header'>
                        <h1 className="modal-title">Add new user</h1>
                        <button type='button' className="btn-close" data-bs-dismiss='modal' aria-label="Close"></button>
                    </div>

                    <div className="modal-body">
                        <div className="mb-3">
                            <label htmlFor="addName" className="form-label">Name</label>
                            <input id='addName' name='addName' className='form-control' placeholder="Insert name" />
                        </div>

                        <div className="row">
                            <div className="col-6 mb-3">
                                <label htmlFor="addAge" className="form-label">Age</label>
                                <input id='addAge' name='addAge' className='form-control' placeholder="Enter Age" />
                            </div>

                            <div className="col-6 flex mb-3">
                                <label htmlFor="addSex" className="form-label">Sex</label>
                                <input id='addSex' name='addSex' className='form-control' placeholder="Select Sex" readOnly={true} data-bs-toggle='dropdown' />
                                <ul className="dropdown-menu">
                                    <li onClick={() => addSex.value = 'Male'}><a href="#" className="dropdown-item">Male</a></li>
                                    <li onClick={() => addSex.value = 'Female'}><a href="#" className="dropdown-item">Female</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-4 mb-3">
                                <label htmlFor="addPurok" className="form-label">Purok</label>
                                <input id='addPurok' name='addPurok' className='form-control' placeholder="Enter Purok" />
                            </div>

                            <div className="col-8 mb-3">
                                <label htmlFor="addDOB" className="form-label">Birthday</label>
                                <input id='addDOB' type="date" name='addDOB' className='form-control' />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-8 mb-3">
                                <label htmlFor="addCP" className="form-label">Contact #</label>
                                <input id='addCP' name='addCP' className='form-control' placeholder="Enter Contact #" maxLength={11} />
                            </div>
                            <div className="col-4 mb-3">
                                <label htmlFor="addStatus" className="form-label">Civil Status</label>
                                <input id='addStatus' name='addStatus' className='form-control' placeholder="Select Status" data-bs-toggle="dropdown" readOnly={true} />
                                <ul className="dropdown-menu">
                                    <li onClick={() => addStatus.value = 'Single'}><a href="#" className="dropdown-item">Single</a></li>
                                    <li onClick={() => addStatus.value = 'Married'}><a href="#" className="dropdown-item">Married</a></li>
                                    <li onClick={() => addStatus.value = 'Divorced'}><a href="#" className="dropdown-item">Divorced</a></li>
                                    <li onClick={() => addStatus.value = 'Widowed'}><a href="#" className="dropdown-item">Widowed</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="addOccupation" className="form-label">Occupation</label>
                            <input id='addOccupation' name='addOccupation' className='form-control' placeholder=" Enter Occupation" />
                        </div>
                    </div>

                    <div className="modal-footer">
                        <button className="btn btn-secondary" data-bs-dismiss='modal'>Cancel</button>
                        <button id='confirmAddResident' className="btn btn-primary disabled" data-bs-dismiss='modal' onClick={() => CreateResident(this)}>Done</button>
                    </div>
                </div>
            </div>
        </div>
    );
}