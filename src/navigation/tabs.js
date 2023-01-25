import React from "react";
import { View,Image } from "react-native";
import {createBottomTabNavigator}from '@react-navigation/bottom-tabs';
import {COLORS ,icons} from '../constants'
import Home from '../screens/homeScreen/Home'

const Tab = createBottomTabNavigator();

const tabOptions={
    showLabel:false,
    style:{heigth:'10%'}
    
}

const CameraButton =()=>{
    return(
        <View
        style={{
            alignItems:'center',
            justifyContent:'center',
            width:47,
            height:47,
            borderRadius:25,
            backgroundColor:COLORS.primary
        }}
        >
            <Image source={icons.camera}
            resizeMode='contain'
            style={{
                width:23,
                height:23,
            }}
            />
        </View>
    )
}


function Tabs(){
    return(
        <Tab.Navigator tabBarOptions={tabOptions}
        screenOptions={({route})=>({
            tabBarIcon:({focused})=>{
                const tintColor= focused ? COLORS.primary : COLORS.gray;
                switch (route.name) {
                    case "Home":
                        return(
                            <Image source={icons.flash}
                            resizeMode='contain'
                            style={{
                                tintColor:tintColor,
                                height:25,width:25
                            }}
                            />
                        )
                    case "Box":
                        return(
                            <Image source={icons.cube}
                            resizeMode='contain'
                            style={{
                                tintColor:tintColor,
                                height:25,width:25
                            }}
                            />
                        )
                    case 'Camera':
                        return(
                         <CameraButton />
                        )
                    case "Search":
                        return(
                            <Image source={icons.search}
                            resizeMode='contain'
                            style={{
                                tintColor:tintColor,
                                height:25,width:25
                            }}
                            />
                        )
                    case "Favorite":
                        return(
                            <Image source={icons.heart}
                            resizeMode='contain'
                            style={{
                                tintColor:tintColor,
                                height:25,width:25
                            }}
                            />
                        )
                }
                 
            }
        })}
        >
            <Tab.Screen name="Home" component={Home} options={{headerShown:false}}/>
            <Tab.Screen name="Box" component={Home} options={{headerShown:false}}/>
            <Tab.Screen name="Camera" component={Home} options={{headerShown:false}}/>
            <Tab.Screen name="Search" component={Home} options={{headerShown:false}}/>
            <Tab.Screen name="Favorite" component={Home} options={{headerShown:false}}/>
        </Tab.Navigator>
    )
}

export default Tabs;