/** @format */
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import './AppDialog.css';

interface AppDialogProps {
  open: boolean;
  title: string;
  subtitle?: string;
  onClose: () => void;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const AppDialog = ({
  open,
  title,
  subtitle,
  onClose,
  maxWidth = 'sm',
  children,
}: AppDialogProps) => {
  return (
    <Dialog
      open={open}
      maxWidth={maxWidth}
      fullWidth
      scroll="paper"
      PaperProps={{
    sx: {
      width: 600,   
      maxWidth: "90vw",
    },
  }}
      disableEscapeKeyDown
      onClose={(_, reason) => {
        if (reason === 'backdropClick') return;
      }}
      BackdropProps={{
        className: 'app-dialog-backdrop',
      }}
    >
      <DialogTitle className="app-dialog-header">
        <div>
          <h2>{title}</h2>
          {subtitle && <p>{subtitle}</p>}
        </div>

        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent className="app-dialog-content">
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default AppDialog;
