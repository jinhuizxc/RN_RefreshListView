/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Demo from './src/Demo'

export default class RN_RefreshListView extends Component {
    render() {
        return (
            <Demo/>
        );
    }
}

AppRegistry.registerComponent('RN_RefreshListView', () => RN_RefreshListView);
