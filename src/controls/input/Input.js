import * as React from 'react';
import * as antd from 'antd';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checkEnter: false,
        }

        this.triggerSearchCallBack = this.triggerSearchCallBack.bind(this);
        this.handleFocus = this.handleFocus.bind(this)
        this.searchKeyDown = this.searchKeyDown.bind(this);
    }

    componentDidMount() {
    }


    handleFocus(e) {
        if (this.props.autoSelect == true)
            e.target.select();
    }

    fireOnChange = (value, target) => {
        if (this.props.onChange != undefined) {
            this.props.onChange(value, target);
        }
    };

    istrue = (data) => {
        return data == 'True' || data == 'true' || data == '1' || data == 'TRUE' || data == true;
    }

    onChange = e => {
        const { value } = e.target;
        var { search } = this.props;

        this.fireOnChange(value, e.target);

        if (this.istrue(search) && !this.state.checkEnter) {
            if (this.srchTimr != undefined) {
                clearTimeout(this.srchTimr);
            }

            this.srchTimr = setTimeout(this.triggerSearchCallBack, 800);
        }

    };

    searchKeyDown(e) {
        if (e.keyCode == 13) {
            this.triggerSearchCallBack();
        }
    }

    triggerSearchCallBack() {

        if (this.srchTimr != undefined) {
            clearTimeout(this.srchTimr);
        }

        var { searchCallBack, minSearchLength, value } = this.props;

        if (minSearchLength == undefined)
            minSearchLength = 3;

        if ((searchCallBack != undefined && value && value.length >= minSearchLength) || value.length == 0) {
            searchCallBack();
        }
    }

    render() {
        var { size, readOnly, className, allowClear, addonAfter, width, row } = this.props;

        if (size == undefined) {
            size = "default"
        }


        if (allowClear == undefined)
            allowClear = false;

        var defCls = ""

        
        if (readOnly == undefined) {
            readOnly = false
        }

        return (
            <antd.Input
                title={this.props.title}
                id={this.props.id}
                onFocus={this.handleFocus}
                addonAfter={addonAfter}
                onChange={this.onChange}
                onBlur={this.props.onBlur}
                allowClear={allowClear}
                disabled={readOnly}
                className={className}
                value={this.props.value}
                style={{ width: this.props.width, minWidth: this.props.minWidth }}
                placeholder={this.props.placeHolder} size={size}>
            </antd.Input>
        );
    }
}

export default Input;