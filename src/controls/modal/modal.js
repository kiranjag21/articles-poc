import * as React from 'react';
import * as antd from 'antd';

class Popup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: this.props.visible,
            visible: this.props.visible
        };
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (prevState.visible !== nextProps.visible) {
            return {
                visible: nextProps.visible,
                showModal: nextProps.visible,
            };
        }


        return null;
    }

    closeClick() {
        this.setState({ showModal: false });
        if (this.props.onClose != undefined)
            this.props.onClose();
    }

    closeIcon() {
        return (<a className="clickable" onClick={this.closeClick.bind(this)}><i className="far fa-times-circle"></i></a>);
    }

    render() {
        const { Modal } = antd;

        var { canClose, title, className } = this.props;


        if (title == undefined || title == "") {
            title = (<label />)
        }


        if (className == undefined)
            className = "";


        if (canClose == undefined)
            canClose = true;
        return (

            <Modal
                centered
                className={className}
                visible={this.state.showModal}
                closeIcon={this.closeIcon()}
                width={this.props.width}
                title={title}
                mask={true}
                closable={false}
                footer={null}
            >
                {this.props.children}
            </Modal>
        );
    }
}

export default Popup;