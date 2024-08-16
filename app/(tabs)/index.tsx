import { AppBar, Avatar, Button } from "@/components";
import { router } from "expo-router";

export default function HomeScreen() {
  return (
    <>
    <AppBar
      title="Home"
      icon="dots-vertical"
      onPress={() => router.push("settings")}
    />
    </>
  );
}
