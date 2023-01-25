import React,{useState} from "react";
import { View,Text, TouchableOpacity, Image, } from "react-native";
import {COLORS, FONTS,icons,} from '../../../constants'
import { frienData } from "../../../data/frienData";
import styles from './friend.Styles';

function AddedFriend(){

    const [friendList,setfriendList]=useState(frienData)

    
    function renderFriendsComponents(){
        if(friendList.length==0){
            return(
                <View></View>
            )
        }
        else if(friendList.length <=3){
            return(
                friendList.map((item,index)=>(
                    <View key={`friend-${index}`} 
                    style={index==0?{}:styles.friendsContainersmall3}>
                        <Image 
                        source={item.img}
                        style={styles.friendsContainersmall3image}
                        />
                    </View>
                ))
            )
        }
        else{
            return(
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    {friendList.map((item,index)=>{
                        if(index <=2){
                            return(
                                <View
                                key={`friend-${index}`}
                                style={index==0 ? {}:{marginLeft:-20}}
                                >
                                    <Image 
                                    source={item.img}
                                    resizeMode='cover'
                                    style={{
                                        width:45,
                                        height:45,
                                        borderRadius:25,
                                        borderWidth:3,
                                        borderColor:COLORS.primary
                                    }}
                                    />
                                </View>
                            )
                        }
                    } )}
                    <Text  style={{marginLeft:5,color:COLORS.secondary,...FONTS.body3}}>+{friendList.length-3} More</Text>
                </View>
            )
        }
    }


    return(
        <View style={styles.global_container}>
            <View style={styles.container}>
                <View style={styles.body_Container}>
                    <Text style={styles.addedTitle} >Added Friends</Text>
                    <Text style={styles.addedTotalText}>{friendList.length} total</Text>
                    <View style={styles.inner_Container}>
                        <View style={styles.renderFriends_container} >
                            {renderFriendsComponents()}
                        </View>
                        <View style={styles.addedNew_Container} >
                            <Text style={styles.addedNewText}>Add New</Text>
                            <TouchableOpacity style={styles.addedButton}
                            onPress={()=>{console.log("Add friend on pressed")}}>
                                <Image 
                                source={icons.plus}
                                style={styles.addedButton_image}
                                />
                            </TouchableOpacity>    
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default AddedFriend;