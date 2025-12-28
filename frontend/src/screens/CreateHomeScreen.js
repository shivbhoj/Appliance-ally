import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';

const CreateHomeScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const handleCreateHome = async () => {
    if (!name) {
      Alert.alert('Error', 'Please enter a home name');
      return;
    }

    try {
      // TODO: Create home via API
      // Example:
      // await apiService.createHome({ name, address });
      
      Alert.alert('Success', 'Home profile created', [
        {
          text: 'OK',
          onPress: () => navigation.goBack(),
        },
      ]);
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.label}>Home Name *</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g., Main House"
          value={name}
          onChangeText={setName}
        />

        <Text style={styles.label}>Address (Optional)</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Enter full address"
          value={address}
          onChangeText={setAddress}
          multiline
          numberOfLines={3}
        />

        <TouchableOpacity
          style={styles.createButton}
          onPress={handleCreateHome}
        >
          <Text style={styles.createButtonText}>Create Home Profile</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  input: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  textArea: {
    height: 80,
    textAlignVertical: 'top',
  },
  createButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  createButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CreateHomeScreen;
