import { Text, TouchableOpacity, View, StyleSheet } from "react-native";

export default function Index() {

  return ( <View style={styles.container}>

  <Text style={styles.title}>jogo da velha</Text>
  <Text style={styles.subtitle}>Vencedor: </Text>

  <View style={styles.board}>
  
    <View style={styles.cell}><TouchableOpacity><Text>X</Text></TouchableOpacity></View>
    <View style={styles.cell}><TouchableOpacity><Text>X</Text></TouchableOpacity></View>
    <View style={styles.cell}><TouchableOpacity><Text>X</Text></TouchableOpacity></View>
    <View style={styles.cell}><TouchableOpacity><Text>X</Text></TouchableOpacity></View>
    <View style={styles.cell}><TouchableOpacity><Text>X</Text></TouchableOpacity></View>
    <View style={styles.cell}><TouchableOpacity><Text>X</Text></TouchableOpacity></View>
    <View style={styles.cell}><TouchableOpacity><Text>X</Text></TouchableOpacity></View>
    <View style={styles.cell}><TouchableOpacity><Text>X</Text></TouchableOpacity></View>
    <View style={styles.cell}><TouchableOpacity><Text>X</Text></TouchableOpacity></View>

  </View>
</View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 24,
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 18,
    marginBottom: 20,
  },

  board: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: 180,
  },
  cell: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
});