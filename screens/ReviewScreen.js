import React from 'react';
import {View, Button, Text, Platform} from 'react-native';

class ReviewScreen extends React.Component {
    static navigationOptions = ({navigation, screenProps}) => ({
        title: 'Review Screen',
        headerRight: (<Button title="settings" onPress={()=> navigation.navigate('settings')} />),
        headerStyle: { 
            marginTop: Platform.OS === 'android' ? 50 : 0
        }
    })

    render() {
        return(
            <View>
                <Text> Review Screen </Text>
                <Text> Review Screen </Text>
                <Text> Review Screen </Text>
            </View>
        )
    }
}

export default ReviewScreen;