import React from 'react';
import CheckIcon from '@material-ui/icons/Check';
import {ToggleButton} from '@material-ui/lab';
import {ToggleButtonGroup} from '@material-ui/lab';


export default function SizeVariation() {
  return (
    <div>
      <div className='title'>Size</div>
      <ToggleButtonGroup
        exclusive
        size="small"
      >
        <ToggleButton value="left" aria-label="left aligned">
          <CheckIcon />
          Small
        </ToggleButton>
        <ToggleButton value="center" aria-label="centered">
          <CheckIcon />
          Medium
        </ToggleButton>
        <ToggleButton value="right" aria-label="right aligned">
          <CheckIcon />
          Large
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}