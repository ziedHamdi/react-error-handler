import {Stack} from "@mui/material";
import useToast from "../../transverse/toast/hook/useToast";
import ToastComp from "./ToastComp";

const sx = {
    dynamicNotifications: {
        position: 'fixed',
        bottom: (theme) => theme.spacing(1),
        right: (theme) => theme.spacing(1),
        zIndex: 100,
        borderRadius: '1em',
    },
}

export default function DynamicNotifications(props) {
    const {format, compSx, toastSx} = props
    const {toasts} = useToast()

    return (
        <Stack sx={compSx ?? sx.dynamicNotifications} spacing={2} id="DynamicNotifications">
            {toasts.map((toast) => <ToastComp toast={toast} toastSx={toastSx} format={format} />)}
        </Stack>
    )

}