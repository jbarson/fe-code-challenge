import React from 'react';
// import PropTypes from 'prop-types';
// import classNames from 'classnames';
import Button from 'common/Button';

const SpotDetails = props => (
    <div className="SpotDetails-content">
        <div className="close-button">&times;</div>
        <h2>Spot Details</h2>
        <h2>123 Address </h2>
        <p>hello!!!</p>
        <Button
            color="primary"
            className="action-button"
        >
            $14 | Book it!
        </Button>
    </div>
);

SpotDetails.propTypes = {
};

export default SpotDetails;
