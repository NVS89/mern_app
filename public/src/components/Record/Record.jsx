import React from 'react';
import './record.styl';
import { Button } from '../Button';

export default function Record(props) {
    const { items, handleDelete } = props;
    let record = null;
    if (items && items.length > 0) {
        record = (
            <table className="list-wrapper">
                <thead>
                    <tr className="list-header">
                        <th className="list-cell">
                            First Name
                        </th>
                        <th className="list-cell">
                            Last Name
                        </th>
                        <th className="list-cell">
                            Phone
                        </th>
                        <th className="list-cell">
                            Age
                        </th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => {
                        console.log('====================================')
                        console.log(item.uid)
                        console.log('====================================')
                        return (
                            <tr className="list-row" key={item.uid}>
                                <td className="list-cell">
                                    {item.firstName}
                                </td>
                                <td className="list-cell">
                                    {item.lastName}
                                </td>
                                <td className="list-cell">
                                    {item.phone}
                                </td>
                                <td className="list-cell">
                                    {item.age}
                                </td>
                                <td>
                                    <Button
                                        className="delete"
                                        onClick={() => handleDelete(item.uid)}
                                    >
                                        Delete user
                                    </Button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        );
    } else {
        record = (
            <div className="list-wrapper">
                There is no users yet
            </div>
        );
    }

    return record;
}
