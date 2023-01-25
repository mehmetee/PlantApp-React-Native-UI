import { StyleSheet } from "react-native";
import { COLORS,FONTS,SIZES } from "../../../constants";

export default StyleSheet.create({
    global_container:{
        flex:1,
        marginTop:-40,
        backgroundColor:COLORS.lightGray,
        borderTopLeftRadius:40,
        borderTopRightRadius:40,
        paddingVertical:SIZES.padding
    },
    requirementsTitleText:{
        color:COLORS.secondary,
        paddingHorizontal:SIZES.padding,
        ...FONTS.body1,
        fontWeight:'bold'
    },
    renderRequirementsComponents_container:{
        flexDirection:'row',
        marginTop:SIZES.padding,
        paddingHorizontal:SIZES.padding,
        justifyContent:'space-between',
    }
})