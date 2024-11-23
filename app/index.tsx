import { ThemeProvider } from "styled-components";
import theme from "src/theme";
import { Groups } from "@screens/Groups";

export default function HomeScreen() {
  return (
    <ThemeProvider theme={theme}>
      <Groups />
    </ThemeProvider>
  );
}
