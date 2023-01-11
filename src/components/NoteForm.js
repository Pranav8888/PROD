import React, { useContext, useState } from 'react';
import {View, TextInput, Text, Button,TouchableOpacity, StyleSheet} from 'react-native';

const NoteForm  = ({ onSubmit, initialValues }) => {
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);

    return(
        <View>
            <Text style={styles.label}>Enter Title: </Text>
            <TextInput style={styles.title} value={title} multiline={true} onChangeText={(text) => setTitle(text)}/>
            <Text style={styles.label}>Enter Content: </Text>
            <TextInput style={styles.content} value={content} multiline={true} onChangeText={(text) => setContent(text)}/>
            <TouchableOpacity style={styles.button} onPress={() => onSubmit(title, content)}>
                <Text style={styles.buttonText}>Save Note</Text>
            </TouchableOpacity>
        </View>
    )
}

NoteForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        borderWidth: 3,
        borderColor: 'black',
        marginBottom: 15,
        padding: 5,
        margin: 5,
        borderRadius: 4,
    },
    content: {
        fontSize: 18,
        borderWidth: 3,
        borderColor: 'black',
        marginBottom: 15,
        padding: 5,
        margin: 5,
        borderRadius: 4,
        height: 250,
        textAlignVertical: 'top'
    },
    label: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5
    },
    button: {
        alignSelf: 'center',
        backgroundColor: '#516a8a',
        padding: 10,
        borderRadius: 3,
        borderColor: 'black',
        borderWidth: 3
    },
    buttonText: {
        fontSize: 18,
        color: 'white'
    }
});

export default NoteForm