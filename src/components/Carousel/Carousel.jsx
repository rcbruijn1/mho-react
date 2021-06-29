import React, { useState, useEffect, Fragment } from 'react';
import clsx from 'clsx';

// Icons
import IndicatorIcon from '@material-ui/icons/FiberManualRecord';

// Core
import { Box, Card, Fade, IconButton, Typography } from '@material-ui/core';

// Style
import { useCarouselStyles } from './Carousel.style';

// Assets
import { carouselContent } from '../../assets/content/carouselContent';

const Carousel = () => {
  const classes = useCarouselStyles();
  const [activeIndex, setActiveIndex] = useState(0);

  const getActiveIndex = () => {
    let index = activeIndex;
    if (index === carouselContent.length - 1) {
      index = 0;
      return index;
    }
    index += 1;
    return index;
  };

  const setIndexManually = index => {
    clearTimeout(setIndexTimeout);
    setActiveIndex(index);
  };

  const setIndexTimeout = setTimeout(() => {
    setActiveIndex(getActiveIndex());
  }, 10000);

  const startTimeout = () => setIndexTimeout;

  useEffect(() => {
    startTimeout();
  }, [activeIndex]);

  return (
    <div className={classes.carouselContainer}>
      <div className={classes.wrapper}>
        <Card className={classes.carouselContent}>

          <Fragment>
            {carouselContent.map((item, index) => (
              <Fade key={index} in={activeIndex === index} timeout={1500}>
                <div className={index === activeIndex ? classes.slideActive : classes.slideInActive}>
                  <Typography variant="h5" paragraph align="left">
                    {item.title}
                  </Typography>
                    {item.content}
                </div>
              </Fade>
            ))}

            <Box display="flex" justifyContent="center" p={2}>
              {carouselContent.length !== 0 && carouselContent.map((item, index) => (
                <IconButton
                  key={index}
                  className={clsx(
                    activeIndex === index ? (
                      classes.indicatorButtonActive
                    ) : (
                      classes.indicatorButton
                    )
                  )}
                  onClick={() => setIndexManually(index)}
                >
                  <IndicatorIcon
                    key={item.content}
                    fontSize="inherit"
                  />
                </IconButton>
              ))}
            </Box>
          </Fragment>
        </Card>
      </div>
    </div>
  );
};

export default Carousel;
