import React, { PureComponent } from 'react';
import { Treebeard , theme as defaultTheme} from 'react-treebeard';

const data = {
    "name": "react-treebeard",
    "toggled": true,
    "children": [
        {
            "name": "example",
            "children": [
                {
                    "name": "app.js"
                },
                {
                    "name": "data.js"
                },
                {
                    "name": "index.html"
                },
                {
                    "name": "styles.js"
                },
                {
                    "name": "webpack.config.js"
                }
            ]
        },
        {
            "name": "node_modules",
            "loading": true,
            "children": []
        },
        {
            "name": "src",
            "children": [
                {
                    "name": "components",
                    "children": [
                        {
                            "name": "decorators.js"
                        },
                        {
                            "name": "treebeard.js"
                        }
                    ]
                },
                {
                    "name": "index.js"
                }
            ]
        },
        {
            "name": "themes",
            "children": [
                {
                    "name": "animations.js"
                },
                {
                    "name": "default.js"
                }
            ]
        },
        {
            "name": "Gulpfile.js"
        },
        {
            "name": "index.js"
        },
        {
            "name": "package.json"
        }
    ],
    "active": true
};

class TreeExample extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { data };
    }

    onToggle = (node, toggled) => {
        const { cursor, data } = this.state;
        if (cursor) {
            this.setState(() => ({ cursor, active: false }));
        }
        node.active = true;
        if (node.children) {
            node.toggled = toggled;
        }
        this.setState(() => ({ cursor: node, data: Object.assign({}, data) }));
    }

    render() {
        const { data } = this.state;
        defaultTheme.tree.base = {
            ...defaultTheme.tree.base,
            height:'100%'
          };
      
        return (
            <Treebeard
            style={defaultTheme}
                data={data}
                onToggle={this.onToggle}
            />
        );
    }
}

export default TreeExample;