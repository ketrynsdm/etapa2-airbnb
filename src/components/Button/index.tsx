import { ButtonHTMLAttributes } from 'react';

import './style.module.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props: ButtonProps) {
    return(
        <button className="button" {...props}/>
    );
}