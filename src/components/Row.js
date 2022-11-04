import { useState } from 'react';
import propType from 'prop-types'


export const Row = ({idx, row}) => {

    const {name, email, phone, dob, ...address} = row;
    let tmp = address.country + " " + address.provience + " " + address.district + " " + address.city;

    return (
        <tr>
            <td>{idx + 1}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{dob}</td>
            <td>{tmp}</td>
            <td><button><i className="fa fa-edit"></i></button></td>
            <td><button><i className="fa fa-trash"></i></button></td>
        </tr>   
    );
}

Row.propTypes = {
    row: propType.object
}