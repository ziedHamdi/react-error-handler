import {Alert, AlertTitle, Box, Icon, Typography} from "@mui/material";
import useToast from "../../transverse/toast/hook/useToast";

const defSx = {
    head: {
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'flex-start',
        width: '100%'
    },
    title: {
        textTransform: 'capitalize',
        flexGrow: 1
    },
    layout: {
        maxWidth: (theme) => theme.spacing(40),
        minWidth: (theme) => theme.spacing(40),
        border: (theme) => `1px solid ${theme.palette.text.secondary}`
    },
    message: {
        flexGrow: 1
    },
    close: {
        cursor: 'pointer'
    }
}

function doNothingFormat(str) {
    return str
}

/**
 * severity can be one of 'success' | 'info' | 'warning' | 'error'
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export default function ToastComp(props) {
    const {removeToast} = useToast()
    const {toast, toastSx, format} = props
    const {type = 'error', title = 'Error', message} = toast

    const sx = toastSx ?? defSx
    const formatFn = format ?? doNothingFormat

    return (
        <Alert severity={type} sx={sx.layout}>
            <AlertTitle>
                <Box sx={sx.head}>
                    <Typography variant='h6' sx={sx.title}>{type}</Typography>
                    <Icon sx={sx.close} onClick={()=>removeToast(toast)}>close</Icon>
                </Box>
            </AlertTitle>

            <Typography variant='body2' sx={sx.message}>{formatFn(message)}</Typography>

        </Alert>
    )

}