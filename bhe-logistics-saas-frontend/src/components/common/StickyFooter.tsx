import { Box, Button } from "@mui/material";
import type { BoxProps } from "@mui/material";
import React from "react";

interface StickyFooterProps extends BoxProps {
  primaryLabel?: string;
  secondaryLabel?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  primaryDisabled?: boolean;
  loading?: boolean;
}

const StickyFooter: React.FC<StickyFooterProps> = ({
  primaryLabel = "Save",
  secondaryLabel = "Cancel",
  onPrimaryClick,
  onSecondaryClick,
  primaryDisabled = false,
  loading = false,
  sx,
  ...rest
}) => {
  return (
    <Box
      position="sticky"
      bottom={0}
      zIndex={10}
      px={3}
      py={2}
      display="flex"
      justifyContent="flex-end"
      gap={2}
      bgcolor="#fff"
      borderTop="1px solid #eee"
      boxShadow="0 -2px 8px rgba(0,0,0,0.04)"
      sx={{
        backdropFilter: "blur(6px)",
        ...sx,
      }}
      {...rest}
    >
      {secondaryLabel && (
        <Button sx={{ backgroundColor: "#0d2868", color: "#fff", borderColor: "#0d2868", "&:hover": { backgroundColor: "#0b2454" },  }} variant="outlined" onClick={onSecondaryClick}>
          {secondaryLabel}
        </Button>
      )}

      {primaryLabel && (
        <Button
          variant="contained"
          onClick={onPrimaryClick}
          disabled={primaryDisabled}
            sx={{ backgroundColor: "#0d2868", "&:hover": { backgroundColor: "#0b2454" },  }}
        >
          {loading ? "Please wait..." : primaryLabel}
        </Button>
      )}
    </Box>
  );
};

export default StickyFooter;