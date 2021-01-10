import React from 'react';

class Filter extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <ul>
                <li>все</li>
                <li>новые</li>
                <li>в работе</li>
                <li>завершены</li>
            </ul>
        );
    }
}

export default Filter;