import {
  Box,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Chip,
  Button,
} from "@mui/material";
import { useState } from "react";
import type { GlossaryItem } from "./types";

interface Props {
  data: GlossaryItem[];
}

const GlossaryTable = ({ data }: Props) => {
  const [visibleRows, setVisibleRows] = useState(5);

  return (
    <Box
      sx={{
        border: "1px solid #E4E7EC",
        borderRadius: "8px",
        mt: 4,
        backgroundColor: "#FFFFFF",
      }}
    >
      <Box sx={{ padding: "20px 24px" }}>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 600,
            color: "#101828",
          }}
        >
          Glossary
        </Typography>
      </Box>

      <Table>
        <TableHead sx={{ backgroundColor: "#F9FAFB" }}>
          <TableRow>
            {["TITLE", "MANDATORY", "DESCRIPTION", "SAMPLE"].map((head) => (
              <TableCell
                key={head}
                sx={{
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "#475467",
                }}
              >
                {head}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {data.slice(0, visibleRows).map((row, index) => (
            <TableRow key={index}>
              <TableCell sx={{ fontSize: "14px", color: "#101828" }}>
                {row.title}
              </TableCell>

              <TableCell>
                <Chip
                  label={row.mandatory ? "Yes" : "No"}
                  size="small"
                  sx={{
                    backgroundColor: row.mandatory ? "#ECFDF3" : "#F2F4F7",
                    color: row.mandatory ? "#027A48" : "#667085",
                    fontWeight: 600,
                    fontSize: "12px",
                  }}
                />
              </TableCell>

              <TableCell sx={{ fontSize: "14px", color: "#475467" }}>
                {row.description}
              </TableCell>

              <TableCell sx={{ fontSize: "14px", color: "#101828" }}>
                {row.sample}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {visibleRows < data.length && (
        <Box textAlign="center" p={2}>
          <Button
            onClick={() => setVisibleRows((prev) => prev + 5)}
            sx={{
              fontSize: "14px",
              textTransform: "none",
              color: "#2563EB",
            }}
          >
            Load More
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default GlossaryTable;