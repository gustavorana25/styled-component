import theme from '../helpers/theme';

const ButtonSizes = theme('size', {
    default: `
        padding: 0.5rem 0;
        font-size: 16px;
    `,
    small: `
        padding: 0.2rem 0;
        font-size: 12px;
    `,
    large: `
        padding: 1rem 0;
        font-size: 20px;
    `
});

export default ButtonSizes;