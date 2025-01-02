import { createTheme, DEFAULT_THEME, mergeMantineTheme } from "@mantine/core";

const themeOverride = createTheme({
  primaryColor: "orange",
  defaultRadius: 16,
  colors: {
    cobalt: [
      "#eef7ff",
      "#d9edff",
      "#bce1ff",
      "#8ecfff",
      "#59b2ff",
      "#3292ff",
      "#1c73f4",
      "#145ce1",
      "#1749b3", // default
      "#19428f",
      "#142957",
    ],
    woodsmoke: [
      "#f6f6f6",
      "#e7e7e7",
      "#d1d1d1",
      "#b0b0b0",
      "#888888",
      "#6d6d6d",
      "#5d5d5d",
      "#4f4f4f",
      "#454545",
      "#3d3d3d",
      "#171717", // default
    ],
    "mine-shaft": [
      "#f6f6f6",
      "#e7e7e7",
      "#d1d1d1",
      "#b0b0b0",
      "#888888",
      "#6d6d6d",
      "#5d5d5d",
      "#4f4f4f",
      "#454545",
      "#333333", // default
      "#262626",
    ],
    zumthor: [
      "#ecf3fb", // default
      "#e1ecf8",
      "#caddf3",
      "#a5c8eb",
      "#7babdf",
      "#5c8ed5",
      "#4774c9",
      "#3e61b7",
      "#375096",
      "#314577",
      "#222c49",
    ],
  },
});

export const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride);
