import { React } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Home() {
    return (
        <View style={styles.container}>
            <View style={{ height: '10%', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}>
                <Text style={{ marginTop: '10%' }}>Good morning, Indro!</Text>
                <Image
                    source={require('../assets/images/Caramel.png')}
                    style={{ marginTop: '10%', marginLeft: '5%', width: 50, height: 50}}
                />
            </View> 
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
});
