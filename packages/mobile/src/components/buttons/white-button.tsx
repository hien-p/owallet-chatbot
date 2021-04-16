import React, { FunctionComponent } from "react";
import {
  StyleProp,
  TextStyle,
  ViewStyle,
  GestureResponderEvent,
} from "react-native";
import { Button, useTheme } from "react-native-elements";

type WhiteButtonProps = {
  containerStyle?: StyleProp<ViewStyle>;
  buttonStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
  loading?: boolean;
  color?: "primary" | "secondary" | "error" | "warning";
  title: string;
  onPress?: (event: GestureResponderEvent) => void;
};

export const WhiteButton: FunctionComponent<WhiteButtonProps> = ({
  containerStyle,
  buttonStyle,
  titleStyle,
  title,
  color,
  disabled,
  loading,
  onPress,
}) => {
  const { theme } = useTheme();

  const themeColor = (() => {
    switch (color) {
      case "primary":
        return theme.colors?.primary;
      case "secondary":
        return theme.colors?.secondary;
      case "warning":
        return theme.colors?.warning;
      case "error":
        return theme.colors?.error;
      default:
        return theme.colors?.primary;
    }
  })();

  return (
    <Button
      containerStyle={{
        flex: 1,
        ...(containerStyle as Record<string, unknown>),
      }}
      buttonStyle={{
        borderWidth: 1,
        borderColor: themeColor,
        borderRadius: 8,
        backgroundColor: theme.colors?.white,
        paddingVertical: 10,
        paddingHorizontal: 20,
        ...(buttonStyle as Record<string, unknown>),
      }}
      titleStyle={{
        color: themeColor,
        fontWeight: "500",
        ...(titleStyle as Record<string, unknown>),
      }}
      title={title}
      onPress={onPress}
      loading={loading}
      disabled={disabled}
    />
  );
};