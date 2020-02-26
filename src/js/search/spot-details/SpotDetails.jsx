import React, { PureComponent } from 'react';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import Button from 'common/Button';

export default class SpotDetails extends PureComponent {
    state = {
        isVisible: false
    }
    static propTypes = {
        selectedSpot: PropTypes.object,
        setSpot: PropTypes.func.isRequired
    };

    componentDidMount() {
        this._setComponentVisible(true);
    }

    componentDidUpdate(prevprops) {
        if (prevprops !== this.props) {
            this._setComponentVisible(false);
            setTimeout(() => {
                this._setComponentVisible(true);
            }, 100);
        }
    }

    _onCloseAction = spot => {
        this.setState({ isVisible: false });
        this.props.setSpot(null);
    };

    _setComponentVisible = visible => this.setState({ isVisible: visible });

    formatPrice = price => (price / 100).toLocaleString('en-US', { style: 'currency', currency: 'USD' });

    render() {
        const {
            selectedSpot,
        } = this.props;

        return (
            <CSSTransition
                in={this.state.isVisible}
                timeout={300}
                classNames="spot-transition"
                unmountOnExit
            >
                <div className="SpotDetails-content">
                    <div
                        className="close-button"
                        onClick={this._onCloseAction}
                    >
                        &times;
                    </div>
                    <h2>Spot Details</h2>
                    <h2>{selectedSpot.title}</h2>
                    <p>{selectedSpot.description}</p>
                    <Button
                        color="primary"
                        className="action-button"
                    >
                        {this.formatPrice(selectedSpot.price)} | Book it!
                    </Button>
                </div>
            </CSSTransition>
        );
    }
}
