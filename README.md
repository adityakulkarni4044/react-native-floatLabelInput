Certainly! Here's a template you can directly copy and paste into your README file:

---

# FloatingLabelInput Component

The FloatingLabelInput component is a reusable input field component for React Native applications. It provides a floating label above the input field, along with an optional icon on the left side and support for secure text entry (e.g., passwords).

## Installation

To use the FloatingLabelInput component in your React Native project, install it from npm:

```
npm install react-native-floatLabelInput@1.0.0
```

## Usage

Import the FloatingLabelInput component into your React Native file:

```javascript
import FloatingLabelInput from 'react-native-floatLabelInput';
```

Use the FloatingLabelInput component in your JSX like any other React Native component:

```javascript
<FloatingLabelInput
  label="Username"
  value={username}
  onChangeText={setUsername}
  onFocus={() => setIsUsernameFocused(true)}
  onBlur={() => setIsUsernameFocused(false)}
  isFocused={isUsernameFocused}
  icon="email-outline"
/>
```

## Props

- `label`: The label to be displayed above the input field.
- `icon`: The name of the icon to be displayed on the left side of the input field.
- `value`: The current value of the input field.
- `onChangeText`: A function to handle text input changes.
- `onFocus`: A function to handle the input field focus event.
- `onBlur`: A function to handle the input field blur event.
- `isFocused`: A boolean indicating whether the input field is currently focused.
- `secureTextEntry`: A boolean indicating whether the input should be masked for sensitive data like passwords.

## Example

```javascript
import React, { useState } from 'react';
import { View } from 'react-native';
import FloatingLabelInput from 'react-native-floatLabelInput';

const MyScreen = () => {
  const [username, setUsername] = useState('');
  const [isUsernameFocused, setIsUsernameFocused] = useState(false);

  return (
    <View>
      <FloatingLabelInput
        label="Username"
        value={username}
        onChangeText={setUsername}
        onFocus={() => setIsUsernameFocused(true)}
        onBlur={() => setIsUsernameFocused(false)}
        isFocused={isUsernameFocused}
        icon="email-outline"
      />
    </View>
  );
};

export default MyScreen;
```

## License

This project is licensed under the [ISC License](LICENSE).

---
