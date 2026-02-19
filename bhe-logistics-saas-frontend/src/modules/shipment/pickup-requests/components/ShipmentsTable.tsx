import {
  Card,
  CardContent,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Checkbox
} from '@mui/material';

interface Props {
  selectedLocation: string;
}

export default function ShipmentsTable({ selectedLocation }: Props) {
  return (
    <Card>
      <CardContent>

        <Typography fontWeight={600} mb={2} color="text.primary">
          Shipments ready to be shipped from {selectedLocation}
        </Typography>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell width={50}>
                <Checkbox size="small" />
              </TableCell>
              <TableCell>AWB AND ORDER ID</TableCell>
              <TableCell>MANIFESTED DATE</TableCell>
              <TableCell>PAYMENT MODE</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow>
              <TableCell colSpan={4} align="center">
                No Records Found
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

      </CardContent>
    </Card>
  );
}
