import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class ArticleComponent extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>Hello I am the Article</Text>
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

export default ArticleComponent;