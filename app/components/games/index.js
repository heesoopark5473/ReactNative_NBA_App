import React, { Component } from 'react';
import { 
    StyleSheet, 
    View, 
    Text,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native';

import { connect } from 'react-redux';
import { getGames } from '../../store/actions/games_actions';
import Moment from 'moment';


class GameComponent extends Component {

    componentDidMount() {
        this.props.dispatch(getGames());
    }

    render() {
        return (
            <View>
                <Text>Hello I am the Game</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({

});

function mapStateToProps(state) {
    console.log(JSON.stringify(state,null,2));
    return {
        Games: state.Games
    }
}

export default connect(mapStateToProps)(GameComponent);