import axios from "axios";

let id = null;

async function ForceDeleteResident() {
    const data = {
        id: id
    };

    await axios.post('http://localhost:4435/residents/delete', data);
}

export function SetResidentId(idXYZ) {
    return id = idXYZ;
}

export default function DeleteResident() {
    return (
        <>
            <div id='deleteResident' className="modal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1>Delete user</h1>
                        </div>

                        <div className="modal-body">
                            <p>Are you sure to delete this resident?</p>
                        </div>

                        <div className="modal-footer">
                            <button className="btn btn-secondary" data-bs-dismiss='modal'>Cancel</button>
                            <button className="btn btn-primary" data-bs-dismiss='modal' onClick={() => ForceDeleteResident()}>Done</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}