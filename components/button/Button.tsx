import React from 'react';
import { Button as Btn } from 'react-native-paper';

interface ButtonProps {
    children: React.ReactNode;
    [key: string]: any; // Para permitir outras propriedades que podem ser passadas para o componente
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => (
    <Btn {...props}>
        {children}
    </Btn>
);

export default Button;

{/*
const Button = ({children, ...props}) => (
    <Btn {...props}>
        {children}
    </Btn>
);

export default Button;
*/}

