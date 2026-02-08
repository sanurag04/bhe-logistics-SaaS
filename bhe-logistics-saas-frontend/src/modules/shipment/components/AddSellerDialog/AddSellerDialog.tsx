/** @format */
import {
  Grid,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
} from '@mui/material';
import AppDialog from '../../../../components/common/AppDialog/AppDialog';

interface AddSellerDialogProps {
  open: boolean;
  onClose: () => void;
}

const AddSellerDialog = ({ open, onClose }: AddSellerDialogProps) => {
  return (
    <AppDialog
      open={open}
      title="Add Seller Details"
      subtitle="Add seller and address details"
      onClose={onClose}
      maxWidth="md"
    >
      <Grid container spacing={2}>
        {/* Seller Name */}
        <Grid size={{ xs: 6 }}>
          <TextField
            label="Seller Name"
            fullWidth
            size="small"
          />
        </Grid>

        {/* GST */}
        <Grid size={{ xs: 6 }}>
          <TextField
            label="GST Number"
            placeholder="Enter GST"
            fullWidth
            size="small"
          />
        </Grid>

        {/* Checkbox */}
        <Grid size={{ xs: 12 }}>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Add seller address"
          />
        </Grid>

        {/* Address Line 1 */}
        <Grid size={{ xs: 12 }}>
          <TextField
            label="Address Line 1"
            fullWidth
            size="small"
          />
        </Grid>

        {/* Address Line 2 */}
        <Grid size={{ xs: 12 }}>
          <TextField
            label="Address Line 2"
            placeholder="Optional"
            fullWidth
            size="small"
          />
        </Grid>

        {/* Country */}
        <Grid size={{ xs: 6 }}>
          <TextField
            label="Country"
            value="India"
            disabled
            fullWidth
            size="small"
          />
        </Grid>

        {/* Pincode */}
        <Grid size={{ xs: 6 }}>
          <TextField
            label="Pincode"
            error
            helperText="Please enter a valid pincode"
            fullWidth
            size="small"
          />
        </Grid>

        {/* State */}
        <Grid size={{ xs: 6 }}>
          <TextField
            label="State"
            value="Uttar Pradesh"
            disabled
            fullWidth
            size="small"
          />
        </Grid>

        {/* City */}
        <Grid size={{ xs: 6 }}>
          <TextField
            label="City"
            value="Varanasi"
            disabled
            fullWidth
            size="small"
          />
        </Grid>

        {/* Footer buttons */}
        <Grid size={{ xs: 12 }} display="flex" justifyContent="flex-end" gap={2} mt={2}>
          <Button variant="outlined" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="contained">
            Add Seller Details
          </Button>
        </Grid>
      </Grid>
    </AppDialog>
  );
};

export default AddSellerDialog;
