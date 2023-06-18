// ItemListScreen.js

import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchItemsAsync, deleteItemAsync } from './store';

const ItemListScreen = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items.items);
  const loading = useSelector((state) => state.items.loading);

  useEffect(() => {
    dispatch(fetchItemsAsync());
  }, [dispatch]);

  const handleDelete = (itemId) => {
    dispatch(deleteItemAsync(itemId));
  };

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View>
      {items.map((item) => (
        <View key={item.id}>
          <Text>{item.name}</Text>
          <Button title="Delete" onPress={() => handleDelete(item.id)} />
        </View>
      ))}
    </View>
  );
};

export default ItemListScreen;
