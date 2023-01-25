import React  from "react";
import { View,Text, StyleSheet } from "react-native";
import BannerPhoto from './Banner';
import Requirements from "./reqirements";

function PlantDetail({navigation}){
    return(
        <View style={styles.container}>
            {/*Banner Photo*/}
            <BannerPhoto navigation={navigation}/>
            {/*Requirements*/}
            <Requirements />
        </View>
    )
}

export default PlantDetail;

const styles=StyleSheet.create({
    container:{
        flex:1
    }
})