import { Button } from "@/components";
import { router } from "expo-router";
import { View, Text } from "react-native";


export default function SettingsScreen() {

    const Logout = () => {
        router.navigate("login");
    }


    return (
        <>
            <View>
                <Text>Settings</Text>
                <Button onPress={Logout}>Sair</Button>
                <Button onPress={() => router.navigate("components")}>Components</Button>
            </View>
        </>
    );
}


