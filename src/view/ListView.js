import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Container, Content, Text, List, ListItem, Button } from 'native-base';
import { connect } from 'react-redux';

class ListView extends Component {
    render() {
        const { navigate } = this.props.navigation;

        return (
            <Container>
                <Content>
                    <Button primary onPress={() => navigate('AddView')}><Text> Adicionar Item </Text></Button>
                    <List
                        dataArray={this.props.tasks}
                        renderRow={data =>
                        <ListItem onPress={null}>
                            <Text >{data}</Text>
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
export default connect(mapStateToProps)(ListView);
