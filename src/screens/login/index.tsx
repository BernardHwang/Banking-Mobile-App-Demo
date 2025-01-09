// BankingLogin.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker'; // Import Dropdown Picker
import { useUserContext } from '../../contexts/user-context'; // Import the custom hook

export const list = [
  {
    picUrl: "https://i.pinimg.com/236x/af/84/d1/af84d13e2a6fb1e5f554dd4148b96860.jpg",
    username: "Ducky",
    password: '123456',
    membership: 'gold',
    id: 'user1',
    isVIP: false,
  },
  {
    picUrl: "https://avatarfiles.alphacoders.com/221/221852.jpg",
    username: "Adrian",
    password: '123456',
    membership: 'bronze',
    id: 'user2',
    isVIP: false,
  },
  {
    picUrl: "https://yourdailygerman.com/wp-content/uploads/2022/12/gigachad.jpg",
    username: "Sigma Boy",
    password: '123456',
    membership: 'silver',
    id: 'user3',
    isVIP: false,
  },
  {
    picUrl: "https://wallpapers-clan.com/wp-content/uploads/2022/05/meme-pfp-12.jpg",
    username: "Dora",
    password: '123456',
    membership: 'platinum',
    id: 'user4',
    isVIP: true,
  },
  {
    picUrl: "https://i.pinimg.com/originals/27/7b/91/277b91aa5f1d13aaf22dd7a6018539cc.jpg",
    username: "Fluffy",
    password: '123456',
    membership: 'gold',
    id: 'user5',
    isVIP: false,
  },
  {
      picUrl: "https://i.pinimg.com/564x/8b/ef/ab/8befab63c768d21b3b0a0a4f7c5f4c58.jpg",
      username: "TechieGirl",
      password: 'password123',
      membership: 'silver',
    id: 'user6',
    isVIP: true,
  },
  {
      picUrl: "https://i.imgur.com/a3WzOQI.jpg",
      username: "SkaterBoi",
      password: 'skate42',
      membership: 'bronze',
    id: 'user7',
    isVIP: false,
  },
  {
      picUrl: "https://i.imgur.com/4XzHhzB.jpg",
      username: "QueenBee",
      password: '1234abcd',
      membership: 'platinum',
    id: 'user8',
    isVIP: true,
  },
  {
      picUrl: "https://cdn.pixabay.com/photo/2020/01/22/17/26/avatar-4783030_1280.png",
      username: "ChocoLover",
      password: 'yummy123',
      membership: 'gold',
    id: 'user9',
    isVIP: false,
  },
  {
      picUrl: "https://cdn.pixabay.com/photo/2021/02/21/21/01/avatar-6036495_960_720.png",
      username: "PixelGuy",
      password: 'retro678',
      membership: 'silver',
    id: 'user10',
    isVIP: false,
  },
  {
      picUrl: "https://www.kindpng.com/picc/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png",
      username: "MysteryMan",
      password: 'unknown007',
      membership: 'bronze',
    id: 'user11',
    isVIP: false,
  },
  {
      picUrl: "https://i.imgur.com/d5UqfOQ.jpg",
      username: "AdventureCat",
      password: 'cat123',
      membership: 'gold',
    id: 'user12',
    isVIP: true,
  },

];

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const [open, setOpen] = useState(false); // State for dropdown open/close
  const { login } = useUserContext(); // Access the login function from context

  useEffect(() => {
    const user = list.find((item) => item.username === selectedUser);
    if (user) {
      setUsername(user.username);  // Set the username
      setPassword(user.password);  // Set the password
    } else {
      setUsername('');  // Clear the fields if no user found
      setPassword('');
    }
  }, [selectedUser]);
  

  const handleLogin = () => {
    // Find the user in the list
    const user = list.find(
      (item) =>
        item.username.toLowerCase() === username.toLowerCase() && // Match username
        item.password === password // Match password
    );

    if (user) {
      // User found, set user details and login
      const userDetails = {
        picUrl: user.picUrl,
        username: user.username,
        password: user.password,
        memberType: user.membership,
        isVIP: user.isVIP,
        id: user.id
      };
      login(userDetails); // Call the login function from context
    } else {
      // User not found, show an alert
      Alert.alert('Login Failed', 'Invalid username or password. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <DropDownPicker
        open={open}
        value={selectedUser}
        items={list.map((user) => ({ label: `${user.username} - ${user.isVIP ? 'VIP' : 'Normal'}`, value: user.username }))}
        setOpen={setOpen}
        setValue={setSelectedUser}
        placeholder="Select a user"
        style={styles.dropdown}
        containerStyle={styles.dropdownContainer}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Username"
        placeholderTextColor="#999"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Password"
        placeholderTextColor="#999"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#ffffff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  dropdownContainer: { width: '100%', marginBottom: 15 },
  dropdown: { width: '100%', height: 50, borderRadius: 8 },
  input: { width: '100%', padding: 15, borderWidth: 1, borderRadius: 8, marginBottom: 10 },
  button: { padding: 15, backgroundColor: '#007BFF', borderRadius: 8, width: '100%' },
  buttonText: { color: '#fff', textAlign: 'center', fontSize: 16 },
});

export default Login;
