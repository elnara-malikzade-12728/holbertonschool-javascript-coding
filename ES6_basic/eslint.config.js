import globals from "globals";

export default [
    {
        languageOptions: {
            globals: {
                ...globals.node,
                ...globals.browser
            }
        },
        rules: {
            "no-unused-vars": "warn",
            "no-undef": "warn"
        }
    }
];
