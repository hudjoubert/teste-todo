import React, { Component } from 'react';
import { Content, Item, Icon, Input, Label, Button, Text } from 'native-base';


class AddBar extends Component {
    state = {
        value: ''
    }
    render() {
        return (
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
                <Button primary onPress={() => this.props.add(this.state.value, this.props.currentTask)}><Text> Add </Text></Button>
            </Content>
        );
    }
}

export default AddBar;