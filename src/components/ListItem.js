import React, { Component } from 'react';
import { Content, Text, Card, CardItem } from 'native-base';

class ListItem extends Component {
    render() {        
        return (
            <Content>
                <Card>
                    <CardItem>
                        <Text>{this.props.task}</Text>
                    </CardItem>
                </Card>
            </Content>
        );
    }
}

export default ListItem;