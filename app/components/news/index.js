import React, { Component } from 'react';
import { 
    StyleSheet, 
    View, 
    Text,
    ScrollView,
    Image,
    TouchableOpacity 
} from 'react-native';

import { connect } from 'react-redux';
import { getNews } from '../../store/actions/news_actions';

class NewsComponent extends Component {

    componentDidMount() {
        this.props.dispatch(getNews());
    }

    renderArticle = (news) => (
        news.articles ?
            news.articles.map((item,i) => (
                <TouchableOpacity
                    key={i}
                >
                    <View style={styles.cardContainer}>
                        <Image
                            style={{height:150, justifyContent:'space-around'}}
                            source={{uri:`${item.image}`}}
                            resizeMode='cover'
                        />
                    </View>
                </TouchableOpacity>
            ))
        :null
    )

    render() {
        return (
            <ScrollView style={{backgroundColor:'#F0F0F0'}}>
                { this.renderArticle(this.props.News) }
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#fff',
        margin:10,
        shadowColor: '#dddddd',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        borderRadius: 2,
    }
});

function mapStateToProps(state) {
    return {
        News: state.News
    }
}

export default connect(mapStateToProps)(NewsComponent);