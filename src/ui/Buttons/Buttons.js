import styled, { css } from 'styled-components'

import ButtonColors from './_colors';
import ButtonSizes from './_sizes';

export const Button = styled.button`
    display: inline-block;
    border-radius: 6px;
    width: 11rem;
    border: 2px solid white;
    outline:0;
    cursor:pointer;

    ${ButtonColors}
    ${ButtonSizes}
`
