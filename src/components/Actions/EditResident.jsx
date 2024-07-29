import axios from "axios";

let a = null;
let b = null;
let c = null;
let d = null;
let e = null;
let f = null;
let g = null;
let h = null;
let i = null;

async function ModifyResident() {
    let name = document.querySelector('#editName');
    let age = document.querySelector('#editAge');
    let sex = document.querySelector('#editSex');
    let purok = document.querySelector('#editPurok');
    let birthday = document.querySelector('#editBirthday');
    let number = document.querySelector('#editCP');
    let status = document.querySelector('#editStatus');
    let occupation = document.querySelector('#editOccupation');

    const data = {
        name: name.value,
        age: age.value,
        sex: sex.value,
        purok: purok.value,
        birthday: birthday.value,
        number: number.value,
        status: status.value,
        occupation: occupation.value,
        id: i
    };

    await axios.put('http://localhost:4435/residents/edit', data);
}

export function FillResidentForm(name, age, sex, purok, birthday, number, status, occupation, id) {
    a = name;
    b = age;
    c = sex;
    d = purok;
    e = birthday;
    f = number;
    g = status;
    h = occupation;
    i = id;
}

export default function EditResident() {
    return (
        <>
            <div id="editResident" className="modal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1>Edit user</h1>
                        </div>

                        <div className="modal-body">
                            <div className="row">
                                <div className="mb-3 col-8">
                                    <label htmlFor="editName" className="mb-3">Name</label>
                                    <input id='editName' className="form-control" defaultValue={a} placeholder="Edit name" />
                                </div>

                                <div className="mb-3 col-4">
                                    <label htmlFor="editAge" className="mb-3">Age</label>
                                    <input id='editAge' className="form-control" defaultValue={b} placeholder="Edit age" />
                                </div>
                            </div>


                            <div className="row">
                                <div className="mb-3 col-5">
                                    <label htmlFor="editSex" className="mb-3">Sex</label>
                                    <input id='editSex' className="form-control" defaultValue={c} placeholder="Edit sex" readOnly={true} data-bs-toggle='dropdown' />
                                    <ul className="dropdown-menu">
                                        <li onClick={() => editSex.value = 'Male'}><a className="dropdown-item">Male</a></li>
                                        <li onClick={() => editSex.value = 'Female'}><a  className="dropdown-item">Female</a></li>
                                    </ul>
                                </div>

                                <div className="mb-3 col-7">
                                    <label htmlFor="editPurok" className="mb-3">Purok</label>
                                    <input id='editPurok' className="form-control" defaultValue={d} placeholder="Edit purok" />
                                </div>
                            </div>

                            <div className="row">
                                <div className="mb-3 col-6">
                                    <label htmlFor="editBirthday" className="mb-3">Birthday</label>
                                    <input id='editBirthday' className="form-control" defaultValue={e} placeholder="Edit birthday" />
                                </div>

                                <div className="mb-3 col-6">
                                    <label htmlFor="editCP" className="mb-3">Contact no.</label>
                                    <input id='editCP' className="form-control" defaultValue={f} placeholder="Edit contact number" />
                                </div>
                            </div>

                            <div className="row">
                                <div className="mb-3 col-5">
                                    <label htmlFor="editStatus" className=" form-label mb-3">Civil Status</label>
                                    <input id='editStatus' className="form-control" defaultValue={g} placeholder="Edit Status" readOnly={true} data-bs-toggle='dropdown' />
                                    <ul className="dropdown-menu">
                                        <li onClick={() => editStatus.value = 'Single'}><a href="#" className="dropdown-item">Single</a></li>
                                        <li onClick={() => editStatus.value = 'Married'}><a href="#" className="dropdown-item">Married</a></li>
                                        <li onClick={() => editStatus.value = 'Divorced'}> <a href="#" className="dropdown-item">Divored</a></li>
                                        <li onClick={() => editStatus.value = 'Widowed'}><a href="#" className="dropdown-item">Widowed</a></li>
                                    </ul>
                                </div>

                                <div className="mb-3 col-7">
                                    <label htmlFor="editOccupation" className="mb-3">Occupation</label>
                                    <input id='editOccupation' className="form-control" defaultValue={h} placeholder="Edit occupation" />
                                </div>
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button className="btn btn-secondary" data-bs-dismiss='modal'>Cancel</button>
                            <button className="btn btn-primary" data-bs-dismiss='modal' onClick={() => ModifyResident()}>Done</button>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}

