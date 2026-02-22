import { Box, Typography, Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

const InstructionsCard = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/templates/Bulk-Forward-Shipment-Upload-Sample.xlsx";
    link.download = "Bulk-Forward-Shipment-Upload-Sample.xlsx";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box
      sx={{
        border: "1px solid #E4E7EC",
        borderRadius: "8px",
        padding: "24px",
        backgroundColor: "#FFFFFF",
      }}
    >
      <Typography
        sx={{
          fontSize: "16px",
          fontWeight: 600,
          color: "#101828",
          mb: 2,
        }}
      >
        Instructions
      </Typography>

      <Typography
        sx={{
          fontSize: "14px",
          fontWeight: 600,
          color: "#101828",
        }}
      >
        1️⃣ Download XLSX Template?
      </Typography>

      <Typography
        sx={{
          fontSize: "13px",
          color: "#667085",
          mt: 1,
          mb: 2,
        }}
      >
        Download template & Fill rows with shipment data
      </Typography>

      <Button
        variant="outlined"
        startIcon={<DownloadIcon />}
        onClick={handleDownload}
        sx={{
          textTransform: "none",
          borderColor: "#D0D5DD",
          color: "#344054",
          fontSize: "14px",
        }}
      >
        Download Template
      </Button>
    </Box>
  );
};

export default InstructionsCard;