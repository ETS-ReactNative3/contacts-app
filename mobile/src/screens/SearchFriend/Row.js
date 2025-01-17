import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

export default class Row extends React.PureComponent {
  render() {
      return (
        <TouchableOpacity style={styles.contact} onPress={() => this.props.navigation.navigate("FriendDetails", {contactId: this.props.obj.id})}>
          <View style={styles.thumbnail}>
            { this.props.obj.avatar ? <Image
                                        style={[styles.profilePicture, styles.thumbnail]}
                                        source={{uri: this.props.obj.avatar}}
                                      />
                                    : <Image
                                        style={[styles.profilePicture, styles.thumbnail]}
                                        source={require("../../../assets/anonymous-avatar-icon-25.jpg")}
                                      />
            }
          </View>
          <View style={styles.contactInfo}>
            <Text style={styles.contactName}>{this.props.obj.name}</Text>
            <Text style={styles.contactCompany}>{this.props.obj.company}</Text>
          </View>
        </TouchableOpacity>
      );
  }
}