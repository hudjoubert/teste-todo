import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Body, Right, Button, Icon, Title, Text } from 'native-base';
class HeaderComponent extends Component {
  render() {
    return ( 
        <Header>
          <Body>
            <Title>Things to do</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => this.props.nav.navigate('AddView')}>
              <Text style={styles.btnAdd}>Add</Text>
            </Button>
          </Right>
        </Header>
    );
  }
}

const styles = StyleSheet.create({
    btnAdd:{
        color: 'white',
        fontSize: 18
    }
});
export default HeaderComponent;