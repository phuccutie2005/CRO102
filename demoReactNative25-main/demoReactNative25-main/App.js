import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View, SafeAreaView, Platform, StatusBar as RNStatusBar } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.left}>
        <Pressable>
          <AntDesign name="left" size={24} color="black" />
        </Pressable>
      </View>
      <View style={styles.center}>
        <Text>Header</Text>
      </View>
      <View style={styles.right}>
        <Pressable>
          <AntDesign name="bars" size={24} color="black" />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    backgroundColor: "#f8f8f8",
    paddingTop: Platform.OS === "android" ? RNStatusBar.currentHeight : 0, // Đẩy xuống dưới StatusBar trên Android
  },
  left: { flex: 1 },
  center: { flex: 2, alignItems: "center" },
  right: { flex: 1, alignItems: "flex-end" },
});
