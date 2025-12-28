import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

const UploadDocumentScreen = ({ route, navigation }) => {
  const { appliance } = route.params || {};
  const [selectedFile, setSelectedFile] = useState(null);

  const handleSelectFile = () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        return;
      }
      if (response.errorCode) {
        Alert.alert('Error', response.errorMessage);
        return;
      }

      setSelectedFile(response.assets[0]);
    });
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      Alert.alert('Error', 'Please select a file');
      return;
    }

    try {
      // TODO: Upload document to API
      // Example:
      // const formData = new FormData();
      // formData.append('file', {
      //   uri: selectedFile.uri,
      //   type: selectedFile.type,
      //   name: selectedFile.fileName,
      // });
      // formData.append('applianceId', appliance.id);
      // formData.append('documentType', 'manual'); // or 'warranty', 'receipt'
      // await apiService.uploadDocument(formData);

      Alert.alert('Success', 'Document uploaded successfully', [
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
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Upload Document</Text>
        <Text style={styles.subtitle}>
          Upload manuals, warranties, or receipts
        </Text>

        {selectedFile && (
          <View style={styles.fileInfo}>
            <Text style={styles.fileName}>{selectedFile.fileName}</Text>
            <Text style={styles.fileSize}>
              {(selectedFile.fileSize / 1024).toFixed(2)} KB
            </Text>
          </View>
        )}

        <TouchableOpacity
          style={styles.selectButton}
          onPress={handleSelectFile}
        >
          <Text style={styles.selectButtonText}>Select File</Text>
        </TouchableOpacity>

        {selectedFile && (
          <TouchableOpacity
            style={styles.uploadButton}
            onPress={handleUpload}
          >
            <Text style={styles.uploadButtonText}>Upload</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
  },
  fileInfo: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  fileName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  fileSize: {
    fontSize: 14,
    color: '#666',
  },
  selectButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  selectButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  uploadButton: {
    backgroundColor: '#34C759',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  uploadButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default UploadDocumentScreen;
