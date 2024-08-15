import { AppBar } from "@/components";
import { router } from "expo-router";


export default function DashboardScreen() {
  return (
    <AppBar
      title="Dashboard"
      icon="dots-vertical"
      onPress={() => router.push("settings")}
    />
  );
}
