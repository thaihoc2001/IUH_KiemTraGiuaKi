import { React } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from "@react-native-material/core";


export default function ItemDetail({ navigation: { navigate } }) {
    return (
        <View style={styles.container}>
            <View style={{marginTop: '15%', textAlign: 'center'}}>
                <Text style={{fontSize: 30, fontWeight: '900', textAlign: 'center'}}>Stabucks Coffee</Text>
                <Text style={{fontSize: 30, fontWeight: '900', textAlign: 'center'}}>150$</Text>
            </View>
            <View>
                <View>
                <TouchableOpacity title="Coffee" style={{ alignSelf: "center", marginTop: 40, padding: 20, borderRadius: 10, borderColor: '#fff', borderWidth: 1, paddingHorizontal: 40, flexDirection: 'row', alignItems: 'center' }}>
                    <Text>S</Text>
                </TouchableOpacity>
                <TouchableOpacity title="Coffee" style={{ alignSelf: "center", marginTop: 40, padding: 20, borderRadius: 10, borderColor: '#fff', borderWidth: 1, paddingHorizontal: 40, flexDirection: 'row', alignItems: 'center' }}>
                    <Text>M</Text>
                </TouchableOpacity>
                <TouchableOpacity title="Coffee" style={{ alignSelf: "center", marginTop: 40, padding: 20,  borderRadius: 10, borderColor: '#fff', borderWidth: 1, paddingHorizontal: 40, flexDirection: 'row', alignItems: 'center' }}>
                    <Text>L</Text>
                </TouchableOpacity>
                </View>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#128F91',
        height: '100%'
    },
});
