import React, { useState, useRef, useEffect } from 'react';
import { View, TextInput, Text, Animated, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const FloatingLabelInput = ({ label, icon, value, onChangeText, onFocus, onBlur, isFocused, secureTextEntry }) => {
  const animatedIsFocused = useRef(new Animated.Value(value ? 1 : 0)).current;
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  useEffect(() => {
    Animated.timing(animatedIsFocused, {
      toValue: isFocused || value ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [isFocused, value]);

  const labelStyle = {
    position: 'absolute',
    left: 40,
    top: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [Platform.OS === 'ios' ? 20 : 18, -8],
    }),
    fontSize: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 12],
    }),
    color: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: ['gray', 'blue'],
    }),
    backgroundColor: 'white',
    paddingHorizontal: 2,
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={[styles.inputContainer, isFocused && styles.inputContainerFocused]}>
      <Icon name={icon} size={20} color="gray" style={styles.icon} />
      <Animated.Text style={labelStyle}>{label}</Animated.Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder=""
        placeholderTextColor="gray"
        secureTextEntry={secureTextEntry && !isPasswordVisible}
      />
      {secureTextEntry && (
        <TouchableOpacity style={styles.eyeIcon} onPress={togglePasswordVisibility}>
          <Icon name={isPasswordVisible ? 'eye-off' : 'eye'} size={20} color="gray" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default FloatingLabelInput;

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'gray',
    position: 'relative',
    borderRadius: 10,
    paddingTop: 5,
    paddingBottom: 5,
  },
  inputContainerFocused: {
    borderColor: 'blue',
  },
  icon: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 13 : 15,
    left: 10,
  },
  input: {
    height: 50,
    fontSize: 16,
    color: 'black',
    paddingHorizontal: 40,
    borderWidth: 0,
    borderRadius: 10,
    paddingVertical: 0,
  },
  eyeIcon: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 13 : 15,
    right: 10,
  },
});
