import styled from 'styled-components'
import theme from '../helpers/theme';

const ButtonColors = theme('type', {
    default: '#f00',
    primary: '#2185d0'
});

export const Button = styled.button`
    display: inline-block;
    border-radius: 3px;
    padding: 0.5rem 0;
    margin: 0.5rem 1rem;
    width: 11rem;
    border: 2px solid white;
    background-color: ${ButtonColors};
`
