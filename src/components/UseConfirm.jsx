import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { useState } from 'react';

const useConfirm = (title, message) => {
  const [promise, setPromise] = useState(null);

  const confirm = () => new Promise((resolve, reject) => {
    setPromise({ resolve });
  });

  const handleClose = () => {
    setPromise(null);
  };

  const handleConfirm = () => {
    promise?.resolve(true);
    handleClose();
  };

  const handleCancel = () => {
    promise?.resolve(false);
    handleClose();
  };
    
  // You could replace the Dialog with your library's version
  const ConfirmationDialog = () => (
      <Dialog
        open={promise !== null}
        fullWidth
      >
        <DialogTitle><h2>{title}</h2></DialogTitle>
        <DialogContent>
          <DialogContentText><p>{message}</p></DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel}>Abort</Button>
          <Button onClick={handleConfirm}><button className="theme-switcher btn btn-outline-primary">Yes</button></Button>
        </DialogActions>
      </Dialog>
    );
    return [ConfirmationDialog, confirm];
  };
  
  export default useConfirm;