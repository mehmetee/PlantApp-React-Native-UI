import { StyleSheet } from "react-native";
import {COLORS, FONTS, SIZES} from '../../../constants'

export default StyleSheet.create({
    global_container:{
        height:"30%",
        backgroundColor:COLORS.white
    },
    container:{
        flex:1,
        borderBottomLeftRadius:50,
        borderBottomRightRadius:50,
        backgroundColor:COLORS.primary
    },
    inner_container:{
        marginTop:SIZES.padding *1.5,
        marginHorizontal:SIZES.padding
    },
    newplants_container:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    newPlantsText:{
        color:COLORS.white,
        ...FONTS.h2
    },
    newPlantsİmage:{
        resizeMode:'contain',
        width:20,
        height:20
    },
    newplants_Story_container:{
        marginTop:SIZES.base,
    },
    renderNewPlants_container:{
        alignItems:'center',
        marginHorizontal:SIZES.base
    },
    renderNewPlants_image:{
        resizeMode:'cover',
        width:SIZES.width *0.23,
        height:'82%',
        borderRadius:15
    },
    renderNewPlantsText_container:{
        position:'absolute',
        bottom:"25%",
        right:0,
        backgroundColor:COLORS.primary,
        paddingHorizontal:SIZES.base,
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10
    },
    renderNewPlantsText:{
        color:COLORS.white,
        ...FONTS.body4
    },
    favourite_buttons:{
        position:'absolute' ,
        top:"7%",
        left:7
    },
    favourite_icons:{
        resizeMode:'contain',
        width:20,
        height:20,
    }
})