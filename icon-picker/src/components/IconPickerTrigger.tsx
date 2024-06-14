import React, { useState } from "react";
import { Box } from "@mui/material";
import IconPicker from "./IconPicker";

interface IconPickerTriggerProps {
  rowsInOnePage: number;
  columnsInOnePage: number;
  iconHeight: number;
  iconWidth: number;
  pickerHeight?: string;
  pickerWidth?: string;
  icons: string[];
}

const IconPickerTrigger: React.FC<IconPickerTriggerProps> = ({
  rowsInOnePage,
  columnsInOnePage,
  iconHeight,
  iconWidth,
  pickerHeight,
  pickerWidth,
  icons,
}) => {
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);
  const [isPickerOpen, setIsPickerOpen] = useState(false);

  const handleOpenPicker = () => {
    setIsPickerOpen(true);
  };

  const handleClosePicker = () => {
    setIsPickerOpen(false);
  };

  const handleSelectIcon = (icon: string) => {
    setSelectedIcon(icon);
  };

  return (
    <Box>
      <Box
        onClick={handleOpenPicker}
        sx={{
          width: 100,
          height: 100,
          border: "1px solid black",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        {selectedIcon ? (
          <img
            src={`public/icons/${selectedIcon}`}
            alt="selected icon"
            style={{ width: "100%", height: "100%" }}
          />
        ) : (
          "Select Icon"
        )}
      </Box>
      <IconPicker
        open={isPickerOpen}
        onClose={handleClosePicker}
        rowsInOnePage={rowsInOnePage}
        columnsInOnePage={columnsInOnePage}
        iconHeight={iconHeight}
        iconWidth={iconWidth}
        pickerHeight={pickerHeight}
        pickerWidth={pickerWidth}
        icons={icons}
        onSelect={handleSelectIcon}
      />
    </Box>
  );
};

export default IconPickerTrigger;
