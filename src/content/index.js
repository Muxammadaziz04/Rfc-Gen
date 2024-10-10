
export const jsxContent = ({componentName}) => `import cls from './${componentName}.module.scss';

const ${componentName} = () => {
    return (
        <div>
            
        </div>
    );
}

export default ${componentName};`