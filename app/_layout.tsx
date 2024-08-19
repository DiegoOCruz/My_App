import { Navigator } from "expo-router";
import Slot = Navigator.Slot;
import { SessionProvider } from "@/app/ctx";
import { PaperProvider, useTheme } from "react-native-paper";
import { darkTheme, lightTheme } from "@/constants/Theme";

export default function RootLayout() {
  const themeType = useTheme();
  //themeType.dark = true;
  console.log(themeType);
  return (

    <PaperProvider theme={themeType.dark ? darkTheme() : lightTheme()}>
      <SessionProvider>
        <Slot />
      </SessionProvider>
    </PaperProvider>
  );
}
