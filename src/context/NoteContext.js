import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

const noteReducer = (state, action) => {
    switch (action.type) {
        case'get_note':
            return action.payload;
        case "edit_note":
            return state.map((note) => {
                return note.id === action.payload.id
                    ? action.payload
                    : note
            })
        case "delete_note":
            return state.filter((note) => note.id !== action.payload)
        default:
            return state;
    }
}
const getNote = (dispatch) => {
    return async() => {
        const response = await jsonServer.get('/notes');
        dispatch({type: 'get_note', payload: response.data})
    }
}
const addNote = (dispatch) => {
    return async(title, content, callback) => {
        await jsonServer.post('/notes', { title, content })

        if(callback) {
            callback()
        }
    }
}

const deleteNote = (dispatch) => {
    return async(id) => {
        await jsonServer.delete(`notes/${id}`)
        dispatch({
            type: 'delete_note',
            payload: id
        })
    }
}

const editNote = (dispatch) => {
    return async(id, title, content, callback) => {
        await jsonServer.put(`notes/${id}`, { title, content });

        dispatch({ type: 'edit_note', payload: { id, title, content }})
        if(callback) {
            callback()
        }
    }
}

export const { Context, Provider } = 
createDataContext(noteReducer, { addNote, deleteNote, editNote, getNote }, []);