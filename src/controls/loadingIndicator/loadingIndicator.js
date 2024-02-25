import * as React from 'react';
import * as antd from 'antd';

class LoadingIndicator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        
        return (
            <div className='d-flex flex-column flex-gap-16'>
                <antd.Spin>
                </antd.Spin>
                {this.props.content}
            </div>
        );
    }
}

export default LoadingIndicator;