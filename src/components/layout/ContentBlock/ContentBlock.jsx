import React from 'react';
import PropTypes from 'prop-types';

// Core
import { Card } from '@material-ui/core';

// Styles 
import { useContentBlockStyles } from './ContentBlock.style';

const ContenBlock = ({ children }) => {
    const classes = useContentBlockStyles();

    return (
        <Card classes={{ root: classes.contentBlock }}>
            {children}
        </Card>
    );
}

ContenBlock.propTypes = {
    children: PropTypes.any,
    gutterBottom: PropTypes.bool,
};

export default ContenBlock;