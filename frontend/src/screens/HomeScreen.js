import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Alert,
} from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [appliances, setAppliances] = useState([]);

  useEffect(() => {
    // TODO: Fetch appliances from API
    // Example:
    // const fetchAppliances = async () => {
    //   const response = await apiService.getAppliances();
    //   setAppliances(response.data);
    // };
    // fetchAppliances();
  }, []);

  const renderApplianceItem = ({ item }) => (
    <TouchableOpacity
      style={styles.applianceCard}
      onPress={() => navigation.navigate('ApplianceDetail', { appliance: item })}
    >
      <View style={styles.applianceInfo}>
        <Text style={styles.applianceBrand}>{item.brand}</Text>
        <Text style={styles.applianceModel}>{item.model}</Text>
        <Text style={styles.applianceType}>{item.type}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {appliances.length === 0 ? (
        <View style={styles.emptyState}>
          <Text style={styles.emptyStateTitle}>No Appliances Yet</Text>
          <Text style={styles.emptyStateText}>
            Add your first appliance to get started
          </Text>
        </View>
      ) : (
        <FlatList
          data={appliances}
          renderItem={renderApplianceItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.listContainer}
        />
      )}

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AddAppliance')}
      >
        <Text style={styles.addButtonText}>+ Add Appliance</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  listContainer: {
    padding: 15,
  },
  applianceCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  applianceInfo: {
    flexDirection: 'column',
  },
  applianceBrand: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  applianceModel: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  applianceType: {
    fontSize: 14,
    color: '#999',
    marginTop: 5,
    textTransform: 'capitalize',
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyStateTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  emptyStateText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  addButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    margin: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
