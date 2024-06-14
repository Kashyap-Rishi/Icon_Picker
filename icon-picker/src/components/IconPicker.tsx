import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Dialog,
  DialogContent,
  Grid,
  IconButton,
  Typography,
  Pagination,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface IconPickerProps {
  open: boolean;
  onClose: () => void;
  rowsInOnePage: number;
  columnsInOnePage: number;
  iconHeight: number;
  iconWidth: number;
  pickerHeight?: string;
  pickerWidth?: string;
  icons: string[];
  onSelect: (icon: string) => void;
}

const IconPicker: React.FC<IconPickerProps> = ({
  open,
  onClose,
  rowsInOnePage,
  columnsInOnePage,
  iconHeight,
  iconWidth,
  pickerHeight = "500px",
  //   pickerWidth = '500px',
  icons,
  onSelect,
}) => {
  const iconsPerPage = rowsInOnePage * columnsInOnePage;
  const [currentPage, setCurrentPage] = useState(1);

  const handleIconClick = (icon: string) => {
    onSelect(icon);
    onClose();
  };

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };

  const paginatedIcons = icons.slice(
    (currentPage - 1) * iconsPerPage,
    currentPage * iconsPerPage
  );

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogContent>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Typography
          sx={{ fontWeight: "bold" }}
          variant="h4"
          align="center"
          gutterBottom
        >
          Pick your favourite icon
        </Typography>
        <Box
          sx={{
            width: "100%",
            height: pickerHeight,
            overflowY: "auto",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            {paginatedIcons.map((icon, index) => (
              <Grid
                item
                key={index}
                xs={12 / columnsInOnePage}
                display="flex"
                justifyContent="center"
              >
                <Box
                  sx={{
                    backgroundColor: "grey.300",
                    padding: 1,
                    borderRadius: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                    width: iconWidth,
                    height: iconHeight,
                  }}
                  onClick={() => handleIconClick(icon)}
                >
                  <Box
                    component="img"
                    src={`icon-picker/public/icons/${icon}`}
                    alt="icon"
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
          <Pagination
            count={Math.ceil(icons.length / iconsPerPage)}
            page={currentPage}
            onChange={handlePageChange}
          />
        </Box>
      </DialogContent>
    </Dialog>
  );
};

IconPicker.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  rowsInOnePage: PropTypes.number.isRequired,
  columnsInOnePage: PropTypes.number.isRequired,
  iconHeight: PropTypes.number.isRequired,
  iconWidth: PropTypes.number.isRequired,
  pickerHeight: PropTypes.string,
  pickerWidth: PropTypes.string,
  icons: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default IconPicker;
