import React from 'react';
import {View, Button, Text} from 'react-native';

class ReviewScreen extends React.Component {
    static navigationOptions = ({navigation, screenProps}) => ({
        title: 'Review Screen',
        headerRight: (<Button title="go" onPress={()=> navigation.navigate('settings')} />)
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