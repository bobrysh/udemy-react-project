import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        {title: 'Nirvana', duration: '3:03'},
        {title: 'Linkin Park', duration: '4:13'},
        {title: 'Fray', duration: '2:53'}
    ]
}


const selectedSongReducer = (selectedSong=null,action) =>{
    if(action.type === "SONG_SELECTED"){
        return action.payload
    }

    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})