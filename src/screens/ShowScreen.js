import React, { useContext } from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { Context } from '../context/NoteContext';
import { EvilIcons } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {
    const { state } = useContext(Context);
    const note = state.find(note => note.id === navigation.getParam('id'));
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{note.title}</Text>
            <Text style={styles.content}>{note.content}</Text>
        </View>
    )
}

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Edit', {id: navigation.getParam('id')})}>
        <EvilIcons name="pencil" size={35} />
      </TouchableOpacity>
    ),
  };
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderRadius: 20,
    borderColor: 'black',
    padding: 20,
    margin: 20
  },
  title: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    fontSize: 16
  },
  content: {
    fontSize: 14,
    marginTop: 10
  }
});

export default ShowScreen;