module.exports = {
    "extends": "airbnb",
    "rules": {
        "tab_size": 4,
        indent: [2, 4, { 'SwitchCase': 1, 'VariableDeclarator': 1 }],
        "no-tabs": 0,
        "react/prop-types": 0,
        "react/jsx-indent": [2, 4],
        "react/jsx-indent-props": [2, 4],
        "react/button-has-type": [ true, {
            "button": true,
            "submit": true,
            "reset": true
            }]
        }
};
