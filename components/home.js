import { React } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, SafeAreaView, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from "@react-native-material/core";

// const DATA = [
//     {
//         id: 'sp1',
//         title: 'Ca nau lau, nau mi mini',
//         urlImg: require('../assets/images/ca_nau_lau.png'),
//         shopName: 'Shop Devang',
//         isSelect: false
//     },
//     {
//         id: 'sp2',
//         title: '1KG kho ga bo toi',
//         urlImg: require('../assets/images/ga_bo_toi.png'),
//         shopName: 'Shop Devang',
//         isSelect: false
//     }
// ];

// const Item = ({ product }) => (
//     <View style={styles.item}>
//         <View style={{flex: 3}}>
//             <Image
//                 style={styles.productImage}
//                 source={product.urlImg}
//             />
//         </View>
//         <View style={styles.rightItem}>
//             <Text style={styles.title}>{product.title}</Text>
//             <Text style={styles.shopName}>{product.shopName}</Text>
//         </View>
//         <View style={{alignItems: 'center', justifyContent: 'center', marginLeft: 10}}>
//             <Button title="Chat" color="error" />
//         </View>
//     </View>
// );

export default function Home({ navigation: { navigate } }) {
    return (
        <View style={styles.container}>
            <View style={{ height: '10%', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                <Text style={{ marginTop: '10%' }}>Good morning, <Text style={{ fontWeight: '900' }}>Indro!</Text></Text>
                <Image
                    source={require('../assets/images/trump_2.png')}
                    style={{ marginTop: '10%', marginLeft: '5%', width: 50, height: 50, borderRadius: '50%', backgroundColor: '#000' }}
                />
            </View>
            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'center', }}>
                <View style={{ flexDirection: 'row', width: '80%', padding: 10, borderRadius: 30, justifyContent: 'space-between', marginTop: 30, backgroundColor: '#E3E3E3', marginHorizontal: 20 }}>
                    <TextInput
                        style={{}}
                        placeholder="Find the coffee for you!"
                        keyboardType="numeric"
                    />
                    <Icon name="search-plus" size={30} color="#FF620B" style={{ marginEnd: 10, }} light />
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, marginHorizontal: 30 }}>
                <TouchableOpacity title="Coffee" style={{ alignSelf: "center", marginTop: 40, padding: 20, backgroundColor: '#118D95', borderRadius: 50, paddingHorizontal: 40, flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                        source={require('../assets/images/coffee_glass.png')}
                        style={{ marginRight: 10, width: 30, height: 30, borderRadius: '50%', backgroundColor: '#000' }}
                    />
                    <Text>Coffee</Text>
                </TouchableOpacity>
                <TouchableOpacity title="Coffee" style={{ alignSelf: "center", marginTop: 40, padding: 20, backgroundColor: '#B7DDE0', borderRadius: 50, paddingHorizontal: 40, flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                        source={require('../assets/images/coffee_glass.png')}
                        style={{ marginRight: 10, width: 30, height: 30, borderRadius: '50%', backgroundColor: '#000' }}
                    />
                    <Text>Snack</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'center', marginTop: 30 }}>
                <View style={{ backgroundColor: '#EEEEEE', width: '95%', flexDirection: 'row', paddingVertical: 30, paddingHorizontal: 15, borderRadius: 20 }}>
                    <Text style={{ fontSize: 20, width: '70%' }}>
                        50% Discount for All Purchase This Morning
                    </Text>
                    <Image
                        source={require('../assets/images/Caramel.png')}
                        style={{ width: 100, height: 100 }}
                    />
                </View>
            </View>
            <View style={{ marginTop: 30, paddingHorizontal: 10 }}>
                <Text style={{ fontWeight: "900", fontSize: 20 }}>
                    Recommendation
                </Text>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity style={{backgroundColor: '#128F91', width: '50%', marginTop: 10, borderTopStartRadius: 10, borderTopEndRadius: 10}} onPress={() => { navigate('detail') }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                        <Image
                            source={require('../assets/images/Caramel.png')}
                            style={{ width: 100, height: 150 }}
                        />
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{ fontWeight: "900", fontSize: 20 }}>
                            Stabuck Coffee
                        </Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center'}}>
                            <Text style={{ fontWeight: "900", fontSize: 30, color: '#6DC25C' }}>150$</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10}}>
                                <Icon name="star" size={15} color="#6DC25C" style={{ marginEnd: 1, }} light />
                                <Icon name="star" size={15} color="#6DC25C" style={{ marginEnd: 1, }} light />
                                <Icon name="star" size={15} color="#6DC25C" style={{ marginEnd: 1, }} light />
                                <Icon name="star" size={15} color="#6DC25C" style={{ marginEnd: 1, }} light />
                                <Icon name="star" size={15} color="#6DC25C" style={{ marginEnd: 1, }} light />

                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor: '#128F91', width: '50%', marginTop: 10, borderTopStartRadius: 10, borderTopEndRadius: 10, marginStart: 10}} onPress={() => { navigate('detail') }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                        <Image
                            source={require('../assets/images/Cacaramel.png')}
                            style={{ width: 100, height: 150 }}
                        />
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{ fontWeight: "900", fontSize: 20 }}>
                            Stabuck Coffee 2
                        </Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center'}}>
                            <Text style={{ fontWeight: "900", fontSize: 30, color: '#6DC25C' }}>150$</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10}}>
                                <Icon name="star" size={15} color="#6DC25C" style={{ marginEnd: 1, }} light />
                                <Icon name="star" size={15} color="#6DC25C" style={{ marginEnd: 1, }} light />
                                <Icon name="star" size={15} color="#6DC25C" style={{ marginEnd: 1, }} light />
                                <Icon name="star" size={15} color="#6DC25C" style={{ marginEnd: 1, }} light />
                                <Icon name="star" size={15} color="#6DC25C" style={{ marginEnd: 1, }} light />

                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
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
