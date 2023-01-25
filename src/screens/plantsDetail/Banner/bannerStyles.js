import { StyleSheet } from "react-native";
import { SIZES,COLORS,FONTS } from "../../../constants";

export default StyleSheet.create({
    global_Container:{
        height:'35%'
    },
    bannerİmage:{
        resizeMode:'cover',
        width:'100%',
        height:'100%',
    },
    //render header styles
    container:{
        position:'absolute',
        top:20,
        left:SIZES.padding,
        right:SIZES.padding
    },
    inner_container:{
        flexDirection:'row'
    },
    navigation_bottom_container:{
        flex:1
    },
    navigation_Bottom:{
        width:40,
        height:40,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20,
        backgroundColor:'rgba(255,255,255,0.5)'
    },
    button_image:{
        resizeMode:'contain',
        width:20,
        height:20,
        alignItems:'center',
        justifyContent:'center'
    },
    focus_button:{
        flex:1,
        alignItems:'flex-end',
        justifyContent:'center'
    },
    focus_buttonimage:{
        resizeMode:'contain',
        width:25,
        height:25,
    },
    largeTitle_container:{
        flexDirection:'row',marginTop:'8%'
    },
    largeTitle:{
        color:COLORS.white,
        ...FONTS.largeTitle
    }

})