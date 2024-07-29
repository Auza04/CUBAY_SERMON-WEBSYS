import axios from "axios";

let username = null;
let password = null;
let id = null;

async function ModifyUser() {
    let a = document.querySelector('#editUsername');
    let b = document.querySelector('#editPassword');
    const data = {
        username: a.value,
        password: b.value,
        id: id
    };

    await axios.put('http://localhost:4435/accounts/edit', data);
}

export function FillUserForm(a, b, c) {
    username = a;
    password = b;
    id = c;
}

export default function EditUser() {
    return (
        <>
            <div id="editUser" className="modal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1>Edit user</h1>
                        </div>

                        <div className="modal-body">
                            <div className="mb-3">
                                <label htmlFor="editUsername" className="mb-3">Username</label>
                                <input id='editUsername' className="form-control" defaultValue={username} placeholder="Edit username" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="editPassword" className="mb-3">Password</label>
                                <input id='editPassword' className="form-control" defaultValue={password} placeholder="Edit password" />
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button className="btn btn-secondary" data-bs-dismiss='modal'>Cancel</button>
                            <button className="btn btn-primary" data-bs-dismiss='modal' onClick={() => ModifyUser()}>Done</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}