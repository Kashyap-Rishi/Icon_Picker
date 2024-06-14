import { Box, Typography, Container } from "@mui/material";
import IconPickerTrigger from "./components/IconPickerTrigger";

const icons = [
  "activity.svg",
  "airplay.svg",
  "alert-circle.svg",
  "alert-octagon.svg",
  "alert-triangle.svg",
  "align-center.svg",
  "align-justify.svg",
  "align-left.svg",
  "align-right.svg",
  "anchor.svg",
  "aperture.svg",
  "archive.svg",
  "arrow-down-circle.svg",
  "arrow-down-left.svg",
  "arrow-down-right.svg",
  "arrow-down.svg",
  "arrow-left-circle.svg",
  "arrow-left.svg",
  "arrow-right-circle.svg",
  "arrow-right.svg",
  "arrow-up-circle.svg",
  "arrow-up-left.svg",
  "arrow-up-right.svg",
  "arrow-up.svg",
  "at-sign.svg",
  "award.svg",
  "bar-chart-2.svg",
  "bar-chart.svg",
  "battery-charging.svg",
  "battery.svg",
  "bell-off.svg",
  "bell.svg",
  "bluetooth.svg",
  "bold.svg",
  "book-open.svg",
  "book.svg",
  "bookmark.svg",
  "box.svg",
  "briefcase.svg",
  "calendar.svg",
  "camera-off.svg",
  "camera.svg",
  "cast.svg",
  "check-circle.svg",
  "check-square.svg",
  "check.svg",
  "chevron-down.svg",
  "chevron-left.svg",
  "chevron-right.svg",
  "chevron-up.svg",
  "chevrons-down.svg",
  "chevrons-left.svg",
  "chevrons-right.svg",
  "chevrons-up.svg",
  "chrome.svg",
  "circle.svg",
  "clipboard.svg",
  "clock.svg",
  "cloud-drizzle.svg",
  "cloud-lightning.svg",
  "cloud-off.svg",
  "cloud-rain.svg",
  "cloud-snow.svg",
  "cloud.svg",
  "code.svg",
  "codepen.svg",
  "codesandbox.svg",
  "coffee.svg",
];

const App = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Typography variant="h2" sx={{ fontWeight: "bold" }} gutterBottom>
        ICON PICKER
      </Typography>
      <Box sx={{ marginTop: 4, backgroundColor: "#F6F5F2" }}>
        <IconPickerTrigger
          rowsInOnePage={5}
          columnsInOnePage={8}
          iconHeight={50}
          iconWidth={50}
          pickerHeight="500px"
          pickerWidth="500px"
          icons={icons}
        />
      </Box>
    </Container>
  );
};

export default App;
