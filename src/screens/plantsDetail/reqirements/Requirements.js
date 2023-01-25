import React from "react";
import { View,Text, Image, TouchableOpacity} from "react-native";
import styles from './Requirements.styles'
import { COLORS, FONTS, icons, SIZES } from "../../../constants";

const RequirementsBar=({icon,barPercentage})=>{
    return(
        <View style={{height:60,alignItems:'center'}}>
            <View style={{width:50 ,height:50,alignItems:'center',justifyContent:'center',
                borderRadius:10,
                borderWidth:1,
                borderColor:COLORS.gray
                }}>
                <Image 
                source={icon}
                resizeMode='cover'
                style={{tintColor:COLORS.secondary,width:30,height:30}}
                />
            </View>

            {/*Bar */}
            <View style={{
                position:'absolute',
                bottom:0,
                left:0,
                width:'100%',
                height:3,
                backgroundColor:COLORS.gray
            }}>

            </View>
            <View style={{
                position:'absolute',
                bottom:0,
                left:0,
                width:barPercentage,
                height:3,
                backgroundColor:COLORS.primary
            }}>

            </View>
        </View>
    )
}

const RequirementsDetail=({icon,text,detail})=>{
    return(
        <View style={{flexDirection:'row'}}>
            <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                <Image source={icon}
                resizeMode='cover'
                style={{tintColor:COLORS.secondary,width:30,height:30}}
                />
                <Text style={{marginLeft:SIZES.base,color:COLORS.secondary,...FONTS.h2}} >{text}</Text>
            </View>
            <View style={{flex:1,alignItems:'flex-end'}}>
                <Text style={{marginLeft:SIZES.base,color:COLORS.gray,...FONTS.h3}} >{detail}</Text>
            </View>
        </View>
    )
}


function Requirements(){
    
 const renderRequirementsBar=()=>{
    return(
        <View style={styles.renderRequirementsComponents_container}>
            <RequirementsBar 
            icon={icons.sun}
            barPercentage='50%'
            />
            <RequirementsBar 
            icon={icons.drop}
            barPercentage='25%'
            />
            <RequirementsBar 
            icon={icons.temperature}
            barPercentage='80%'
            />
            <RequirementsBar 
            icon={icons.garden}
            barPercentage='30%'
            />
            <RequirementsBar 
            icon={icons.seed}
            barPercentage='50%'
            />
        </View>
    )
 }

 const renderRequirements=()=>{
    return(
        <View style={{flex:2.5,marginTop:SIZES.padding,paddingHorizontal:SIZES.padding,justifyContent:'space-around'}}>
            <RequirementsDetail 
            icon={icons.sun}
            text='Sunlight'
            detail='15°C'
            />
            <RequirementsDetail 
            icon={icons.drop}
            text='Water'
            detail='250 ML Daily'
            />
            <RequirementsDetail 
            icon={icons.temperature}
            text='Room Temp'
            detail='25°C'
            />
            <RequirementsDetail 
            icon={icons.garden}
            text='Soil'
            detail='3 Kg'
            />
            <RequirementsDetail 
            icon={icons.seed}
            text='Fretilizer'
            detail='150 Mg'
            />
        </View>
    )
 }

 const renderFooter=()=>{
    return(
        <View style={{flex:1,flexDirection:'row',paddingVertical:SIZES.padding}}>
            <TouchableOpacity style={{
                backgroundColor:COLORS.primary,
                paddingHorizontal:SIZES.padding,
                flex:1,
                alignItems:'center',
                justifyContent:'center',
                borderBottomRightRadius:30,
                borderTopRightRadius:30,
                flexDirection:'row'
            }} >
                <Text style={{color:COLORS.white,...FONTS.h2}}>Take Action</Text>
                <Image source={icons.chevron}
                resizeMode='cover'
                style={{width:20,height:20,marginLeft:SIZES.base}} />
            </TouchableOpacity>
            <View style={{flexDirection:'row',flex:1,alignItems:'center',justifyContent:'center',paddingHorizontal:SIZES.padding}}>
                <Text style={{flex:1,color:COLORS.secondary,...FONTS.h3}}>Almost 2 weeks of growing time.</Text>
                <Image source={icons.downArrow}
                resizeMode='cover'
                style={{tintColor:COLORS.secondary,
                marginLeft:SIZES.base,
                width:20,
                height:20}}
                />
            </View>
        </View>
    )
 }
    
    return(
        <View style={styles.global_container}>
            <Text style={styles.requirementsTitleText}>Requirements</Text>
            {renderRequirementsBar()}
            {renderRequirements()}
            {renderFooter()}
        </View>
    )
}

 export default Requirements;