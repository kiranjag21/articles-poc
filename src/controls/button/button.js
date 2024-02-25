import * as React from 'react';
import * as antd from 'antd';

class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var { type, className, disabled, busy, icon, iconfa, fIcon, content } = this.props;
        const { Button } = antd;

        if (type == undefined || type == "") {
            type = "primary"
        }

        if (busy == undefined) {
            busy = false;
        }

        if (disabled == undefined) {
            disabled = false;
        }

        if (className == undefined || className == "") {
            className = "";
        }
        else {
            className = className + " ";
        }

        className = className + ""
        //primary
        //dashed
        //link
        //danger

        if (busy == true) {
            iconfa = undefined
            icon = undefined
            fIcon = undefined
        }


        //iconfa={iconfa} 

        return (
            <Button icon={icon} title={this.props.title} loading={busy} disabled={disabled} className={className} onClick={this.props.onClick} type={type} htmlType={this.props.htmlType}>
                {content}
            </Button>
        );
    }
}

export default Button;