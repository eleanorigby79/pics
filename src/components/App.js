import React from 'react';
import reactDom from 'react-dom';
import SearchBar from './SearchBar';
import unsplash from '../api/unsplash';
import ImageList from './ImageList';
import axios from 'axios';

class App extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {images: []}
    }
    onSubmitSearch = async (term) => {
        const response = await unsplash.get('/search/photos', {
            params:  {
                query: term
            }     
        });

        this.setState({images: response.data.results});
    }
    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSubmitSearch} />
                <ImageList images={this.state.images}/>
            </div>
        );
    }
}

export default App;