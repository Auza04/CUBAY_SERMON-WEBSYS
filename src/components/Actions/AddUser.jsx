import axios from "axios";
import { Tick } from "../../lib";

async function CreateUser(a, b, c) {
    const date = new Date();
    const year = date.getUTCFullYear();
    const month = date.getUTCMonth() <= 9 ? `0${date.getUTCMonth()}` : date.getUTCMonth();
    const day = date.getUTCDate() <= 9 ? `0${date.getUTCDate()}` : date.getUTCDate();
    const data = {
        username: a,
        password: b,
        role: c,
        creation: `${year}${month}${day}`
    };

    await axios.post('http://cubaysermon.system:4435/accounts/post', data)
}

export default function AddUser() {
    document.body.addEventListener('change', () => {
        let done = document.querySelector('#confirmAddUser');

        if (addUsername.value !== '' &&
            addPassword.value !== '' &&
            addRole.value !== ''
        ) return done.className = 'btn btn-primary';

        return done.className = 'btn btn-primary disabled';
    });

    return (
        <div id='addUser' className="modal">
            <div className='modal-dialog'>
                <div className='modal-content'>
                    <div className='modal-header'>
                        <h1 className="modal-title">Add new user</h1>
                        <button type='button' className="btn-close" data-bs-dismiss='modal' aria-label="Close"></button>
                    </div>

                    <div className="modal-body">

                    <div className="mb-3">
                            <label htmlFor="addRole" className="mb-1">Role</label>
                            <div className="input-group">
                                <input id='addRole' name='addRole' className="form-control" placeholder="Select role" readOnly={true} />
                                <button className="btn btn-outline-secondary dropdown-toggle" data-bs-toggle='dropdown'>Role</button>
                                <ul className="dropdown-menu">
                                    <li onClick={() => addRole.value = 'Admin'}><a href="#" className="dropdown-item">Admin</a></li>
                                    <li onClick={() => addRole.value = 'Personnel'}><a href="#" className="dropdown-item">Personnel</a></li>
                                </ul>
                            </div>
                        </div>  
                        <div className="mb-3">
                            <label htmlFor="addUsername" className="form-label">Username</label>
                            <input id='addUsername' name='addUsername' className='form-control' placeholder="Create username" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="addPassword" className="form-label">Password</label>
                            <input id='addPassword' name='addPassword'  className='form-control' placeholder="Create password" />
                        </div>
                    </div>

                    <div className="modal-footer">
                        <button className="btn btn-secondary" data-bs-dismiss='modal'>Cancel</button>
                        <button id='confirmAddUser' className="btn btn-primary disabled" data-bs-dismiss='modal' onClick={() => CreateUser(addUsername.value, addPassword.value, addRole.value)}>Done</button>
                    </div>
                </div>
            </div>
        </div>
    );
}