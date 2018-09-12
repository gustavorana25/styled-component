import theme from '../helpers/theme';

const ButtonColors = theme('type', {
    default: `
        background-color: #ccc;
        box-shadow: 0 0 0 1px #ccc inset;
        color: #000;
    `,
    primary: `
        background-color: #2185d0;
        box-shadow: 0 0 0 1px #2185d0 inset;
        color: #fff;
    `,
    secondary: `
        background-color: #1b1c1d;
        box-shadow: 0 0 0 1px #1b1c1d inset;
        color: #fff;
    `,
    positive: `
        background-color: #16ab39;
        box-shadow: 0 0 0 1px #16ab39 inset;
        color: #fff;
    `,
    negative: `
        background-color: #b21e1e;
        box-shadow: 0 0 0 1px #b21e1e inset;
        color: #fff;
    `,
});

export default ButtonColors;