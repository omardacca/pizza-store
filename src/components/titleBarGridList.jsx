import React from 'react';
import Box from '@material-ui/core/Box';
import ImageCard from './common/imageCard';


export default function titleBarGridList() {

  return (
    <div style={{ width: '100%' }}>
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        p={1}
        m={1}
        bgcolor="background.paper"
        css={{ maxWidth: '100%' }}
      >
        <Box p={1} bgcolor="grey.300">
          <ImageCard />
        </Box>
        <Box p={1} bgcolor="grey.300">
          <ImageCard />
        </Box>
        <Box p={1} bgcolor="grey.300">
          <ImageCard />
        </Box>
        <Box p={1} bgcolor="grey.300">
          <ImageCard />
        </Box>
        <Box p={1} bgcolor="grey.300">
          <ImageCard />
        </Box>
        <Box p={1} bgcolor="grey.300">
          <ImageCard />
        </Box>
      </Box>
    </div>
  );
}