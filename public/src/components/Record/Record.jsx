import React from 'react';
import './record.styl';

export default function Record(props) {
    const { items } = props;
    if (items && items.length > 0){
        return (
            <div className="list-wrapper">
                <div className="list-header">
                    <span className="list-cell">First Name</span>
                    <span className="list-cell">Last Name</span>
                    <span className="list-cell">Phone</span>
                    <span className="list-cell">Age</span>
                </div>
                {items.map((item, index) =>{
                        return(
                            <div className="list-row" key={index}>
                                <span className="list-cell">{item.firstName}</span>
                                <span className="list-cell">{item.lastName}</span>
                                <span className="list-cell">{item.phone}</span>
                                <span className="list-cell">{item.age}</span>
                            </div>
                        )
                    })
                }
            </div>
        )
    } else {
        return (<div className="list-wrapper">There is no users yet</div>)
    }
}