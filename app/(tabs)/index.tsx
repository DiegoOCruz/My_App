import { Body, Button, Topbar } from "@/components";
import { Text, View } from "react-native";
import { useSession } from "../ctx";
import { useTheme } from "react-native-paper";

export default function HomeScreen() {
  const theme = useTheme();
  return (
    <>
      <Topbar title={"Home"} />
      <Body
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Home</Text>
      </Body>
    </>
  );
}
