import React  from "react";
import { View, StyleSheet,} from "react-native";
import NewPlants from "./newPlants/NewPlants";
import TodaysShare from "./todayShare/TodayShare";
import AddedFriend from "./AddedFriend/AddedFriend";

function Home({navigation}){
    return(
        <View style={styles.container}>
            
            {/*new plants */}
            <NewPlants navigation={navigation}/>
            {/*Today's Share */}
            <TodaysShare navigation={navigation} />
            {/*Added Friend */}
            <AddedFriend />

        </View>
    )
}

export default Home;

const styles=StyleSheet.create({
    container:{
        flex:1
    }
})