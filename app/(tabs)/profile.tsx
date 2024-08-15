import { AppBar } from "@/components";
import { router } from "expo-router";


export default function ProfileScreen() {
  return (
    <AppBar
      title="Perfil"
      icon="dots-vertical"
      onPress={() => router.push("settings")}
    />
  );
}