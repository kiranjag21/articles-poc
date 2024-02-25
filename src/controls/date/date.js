import * as React from 'react';
import * as antd from 'antd';
import moment from 'moment';

class Date extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.onChange = this.onChange.bind(this);
    }

    onChange(date, dateString) {
        if (this.props.onChange != undefined) {
            this.props.onChange(date, dateString);
        }
    }

    onOpenChange(status) {
        this.setState({ open: status });
    }

    istrue = (data) => {
        return data == 'True' || data == 'true' || data == '1' || data == 'TRUE' || data == true;
    }

    render() {
        var { size, allowClear, autoFocus } = this.props;
        var { open } = this.state;

        if (autoFocus == true) {
            if (this.state.open == undefined)
                open = autoFocus;
        }

        if (size == undefined) {
            size = "medium"
        }

        if (allowClear == undefined) {
            allowClear = false
        }


        const { DatePicker, Tooltip } = antd;
        const { MonthPicker, RangePicker } = DatePicker;

        const dateFormat = 'MM/DD/YYYY';
        const monthFormat = 'YYYY/MM';

        if (this.istrue(this.props.dateRange)) {
            return (<RangePicker
                onChange={this.props.onChange}
                disabledDate={this.props.disabledDate}
                //value={[moment(this.props.valueFrom, dateFormat), moment(this.props.valueTo, dateFormat)]}
                format={dateFormat} />);
        }
        else if (this.istrue(this.props.monthPicker)) {
            return (<MonthPicker 
                onChange={this.onChange}
                disabledDate={this.props.disabledDate}
                //value={moment(this.props.value, monthFormat)}
                format={monthFormat} />);
        }
        else {

            var value = this.props.value;

            return (<Tooltip title={this.props.tooltipText}><DatePicker
                open={open}
                onOpenChange={this.onOpenChange.bind(this)}
                dateRender={this.props.renderDate}
                allowClear={allowClear}
                onChange={this.onChange}
                disabledDate={this.props.disabledDate}
                value={value}
                format={dateFormat} /></Tooltip>);

        }
    }
}

export default Date;