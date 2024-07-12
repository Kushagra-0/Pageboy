import { MouseEvent, useContext } from "react"
import ToastInterface from "../../../types/interfaces/toast"
import { ToastContext } from "../../../context/toast-context"

const TOAST_CLASSES = {
    primary: "toast-primary",
    secondary: "toast-secondary",
    success: "toast-success",
    warning: "toast-warning",
    danger: "toast-danger",
}

const Toast = ({id, color, title, body, actions}: ToastInterface) => {
    const {removeToast} = useContext(ToastContext)

    const handleToastCLick = (e: MouseEvent<HTMLDivElement>) => {
        const classListArr = Array.from((e.target as HTMLButtonElement).classList)
        if(!classListArr.includes('action')) removeToast(id);
    };

    return (
        <div 
            onClick={handleToastCLick}
            className={`${TOAST_CLASSES[color]} w-full rounded bg-white dark:bg-slate-700 shadow-md dark:shadow-2xl flex items-strech text-sm relative cursor-pointer text-primary`}
        >
            <div className="w-full p-4 space-y-1">
                {title && <h6 className="font-medium">{title}</h6>}
                {body && <}
            </div>
        </div>
    )
}