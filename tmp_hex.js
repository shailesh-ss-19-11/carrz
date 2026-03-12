const fs = require('fs');
const path = require('path');

const directory = './src';

// Fix issues where text-white might be used specifically for heading that should be text-foreground,
// or text-gray-500 that should adapt, and bg colors that are too dark in light mode.
const replacements = [
    // Fix background colors that are too dark in light mode
    // e.g., bg-[#131a28] in contact, package, services -> bg-surface
    { regex: /bg-\[#131a28\]/g, replacement: 'bg-surface' },
    { regex: /bg-\[#0a0e17\]/g, replacement: 'bg-background' },

    // Replace dark tailwind borders in those specific pages
    { regex: /border-\[#1c263b\]/g, replacement: 'border-surface-border' },
    { regex: /from-\[#131a28\]/g, replacement: 'from-surface' },
    { regex: /to-\[#1c263b\]/g, replacement: 'to-surface-border' },
    { regex: /to-\[#0a0e17\]/g, replacement: 'to-background' },

    // Add support for dark:text-gray-400 where it might be light mode too washed out
    // (e.g., text-gray-400 -> text-muted )
    // The first run might have caught some but missed those formatted slightly differently.
    // Actually text-muted is already set globally in the globals css to a standard color.
];

function replaceInFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    replacements.forEach(({ regex, replacement }) => {
        content = content.replace(regex, replacement);
    });

    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated: ${filePath}`);
    }
}

function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDirectory(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.css')) {
            replaceInFile(fullPath);
        }
    }
}

processDirectory(directory);
console.log('Class mapping complete!');
