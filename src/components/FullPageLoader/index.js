import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

const Loading = () => (
   <View style={styles.container}>
      <ActivityIndicator size="large" style={[styles.loading, { transform: [{ scaleX: 2 }, { scaleY: 2 }] }]} color="#8000ff" />
   </View>
);

const styles = StyleSheet.create({
   container: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 1000,
   },
   loading: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(250, 250, 250, 0.8)',
      zIndex: 1000,
   },

});

export default Loading;
