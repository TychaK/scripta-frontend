import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Notify = (message) => {
    console.log("Called with message", message)
    let options = {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        toastId: 673738 /* this is hack to prevent multiple toasts */
    }
    if (message.status === 200) {
        return toast.success(`${message.message}`, options);
    } else {
        return toast.error(`${message.message}`, options);
    }
};

export default Notify
