import { useEffect, useState } from "react";
import Tick from "../lib/components/Tick";
import axios from "axios";
import { Loop } from "../lib";

export default function NotifyDlg() {
    useEffect(() => {
        Tick(GetNotifications)
    }, []);

    const [data, sendData] = useState({});

    const GetNotifications = async () => {
        const res = await axios.get('http://cubaysermon.system:4435/notifications');
        sendData(res.data);
    }


    return (
        <div className="modal fade" id="notificationsDlg" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <Loop repeat={data.length}>
                            {(index) => <div key={index}>
                                <p style={{fontSize:'1rem', fontWeight:'bo'}}>{data[index].name}</p>
                            </div>}
                        </Loop>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
}