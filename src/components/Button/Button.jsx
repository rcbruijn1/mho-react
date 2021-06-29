import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

// Core
import { ButtonBase, Typography } from '@material-ui/core';

// Styles
import { useButtonStyles } from './Button.style';

const Button = ({ color, label, iconProps, gutters, variant, ...rest }) => {
    const classes = useButtonStyles({ color });

    return (
        <ButtonBase
            className={clsx(
              [classes[variant]],
              { [classes.withGutters]: gutters },
            )}
            {...rest}
        >
            {iconProps && iconProps.start && (
              <span className={classes.buttonIconStart}>
                {iconProps.icon}
              </span>
            )}
            <Typography variant="body1" style={{ fontWeight: 600 }}>
                {label}
            </Typography>
            {iconProps && iconProps.end && (
              <span className={classes.buttonIconEnd}>
                {iconProps.icon}
              </span>
            )}
        </ButtonBase>
    );
};

Button.defaultProps = {
  variant: 'root',
  color: 'primary',
};

Button.propTypes = {
    label: PropTypes.string.isRequired,
    color: PropTypes.string,
    iconProps: PropTypes.object,
    gutters: PropTypes.bool,
    variant: PropTypes.string,
};

export default Button;