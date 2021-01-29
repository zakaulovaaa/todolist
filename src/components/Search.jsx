import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="block_search">
                <input placeholder="поиск" id="input_search"/>
            </div>
        );
    }
}

export default Search;