import React, { Component } from 'react';
import { ScrollView, StyleSheet} from 'react-native';
import HeaderComponent from '../components/HeaderComponent';
import { Container, Content, Text, List, ListItem, Button, Header, Body, Title, Right, CheckBox, Icon } from 'native-base';
import { connect } from 'react-redux';
import {removeTask} from '../actions'

class ListView extends Component {
    render() {
        const { navigate } = this.props.navigation;

        return (
            <Container>
                <HeaderComponent nav={this.props.navigation}/>
                <Content>
                    
                    <List
                        dataArray={this.props.tasks}
                        renderRow={(data, nothing, index) =>
                            <ListItem>
                                <Body>
                                    <Text >{data}</Text>
                                </Body>
                                <Right>
                                    <Button transparent danger small onPress={() => this.props.removeTask(index)}>
                                        <Text style={ styles.btnRemove} >Remove</Text>
                                    </Button>
                                </Right>
                            </ListItem>}
                    />
                </Content>
            </Container>
        );
    }
}
const mapStateToProps = (state) => {
    return { tasks: state.task.tasks }
}

const styles = StyleSheet.create({
    btnRemove:{
        fontSize: 10
    }
});
export default connect(mapStateToProps,{removeTask})(ListView);
