// ItemCreateScreen.js

import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { createItemAsync } from './store';

const ItemCreateScreen = () => {
  const [itemName, setItemName] = useState('');
  const dispatch = useDispatch();

  const handleCreate = () => {
    dispatch(createItemAsync({ name: itemName }));
    setItemName('');
  };

  return (
    <View>
      <TextInput
        placeholder="Item Name"
        value={itemName}
        onChangeText={setItemName}
      />
      <Button title="Create" onPress={handleCreate} />
    </View>
  );
};

export default ItemCreateScreen;