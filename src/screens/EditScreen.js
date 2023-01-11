import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Context } from '../context/NoteContext';
import NoteForm from '../components/NoteForm';

const EditScreen = ({ navigation }) => {
    const { state, editNote } = useContext(Context);
    const note = state.find(note => note.id === navigation.getParam('id'));
    return (
        <NoteForm
            initialValues={{ title: note.title, content: note.content }}
            onSubmit={(title, content) => {
                editNote(navigation.getParam('id'), title, content, () => navigation.pop())
            }}
        />
    )
}

const styles = StyleSheet.create({});

export default EditScreen;