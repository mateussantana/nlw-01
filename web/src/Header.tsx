import React from 'react';

interface HeaderProps {
    title: string;
}

const Header: React.FC<HeaderProps>  = (props) =>  {
    return (
        <div>
            <h1>{props.title}</h1>
        </div>
    );
}

export default Header;