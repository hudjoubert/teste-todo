import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Container, Content, Text, Item, Label, Input, Button } from 'native-base';
import { connect } from 'react-redux';
import { AddTask, getTask } from '../actions';
import AddBar from '../components/AddBar';
import ListItem from '../components/ListItem';

class ListView extends Component {
        state = {
        value: ''
    }
    componentDidMount() {
        this.props.getTask(this.props.tasks);
    }

    render() {
        console.log(this.props);

        const toDoList = this.props.tasks.map(task => {
            
            return <ListItem key={task} task={task}></ListItem>
        })
        console.log(toDoList);
        
        return (
            <Container>
                <Content>
                    <Item >
                        <Label>TO DO:</Label>
                        <Input placeholder='add something'
                            returnKeyType="next"
                            placeholder='add something'
                            onChangeText={(task) => this.setState({ value: task })}
                            value={this.state.value}
                        />
                    </Item>
                    <Button primary onPress={() => this.props.AddTask(this.state.value, this.props.tasks)}><Text> Add </Text></Button>
                </Content>
                {toDoList}
            </Container>
        );
    }
}
const mapStateToProps = (state) => {
    return { tasks: state.task.tasks }
}
export default connect(mapStateToProps, { AddTask, getTask })(ListView);
