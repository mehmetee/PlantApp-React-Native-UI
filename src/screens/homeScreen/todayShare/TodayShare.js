import React from "react";
import { View,Text, TouchableOpacity, Image, } from "react-native";
import {images} from '../../../constants'
import styles from './TodayShare.styles'

function TodaysShare({navigation}){
    return(
        <View style={styles.global_container}>
            <View  style={styles.container}>
                <View style={styles.container_title}> 
                    <View style={styles.inner_container_title}>
                        <Text style={styles.title}>Today's Share</Text>

                        <TouchableOpacity onPress={()=>{console.log("See All on pressed")}}>
                            <Text style={styles.seeAll_ButtonText} >See All</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.inner_Container}>
                    <View style={styles.image_button_container} >
                        <TouchableOpacity style={styles.image_button1} onPress={()=>{navigation.navigate('PlantDetail')}}>
                            <Image 
                            source={images.plant5}
                            style={styles.images1}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.image_button2} onPress={()=>{navigation.navigate('PlantDetail')}}>
                            <Image 
                            source={images.plant6}
                            style={styles.images2}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.image_button_container2}>
                        <TouchableOpacity 
                        onPress={()=>{navigation.navigate('PlantDetail')}}
                        style={styles.image_button3}
                        >
                            <Image source={images.plant7}
                            resizeMode='cover'
                            style={styles.images3}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default TodaysShare;