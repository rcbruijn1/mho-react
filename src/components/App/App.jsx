import React from 'react';
import clsx from 'clsx';

// Core
import { AppBar, Carousel, ContentBlock, Main } from '../../components';

// Styles
import { useAppStyles } from './App.style';

const App = () => {
    const classes = useAppStyles();

    return (
      <div className={clsx(classes.wrapper, classes.scrollbar)}>
          <AppBar />
          <Carousel />
          <Main>
              <ContentBlock gutterBottom>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, assumenda exercitationem vero veritatis quasi dolore dolor architecto molestiae porro deleniti atque nemo quia, in eius corporis provident iure veniam error. Voluptates fugit magni fuga ut dolorum ipsum nemo, itaque praesentium cupiditate error aliquam tenetur harum quas eaque dolores soluta neque!
              </ContentBlock>
              <ContentBlock gutterBottom>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, assumenda exercitationem vero veritatis quasi dolore dolor architecto molestiae porro deleniti atque nemo quia, in eius corporis provident iure veniam error. Voluptates fugit magni fuga ut dolorum ipsum nemo, itaque praesentium cupiditate error aliquam tenetur harum quas eaque dolores soluta neque!
              </ContentBlock>
              <ContentBlock gutterBottom>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, assumenda exercitationem vero veritatis quasi dolore dolor architecto molestiae porro deleniti atque nemo quia, in eius corporis provident iure veniam error. Voluptates fugit magni fuga ut dolorum ipsum nemo, itaque praesentium cupiditate error aliquam tenetur harum quas eaque dolores soluta neque!
              </ContentBlock>
              <ContentBlock gutterBottom>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, assumenda exercitationem vero veritatis quasi dolore dolor architecto molestiae porro deleniti atque nemo quia, in eius corporis provident iure veniam error. Voluptates fugit magni fuga ut dolorum ipsum nemo, itaque praesentium cupiditate error aliquam tenetur harum quas eaque dolores soluta neque!
              </ContentBlock>
              <ContentBlock>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, assumenda exercitationem vero veritatis quasi dolore dolor architecto molestiae porro deleniti atque nemo quia, in eius corporis provident iure veniam error. Voluptates fugit magni fuga ut dolorum ipsum nemo, itaque praesentium cupiditate error aliquam tenetur harum quas eaque dolores soluta neque!
              </ContentBlock>
          </Main>

      </div>
    )
}

export default App;