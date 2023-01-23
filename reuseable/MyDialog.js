import React, from 'react';
import {
    AppBar,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    IconButton,
    Toolbar,
    Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';


const WrapperDialog = ({ open, title, children, handleClose, defaultCloseBtn, dialogActionsChildren, ...rest }) => {

    return (
        <Dialog
            open={open}
            keepMounted
            maxWidth='md'
            fullWidth
            onClose={() => {
            }}
            aria-describedby='alert-dialog-slide-description'
            {...rest}
        >
            <AppBar position='static' elevation={0} className='mb-8'>
                <Toolbar sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                    <Typography variant='subtitle1' color='inherit'>
                        {title ?? ''}
                    </Typography>
                    <IconButton
                        aria-label='close'
                        onClick={() => handleClose()}
                    >
                        <CloseIcon sx={{color : "#ffffff"}} />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <DialogContent sx={{marginY: "8px"}}>{children}</DialogContent>
            <DialogActions sx={{justifyContent: "center"}}>
                {defaultCloseBtn ? (
                    <Button
                        sx={{borderRadius: "8px"}}
                        autoFocus
                        variant='contained'
                        onClick={handleClose}
                    >
                        close
                    </Button>
                ) : null}
                {dialogActionsChildren ? dialogActionsChildren : null}
            </DialogActions>
        </Dialog>
    );
};

export default WrapperDialog;