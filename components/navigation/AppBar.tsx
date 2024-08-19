import { router } from "expo-router";
import { Appbar, useTheme } from "react-native-paper";

export default function AppBar(props: any) {
  const theme = useTheme();
  return (
    <Appbar.Header style={{
      backgroundColor: theme.colors.background,
    }}>
      {props.back ? <Appbar.BackAction onPress={() => router.back()} /> : null}
      <Appbar.Content {...props} />
      <Appbar.Action {...props} />
    </Appbar.Header>
  );
}
