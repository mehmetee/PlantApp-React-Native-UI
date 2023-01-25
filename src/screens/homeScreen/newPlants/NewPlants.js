import React from "react";
import { View,Text, TouchableOpacity, Image, FlatList } from "react-native";
import styles from './newPlants.styles'
import {icons} from '../../../constants'
import { data } from "../../../data/data";

function NewPlants(){
    const [newPlants,setnewPlants]=React.useState(data)

    function renderNewPlants(item,index){
        return(
            <View style={styles.renderNewPlants_container}>
                <Image 
                    source={item.img}
                    style={styles.renderNewPlants_image}
                />
                <View style={styles.renderNewPlantsText_container}>
                    <Text style={styles.renderNewPlantsText}>{item.name}</Text>
                </View>
                <TouchableOpacity style={styles.favourite_buttons}
                onPress={()=>{console.log("Favourite on Pressed")}}
                >
                    <Image source={item.favourite ? icons.heartRed: icons.heartGreenOutline}
                    style={styles.favourite_icons} />
                </TouchableOpacity>

            </View>
        )
    }
    return(
       
        <View style={styles.global_container}>
            {/*new plants */}
            <View style={styles.container}>
                <View style={styles.inner_container}>
                    <View style={styles.newplants_container}>
                        <Text style={styles.newPlantsText}>New Plants</Text>
                        <TouchableOpacity onPress={()=>{console.log("Focus on password")}} >
                            <Image 
                            source={icons.focus}
                            style={styles.newPlantsİmage}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.newplants_Story_container}>
                        <FlatList 
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={newPlants}
                        keyExtractor={item=>item.id.toString()}
                        renderItem={({item,index})=>renderNewPlants(item,index)}
                        />
                    </View>
                </View>

            </View>

        </View>
       
    )
}

export default NewPlants;