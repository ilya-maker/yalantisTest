import React from 'react';
import './style.scss';
import nextId from "react-id-generator";
import { Card } from '../Card';

interface Props {
    users: User[][];
    months: string[];
}

export const HomePage = ({ users, months } : Props) => {
    return (
        <ul className="months__list">
            {users.map((user, index) => <li className="months__item" key={nextId()}>
                <Card users={user} month={months[index]} />
            </li>)}
        </ul>
    )
};
