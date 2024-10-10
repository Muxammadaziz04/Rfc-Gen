#!/usr/bin/env node

import path from 'path';
import fs from 'fs-extra';
import { Command } from 'commander';
import { jsxContent } from './content/index.js';

const program = new Command();

program
  .version('1.0.0')
  .description('CLI tool to create a folder with files')
  .argument('<folderName>', 'Name of the folder to create')
  .option('-p, --path <path>', 'Path to create folder', '')
  .action((folderName, options) => {
    const folderPath = path.resolve(process.cwd(), options.path || '', folderName);

    // Debug: выводим путь для проверки
    console.log(`Creating folder at: ${folderPath}`);

    // Создаём папку
    fs.ensureDirSync(folderPath);
    console.log(`Folder '${folderName}' created at ${folderPath}`);

    // Пути для файлов
    const jsxFilePath = path.join(folderPath, 'index.jsx');
    const scssFilePath = path.join(folderPath, `${folderName}.module.scss`);

    // Файлы для создания
    const files = [
      {
        file: jsxFilePath,
        content: jsxContent({ componentName: folderName })
      },
      {
        file: scssFilePath
      }
    ];

    // Создаём файлы
    files.forEach(file => {
      const { file: filePath, content: fileContent } = file;
      fs.ensureFileSync(filePath);

      if (fileContent) {
        fs.writeFileSync(filePath, fileContent, 'utf8');
      }

      console.log(`File '${filePath}' created in folder '${folderName}'`);
    });
  });

program.parse(process.argv);
