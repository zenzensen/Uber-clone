import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MapView from 'react-native-maps';
import tw from 'tailwind-react-native-classnames';

const MapScreen = () => {
    return (
        <View>
            <View style={tw`h-1/2`}>
                <Map />
            </View>
        <View style={tw`h-1/2`}>
            <Stack.Navigator>
                <Stack.Screen 
                    name="NavigateCard"
                    component={NavigateCard}
                    options={{
                        headerShown: false,
                    }}
                />
                <StackScreen 
                    name="RideOptionsCard"
                    component={RideOptionsCard}
                    options={{
                        headerShown:false,
                    }}
                />
            </Stack.Navigator>
        </View>
        <View style={tw`h-1/2`}></View>
        </View>
        

    )
}

export default MapScreen

const styles = StyleSheet.create({})
