'use strict';

import React from 'react';
import { Platform, View } from 'react-native';

export const isAndroid = () => (Platform.OS === 'android');
export const isIOS = () => (Platform.OS === 'ios');

export const testTarget = (target) => (!target || target === "both" || (target === "android" && isAndroid()) || (target === "ios" && isIOS()));

export const PlataformSelect = (...args) => {
  if(args.length === 1) {
    return args[0];
  } else if(args.length === 2) {
    if(isIOS()) {
      return args[0];
    }

    return args[1]; // isAndroid
  }

  return null;
};

export const PlatformRender = (PlatformRenderComponent) => class extends React.Component {
    static displayName = 'ComponentEnhancedWithPlatformRenderHOC';
    render() {
      if(testTarget(this.props.target || null)) {
        return <PlatformRenderComponent {...this.props} />;
      }

      return null;
    }
};

class BasePlataformView extends React.Component {
  static displayName = 'PlataformView';
  render() {
    return <View {...this.props}>{(this.props.children||[]).map((c) => testTarget(c.props.target || null) && c)}</View>;
  }
};

export const PlataformView = PlatformRender(BasePlataformView);
