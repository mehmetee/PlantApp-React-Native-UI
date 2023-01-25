import React from "react";
import { View ,Text, Image, TouchableOpacity} from "react-native";
import styles from './bannerStyles';
import {icons, images} from '../../../constants'


function BannerPhoto({navigation}){
    const renderHeader=()=>{
        return(
            <View style={styles.container}>
                <View style={styles.inner_container}>
                    <View style={styles.navigation_bottom_container}>
                        <TouchableOpacity style={styles.navigation_Bottom}
                        onPress={()=>{navigation.goBack("Home")}}>
                            <Image source={icons.back}
                            style={styles.button_image}/>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.focus_button}
                    onPress={()=>{console.log('Focus on Pressed')}}
                    >
                        <Image 
                        source={icons.focus}
                        style={styles.focus_buttonimage}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.largeTitle_container}>
                    <View >
                        <Text style={styles.largeTitle}>Glory Mantas</Text>
                    </View>
                </View>
            </View>
        )
    }
    return(
        <View style={styles.global_Container}>
            <Image 
            source={images.bannerBg}
            style={styles.bannerİmage}
            />
            {renderHeader()}
        </View>
    )
}

export default BannerPhoto;