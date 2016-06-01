# react-native-platform-render
React Native swiss army knife tools to platform conditional render

[![npm version](http://img.shields.io/npm/v/react-native-platform-render.svg?style=flat-square)](https://npmjs.org/package/react-native-platform-render "View this project on npm")
[![npm downloads](http://img.shields.io/npm/dm/react-native-platform-render.svg?style=flat-square)](https://npmjs.org/package/react-native-platform-render "View this project on npm")
[![npm licence](http://img.shields.io/npm/l/react-native-platform-render.svg?style=flat-square)](https://npmjs.org/package/react-native-platform-render "View this project on npm")


This module provides a couple of functions and components to help in conditional render for a specifically platform (Android or iOS). Some of this techniques can help you in that struggling work of keep a single code base for cross-platform projects.

### Installation

```bash
npm install react-native-platform-render --save
```

## Conditional Container

The "PlatformView" component can take care of rendering or not your children components by filter the "target" attribute/prop.

```javascript
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { PlataformView } from 'react-native-platform-render';

class AwesomeProject extends Component {
  render() {
    return (
      <PlataformView style={{borderWidth: 1, borderColor: 'red'}}>
        <Text target="ios">
          Here you are at iOS!
        </Text>
        <Text target="android">
          Here you are at ANDROID!
        </Text>
      </PlataformView>
    );
  }
}
```

## Higher-Order Component to work with RN Components

This HO Component enhance your custom or native components with the "target" attribute/prop behavior.

```javascript
import React, { Component } from 'react';
import { Text, View } from 'react-native';

import { PlatformRender } from 'react-native-platform-render';

const PRText = PlatformRender(Text); // Enhancing `Text` component with the "target" attribute/prop behavior.

class AwesomeProject extends Component {
  render() {
    return (
      <View style={{borderWidth: 1, borderColor: 'blue'}}>
        <PRText target="ios">
          Here you are at iOS!
        </PRText>
        <PRText target="android">
          Here you are at ANDROID!
        </PRText>
      </View>
    );
  }
}
```

## Conditional Pure Function

This function/method works with two arguments, first one is the iOS content and second is the Android content for rendering.

```javascript
import React, { Component } from 'react';
import { Text, View } from 'react-native';

import { PlataformSelect } from 'react-native-platform-render';

class AwesomeProject extends Component {
  render() {
    const conditionalContent = PlataformSelect(
      <Text>
        Here you are iOS!
      </Text>,
      <Text>
        Here you are ANDROID!
      </Text>
    );

    return (
      <View style={{borderWidth: 1, borderColor: 'blue'}}>
        {conditionalContent}
      </View>
    );
  }
}
```

## License
MIT

