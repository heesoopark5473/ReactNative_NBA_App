import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class NewsComponent extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>Hello I am the News</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    }
});

export default NewsComponent;