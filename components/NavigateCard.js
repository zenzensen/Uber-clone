import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from "tailwind-react-native-classnames";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env";
import { Navigation } from 'react-native-navigation';

const NavigateCard = () => {
    return (
        <SafeAreaView style={tw `bg-white flex-1`}>
            <Text style={tw`text-center py-5 text-xl`}>Good Morning, Zenab</Text>
            <View style={tw`border-t border-gray-200 flex-shrink`}>
                <View>
                    <GooglePlacesAutocomplete 
                    placeholder="Where to?"
                    styles={toInputBoxStyles}
                    fetchDetails={true}
                    returnKeyType={"search"}
                    minLength={2}
                    onPress={(data, details = null) => {
                        dispatchEvent(
                            setDestination({
                                location: details.geometry.location,
                                description: data.description,
                            })
                        );
                        Navigation.navigate("RideOptionsCard");
                    }}
                    enablePoweredByContainer={false}
                    query={{
                        key: GOOGLE_MAPS_APIKEY,
                        language:"en",
                    }}
                    nearbyPlacesAPI='GooglePlacesSearch'
                    debounce={400}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default NavigateCard

const toInputBoxStyle = StyleSheet.create({
    container: {
        backgroundColor: "white",
        paddingTop:20,
        flex:0,
    },
    textInput: {
        backgroundColor:"#DDDDF",
        borderRadius:0,
        fontSize:18,
    },
    textInputContainer: {
        paddingHorizontal:20,
        paddingBottom: 0,
    },
});