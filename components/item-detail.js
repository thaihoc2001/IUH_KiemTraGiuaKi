import { React } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from "@react-native-material/core";


export default function ItemDetail({ navigation: { navigate } }) {
    return (
        <View style={styles.container}>
            <View style={{ marginTop: '15%', textAlign: 'center' }}>
                <Text style={{ fontSize: 30, fontWeight: '900', textAlign: 'center' }}>Stabucks Coffee</Text>
                <Text style={{ fontSize: 30, fontWeight: '900', textAlign: 'center' }}>150$</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 30 }}>
                <View>
                    <TouchableOpacity title="Coffee" style={{ alignSelf: "center", marginTop: 40, padding: 20, borderRadius: 10, borderColor: '#fff', borderWidth: 1, paddingHorizontal: 40, flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ color: '#fff' }}>S</Text>
                    </TouchableOpacity>
                    <TouchableOpacity title="Coffee" style={{ alignSelf: "center", marginTop: 40, padding: 20, borderRadius: 10, borderColor: '#fff', borderWidth: 1, paddingHorizontal: 40, flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ color: '#fff' }}>M</Text>
                    </TouchableOpacity>
                    <TouchableOpacity title="Coffee" style={{ alignSelf: "center", marginTop: 40, padding: 20, borderRadius: 10, borderColor: '#fff', borderWidth: 1, paddingHorizontal: 40, flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ color: '#fff' }}>L</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Image
                        source={require('../assets/images/Caramel.png')}
                        style={{ marginRight: 10, width: 300, height: 400 }}
                    />
                </View>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', marginEnd: 90, marginTop: 20 }}>
                <Image
                    source={require('../assets/images/minus.png')}
                    style={{ marginRight: 10, width: 50, height: 50, marginTop: 30 }}
                />
                <Text style={{ color: '#fff', fontSize: 30 }}>3</Text>
                <Image
                    source={require('../assets/images/plus.png')}
                    style={{ marginLeft: 10, width: 50, height: 50, marginTop: 30 }}
                />
            </View>
            <View>
                <Text style={{ color: '#fff', fontSize: 20, textAlign: 'center', marginTop: 20 }}>
                    Starbuck's Ethiopia Medium roast is the perfect coffee for the cold brew.
                </Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center',}}>
                <TouchableOpacity title="Coffee" style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 40, padding: 20, borderRadius: 10, borderColor: '#fff', borderWidth: 1, paddingHorizontal: 40, flexDirection: 'row', alignItems: 'center', width: '90%' }}>
                    <Text style={{ color: '#fff', textAlign: 'center' }}>Add to cart</Text>
                </TouchableOpacity>
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
