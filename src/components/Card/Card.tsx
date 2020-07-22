import React, { useState } from 'react';
import classNames from 'classnames';
import './style.scss';

interface Props {
    users: User[];
    month: string;
}

export const Card = ({ users, month } : Props) => {
    const [isOpenedUsers, setIsOpenedUsers] = useState(false);

    const toggleOpenedUsers = () => {
        setIsOpenedUsers(!isOpenedUsers)
    };

    const renderUsers = () => {
        return(
            <div className={classNames("user", {'user--open':isOpenedUsers})}>
                {users.map(user => <div key={user.id} className="user__info">
                    <p className="user__name">
                        {user.firstName} {user.lastName}
                    </p>
                    <p className="user__date">
                        {user.dob.split('T')[0]}
                    </p>
                </div>)}
            </div>
        )
    };

    return (
        <div className={classNames(
            "card",
            users.length > 10 ? "card--red"
                : users.length > 6 ? "card--green"
                : users.length > 2 ? "card--blue"
                    : "card--grey") }
             onMouseEnter={toggleOpenedUsers}
             onMouseLeave={toggleOpenedUsers}
        >
            <p className="card__title">{month}</p>
            {isOpenedUsers && renderUsers()}
        </div>
    )
};
