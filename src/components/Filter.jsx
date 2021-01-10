import React from 'react';

class Filter extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <ul className={"filter"}>
                <div className={"filter_left"}>
                    <li className={"filter_elem"}>все приоритеты</li>
                    <li className={"filter_elem"}>низкий</li>
                    <li className={"filter_elem"}>средний</li>
                    <li className={"filter_elem"}>высокий</li>
                </div>

                <div className={"filter_right"}>
                    <li className={"filter_elem"}>все</li>
                    <li className={"filter_elem"}>новые</li>
                    <li className={"filter_elem"}>в работе</li>
                    <li className={"filter_elem"}>завершены</li>
                </div>

            </ul>
        );
    }
}

export default Filter;