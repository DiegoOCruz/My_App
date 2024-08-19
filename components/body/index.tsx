
import { View } from "react-native";
import { useTheme } from "react-native-paper";

export default function Body(props: any){
    const theme = useTheme();

    return(
        <View style={{
            backgroundColor: theme.colors.background,
        }}{...props}>{props.children}</View>
    );
}