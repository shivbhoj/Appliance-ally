import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
  Button,
} from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const AddApplianceScreen = ({ navigation }) => {
  const [method, setMethod] = useState('manual'); // 'manual', 'photo', 'barcode'
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [serialNumber, setSerialNumber] = useState('');
  const [type, setType] = useState('');
  const [purchaseDate, setPurchaseDate] = useState('');

  const handlePhotoCapture = () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
    };

    launchCamera(options, (response) => {
      if (response.didCancel) {
        return;
      }
      if (response.errorCode) {
        Alert.alert('Error', response.errorMessage);
        return;
      }

      // TODO: Send image to OCR API
      // Example:
      // const formData = new FormData();
      // formData.append('image', {
      //   uri: response.assets[0].uri,
      //   type: response.assets[0].type,
      //   name: response.assets[0].fileName,
      // });
      // const result = await apiService.extractApplianceInfo(formData);
      // setBrand(result.brand);
      // setModel(result.model);
      // setSerialNumber(result.serialNumber);

      Alert.alert('Info', 'OCR integration required to extract appliance data');
    });
  };

  const handleAddAppliance = async () => {
    if (!brand || !model) {
      Alert.alert('Error', 'Please fill in brand and model');
      return;
    }

    try {
      // TODO: Create appliance via API
      // Example:
      // await apiService.createAppliance({
      //   brand,
      //   model,
      //   serialNumber,
      //   type,
      //   purchaseDate,
      // });

      Alert.alert('Success', 'Appliance added successfully', [
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
        <Text style={styles.sectionTitle}>Add Method</Text>
        <View style={styles.methodButtons}>
          <TouchableOpacity
            style={[
              styles.methodButton,
              method === 'manual' && styles.methodButtonActive,
            ]}
            onPress={() => setMethod('manual')}
          >
            <Text
              style={[
                styles.methodButtonText,
                method === 'manual' && styles.methodButtonTextActive,
              ]}
            >
              Manual Entry
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.methodButton,
              method === 'photo' && styles.methodButtonActive,
            ]}
            onPress={() => {
              setMethod('photo');
              handlePhotoCapture();
            }}
          >
            <Text
              style={[
                styles.methodButtonText,
                method === 'photo' && styles.methodButtonTextActive,
              ]}
            >
              Photo (OCR)
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>Brand *</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g., Samsung"
          value={brand}
          onChangeText={setBrand}
        />

        <Text style={styles.label}>Model *</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g., RF28R7351SR"
          value={model}
          onChangeText={setModel}
        />

        <Text style={styles.label}>Serial Number</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g., SN123456789"
          value={serialNumber}
          onChangeText={setSerialNumber}
        />

        <Text style={styles.label}>Type</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g., Refrigerator, Washer, Dryer"
          value={type}
          onChangeText={setType}
        />

        <Text style={styles.label}>Purchase Date</Text>
        <TextInput
          style={styles.input}
          placeholder="YYYY-MM-DD"
          value={purchaseDate}
          onChangeText={setPurchaseDate}
        />

        <TouchableOpacity
          style={styles.addButton}
          onPress={handleAddAppliance}
        >
          <Text style={styles.addButtonText}>Add Appliance</Text>
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
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  methodButtons: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  methodButton: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#007AFF',
    marginHorizontal: 5,
    alignItems: 'center',
  },
  methodButtonActive: {
    backgroundColor: '#007AFF',
  },
  methodButtonText: {
    color: '#007AFF',
    fontWeight: 'bold',
  },
  methodButtonTextActive: {
    color: '#fff',
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
    marginBottom: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  addButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AddApplianceScreen;
