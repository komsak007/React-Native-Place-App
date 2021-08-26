import React from "react";
import { View, Text, Button, StyleSheet, Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../components/HeaderButton";

const PlaceListScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>This is PlaceList</Text>
      <Button
        title="Place Detail"
        onPress={() => {
          props.navigation.navigate("PlaceDetail");
        }}
      />
    </View>
  );
};

PlaceListScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "All Places",
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Add Place"
          iconName={Platform.OS === "android" ? "md-add" : "ios-add"}
          onPress={() => {
            navData.navigation.navigate("NewPlace");
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default PlaceListScreen;
