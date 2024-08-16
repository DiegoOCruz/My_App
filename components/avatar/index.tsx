import * as React from "react";
import { Avatar as Av } from "react-native-paper";

// @ts-ignore
export default function Avatar(props: AvatarProps) {
  const detectTypeAvatar = (source: any) => {
    
    if (props.source) {
      return <Av.Image {...props} />;
    } else if (props.icon) {
      return <Av.Icon {...props} />;
    } else {
      return <Av.Text {...props} />;
    }
  };
  // @ts-ignore
  return detectTypeAvatar(props);
}

Avatar.defaultProps = {
  source: null,
  label: "",
  
};
