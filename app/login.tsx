import { Button } from "@/components";
import { Text, View } from "react-native";
import { useSession } from "./ctx";
import { router } from "expo-router";


export default function LoginScreen() {
    const { signIn } = useSession();
    return (
        <>
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white',
            }}>
                <Text>Login</Text>
                <Button onPress={()=> {
                    signIn();
                }}>Entrar</Button>
            </View>
        </>
    );
}

