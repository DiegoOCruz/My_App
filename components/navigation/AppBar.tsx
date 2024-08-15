import { router } from "expo-router";
import { Appbar } from "react-native-paper";

export default function AppBar(props: any) {
    return (
        <Appbar.Header>
        <Appbar.Content {...props} />
        <Appbar.Action
          {...props}
        />
      </Appbar.Header>
    );
}