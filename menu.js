const { Menu, shell } = require('electron');

const template = [
    {
        role: 'help',
        submenu: [
            {
                label: 'About Editor Component',
                click() {
                    shell.openExternal('https://simplemde.com/');
                }
            }    
        ]
    },
    {
        label: 'Debugging',
        submenu: [
            {
                role: 'toggleDevTools',
                label: 'Dev Tools'
            },
            {type: 'separator'},
            {role: 'reload',
            accelerator: 'Alt+R'},
        ]

    }
];

const menu = Menu.buildFromTemplate(template);

module.exports = menu;