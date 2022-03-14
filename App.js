import React, {useState} from 'react';
import {
  TextInput,
  View,
  Button,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
} from 'react-native';

import {styles} from './styles'

const App = () => {
 
  const [text, setText] = useState('')
  const [textList, setTextList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

  const handleOnChangeInput = (value) => {
    setText(value);
  }

  const addItem = () => {
    if(text !== ''){
    setTextList ([...textList, {id: textList.length + 1, value: text}]);
    setText('');
    }
  }

  const handleDeleteItem = (id) => {
    const newList = textList.filter(itemList => itemList.id !== id);
    setSelectedItem({});
    setTextList(newList);
    setModalVisible(!modalVisible);
  }

  const onHandleModal = (id) =>{
    setSelectedItem(textList.find(itemList => itemList.id === id));
    setModalVisible(!modalVisible);
  }

  return (
    <View 
    style={styles.container}>
    <View style={styles.containerInput}>
      <TextInput
      placeholder='coloque su producto'
      autoCorrect={false}
      autoFocus={true}
      placeholderTextColor="#841584"
      style={styles.textInpput}
      value={text}
      onChangeText={handleOnChangeInput}
      />
      <Button
          title="agregar"
          color="red"
          onPress={() => addItem()}
      />
    </View>  
      <View style={styles.containerList}>
        <FlatList
        data={textList}
        renderItem={({ item }) =>(
          <TouchableOpacity onPress={() => onHandleModal(item.id)}>
            <Text style={styles.textList}>{item.value}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id.toString()}
        />
      </View>
      <Modal
      animationType='slide'
      visible={modalVisible}
      transparent={true}
      >
      <View style={styles.modalContainerContent}>
        <View style={styles.modalTitle}>
          <Text style={styles.textCenter}>Confirmación</Text>
        </View>
        <View style={styles.modalContent}>
          <Text>Se borro correctamente su producto</Text>
          <Text style={styles.modalContentText}>{selectedItem.value}</Text>
        </View>
        <View style={styles.modalButton}>
          <Button
          title='Ok'
          color="blue"
          onPress={() => handleDeleteItem(selectedItem.id)}
          />
        </View>
      </View>  
      </Modal>    
    </View>
  );
};



export default App;
