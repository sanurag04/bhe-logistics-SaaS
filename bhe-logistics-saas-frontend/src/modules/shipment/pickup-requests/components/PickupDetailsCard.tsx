import {
  Card,
  CardContent,
  Typography,
  Box,
  Select,
  MenuItem,
  TextField,
  InputAdornment,
  Divider,
  ToggleButton,
  ToggleButtonGroup,
  FormControlLabel,
  Checkbox
} from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarToday';
import AddIcon from '@mui/icons-material/Add';

import AddPickupDialog from './AddPickupDialog/AddPickupDialog';
import { useState } from 'react';

interface Props {
  selectedLocation: string;
  setSelectedLocation: (value: string) => void;
}

export default function PickupDetailsCard({
  selectedLocation,
  setSelectedLocation
}: Props) {
  const [selectedDate, setSelectedDate] = useState('20');
  const [selectedSlot, setSelectedSlot] = useState('evening');
  const [openCustomer, setOpenCustomer] = useState(false);

  const showDetails = Boolean(selectedLocation);

  return (
    <Card sx={{ borderRadius: 2 }}>
      <CardContent>

        {/* Header */}
        <Box display="flex" alignItems="center" gap={1} mb={2}>
          <CalendarTodayOutlinedIcon fontSize="small" />
          <Typography fontWeight={600} color="text.primary">
            Pickup Details
          </Typography>
        </Box>

        {/* Pickup Location */}
        <Typography fontSize="14px" color="text.secondary"  fontWeight={500} mb={1}>
          Pickup Location <InfoOutlinedIcon sx={{ fontSize: 14 }} />
        </Typography>

        <Select
          fullWidth
          size="small"
          value={selectedLocation}
          displayEmpty
          onChange={(e) => setSelectedLocation(e.target.value)}
          sx={{ mb: 2 }}
        >
          <MenuItem disabled value="">
            Select Pickup Location
          </MenuItem>

          <MenuItem disableRipple>
            <TextField
              size="small"
              placeholder="Search Pickup Locations"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon fontSize="small" />
                  </InputAdornment>
                )
              }}
            />
          </MenuItem>

          <Divider />

          <MenuItem value="MWBARANI FRANCHISE">
            MWBARANI FRANCHISE
          </MenuItem>

          <MenuItem value="DELHI HUB">
            DELHI HUB
          </MenuItem>

          <Divider />

          <MenuItem onClick={() => setOpenCustomer(true)}>
            <AddIcon fontSize="small" sx={{ mr: 1 }} />
            Add Pickup Location
          </MenuItem>
        </Select>

        {showDetails && (
          <>
            {/* Pickup Date */}
            <Typography fontWeight={600} mt={2} color="text.primary">
              Pickup Date
            </Typography>

            <Typography fontSize="12px" color="text.secondary" mb={2}>
              Pickup will be attempted during the selected Pickup Slot
            </Typography>

            <ToggleButtonGroup
              value={selectedDate}
              exclusive
              onChange={(e, val) => val && setSelectedDate(val)}
              sx={{ mb: 2 }}
            >
              {[
                { day: 'Fri', date: '20' },
                { day: 'Sat', date: '21' },
                { day: 'Mon', date: '23' }
              ].map((item) => (
                <ToggleButton key={item.date} value={item.date}>
                  <Box textAlign="center">
                    <Typography fontSize="12px" color="text.secondary">{item.day}</Typography>
                    <Typography fontWeight={600} color="text.primary">{item.date}</Typography>
                    <Typography fontSize="12px" color="text.secondary">Feb</Typography>
                  </Box>
                </ToggleButton>
              ))}
            </ToggleButtonGroup>

            <Typography fontSize="12px" color="error" mb={2} display="flex" alignItems="center" gap={0.5}>
              For Next Day Delivery shipments, please ensure pickup is scheduled before 6:00 PM
            </Typography>

            {/* Pickup Slot */}
            <Typography fontSize="13px" fontWeight={500} color="text.secondary">
              Default Pickup Slot
            </Typography>

            <Select
              size="small"
              value={selectedSlot}
              onChange={(e) => setSelectedSlot(e.target.value)}
              sx={{ mt: 1, mb: 1, width: 300 }}
            >
              <MenuItem value="evening">
                Evening 14:00:00 - 18:00:00
              </MenuItem>
            </Select>

            <FormControlLabel
              control={<Checkbox size="small" />}
              label={
                <Typography fontSize="12px" color="text.secondary">
                  Save this as the default pickup slot for this location
                </Typography>
              }
            />
          </>
        )}

        <AddPickupDialog
                            open={openCustomer}
                            onClose={() => setOpenCustomer(false)}
                          />
      </CardContent>
    </Card>
  );
}
