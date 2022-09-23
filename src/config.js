module.exports = {
    "command": "",
    "usage": `\nUsage: \n <shellcommand> <command> [positional] \n\n Use to get detailed help for commands and positionals: \n <shellcommand> <command> -h `,
    "options": {
        "dir": {
            "alias": "dir [dirname]",
            "describe": "Fetch the relevant directory (and recursively)",
            "type": "string",
            "demandOption": true,
            "positional": [
                {
                    "name": "dirname",
                    "properties": {
                        "describe": "The relevant directory path",
                        "default": "./"
                    }
                }
            ],
            "file": {
                "path": "../test/mocks/test_function.js"
            }
        },
        "search": {
            "alias": "search [dirname] [searchtext]",
            "describe": "Search the relevant directory (and recursively)",
            "type": "string",
            "demandOption": true,
            "positional": [
                {
                    "name": "dirname",
                    "properties": {
                        "describe": "The relevant directory path",
                        "default": "./"
                    }
                },
                {
                    "name": "searchtext",
                    "properties": {
                        "describe": "The relevant text to search",
                        "default": ""
                    }
                }
            ],
            "file": {
                "path": "../test/mocks/test_function.js"
                // "function": "run"
            }
        }
    }
}