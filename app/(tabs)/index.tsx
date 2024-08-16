import { Button, Topbar } from "@/components";
import { Text, View } from "react-native";
import { useSession } from "../ctx";


export default function HomeScreen() {
  
  return (
    <>
      <Topbar 
      title={"Home"}/>
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
        <Text>Home</Text>
       
      </View>
      

    </>
  );
}
