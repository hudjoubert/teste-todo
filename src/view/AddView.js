import React, { Component } from 'react'
import { Container, Content, Text, Item, Label, Input, Button, Header, Body, Title, Right, Icon } from 'native-base';
import { connect } from 'react-redux';
import { AddTask } from '../actions';

class AddView extends Component {

  state = {
    value: ''
  }

  saveTask = () => {
    this.props.AddTask(this.state.value)
    this.props.navigation.navigate('Home', {})
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Header>
          <Body>
            <Title>Things to do</Title>
          </Body>
        </Header>
        <Content>
          <Item >
            <Label>TO DO:</Label>
            <Input
              placeholder='add something'
              returnKeyType="next"
              floatingLabel
              onChangeText={(task) => this.setState({ value: task })}
              value={this.state.value}
            />
          </Item>
          <Button block primary onPress={this.saveTask}><Text> Adicionar Item </Text></Button>
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return { tasks: state.task.tasks }
}
export default connect(mapStateToProps, { AddTask })(AddView);
