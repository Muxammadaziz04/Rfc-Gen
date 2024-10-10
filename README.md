# Create React Component Folder CLI

[![npm version](https://badge.fury.io/js/rfc-gen.svg)](https://badge.fury.io/js/rfc-gen)
[![license](https://img.shields.io/npm/l/rfc-gen.svg)](https://www.npmjs.com/package/rfc-gen)

`Create React Component Folder CLI` — это простой инструмент для автоматического создания папки с файлами для компонентов React. Этот CLI поможет сгенерировать компонент с файловой структурой за считанные секунды.

## Особенности

- Создание компонентов с заданной файловой структурой
- Автоматическое создание `.jsx` и `.scss` файлов
- Удобная настройка пути для генерации файлов
- Полностью кастомизируемое содержимое файлов

## Установка

Для глобальной установки используйте npm:

```bash
npm install -g rfc-gen
```

## Использование

После установки вы можете использовать команду `rfc-gen` для создания новой папки с файлами для React компонента.

### Базовое использование:

```bash
rfc-gen MyComponent
```

Это создаст папку `MyComponent` с двумя файлами:

- `index.jsx`: файл для компонента
- `MyComponent.module.scss`: стили для компонента

### Использование с параметрами:

Вы можете указать путь, где будет создана папка:

```bash
rfc-gen MyComponent -p ./src/components
```

Это создаст папку `MyComponent` по указанному пути `./src/components`.

## Пример

После выполнения команды:

```bash
rfc-gen Button
```

Вы получите следующую структуру:

```
/Button
  ├── index.jsx
  └── Button.module.scss
```

Файл `index.jsx` будет содержать шаблон компонента:

```jsx
import cls from './Button.module.scss';

const Button = () => {
  return (
    <div>
    
    </div>
  );
};

export default Button;
```

## Вклад в проект

Мы всегда рады вашим предложениям и исправлениям. Если у вас есть идеи по улучшению или вы нашли баг, создайте [issue](https://github.com/Muxammadaziz04/Rfc-Gen/issues) или отправьте pull request.

## Лицензия

Этот проект распространяется по лицензии ISC. Подробности можно найти в файле [LICENSE](./LICENSE).