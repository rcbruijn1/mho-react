import React from 'react';
import PropTypes from 'prop-types';

// Styles
import useMainStyle from './Main.style';

const Main = ({ children }) => {
    const classes = useMainStyle();

    return (
        <div id="main" className={classes.mainWrapper}>
            {children}
        </div>
    )
};

Main.propTypes = {
    children: PropTypes.any.isRequired,
};

export default Main;