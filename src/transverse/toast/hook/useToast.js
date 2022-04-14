import {useContext} from 'react';
import {ToastContext} from '../ToastContextProvider';

function useToast(timeout) {
    const {toasts, addToast: originalAddToast, removeToast} = useContext(ToastContext);

    function addToast(toast) {
        originalAddToast(toast)
        let appliedTimeout = toast.timeout ?? timeout
        if (appliedTimeout > 0)
            setTimeout(() => removeToast(toast), appliedTimeout)
    }

    return {toasts, addToast, removeToast};
}

export default useToast;