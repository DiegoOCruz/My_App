import { Surface, Menu as Mn, Title } from "react-native-paper";

export default function Menu(props: any) {
  return props.visible ? (
    <Surface
      style={{
        flex: 1,
        position: "absolute",
        right: 20,
        top: 80,
        backgroundColor: "white",
        zIndex: 10000,
      }}
      elevation={2}
    >
      {props.items.map((item: any, index: number) => {
        return (
          <Mn.Item
            key={index}
            onPress={() => {
              item.onPress;
              props.setVisible(false);
            }}
            {...item}
          />
        );
      })}
    </Surface>
  ) : null;
}
