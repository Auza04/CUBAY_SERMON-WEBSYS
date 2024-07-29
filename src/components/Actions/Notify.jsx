import axios from "axios";

export default async function Notify(fullname) {
    const date = new Date();
    const year = date.getUTCFullYear();
    const month = date.getUTCMonth() <= 9 ? `0${date.getUTCMonth()}` : date.getUTCMonth();
    const day = date.getUTCDate() <= 9 ? `0${date.getUTCDate()}` : date.getUTCDate();

    const data = {
        name: `${fullname} is requested to a create a certificate.`,
        read: false,
        timeline: '1 minute ago',
        creation: `${year}${month}${day}`
    };

    await axios.post('http://cubaysermon.system:4435/notifications/post', data);
 
}
