import { Box, Container } from '@mui/material';
import { useState } from 'react';
import PickupDetailsCard from './components/PickupDetailsCard';
import ShipmentsTable from './components/ShipmentsTable';

export default function PickupRequestPage() {
  const [selectedLocation, setSelectedLocation] = useState<string>('');

  return (
    <Container maxWidth="lg" sx={{ mt: 3, mb: 5 }}>
      <Box display="flex" flexDirection="column" gap={3}>
        <PickupDetailsCard
          selectedLocation={selectedLocation}
          setSelectedLocation={setSelectedLocation}
        />

        {selectedLocation && (
          <ShipmentsTable selectedLocation={selectedLocation} />
        )}
      </Box>
    </Container>
  );
}
