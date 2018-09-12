
const getThemeValue = (name, props, values) => {
    if (checkIfPropExists(props[name])){
        console.log(props[name]);
    }
}

const checkIfPropExists = (prop) => (prop ? true : false);

export default function theme(name, values) {
    return (props) => getThemeValue(name, props, values);
}