import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Button, ButtonGroup } from '@material-ui/core'


export default function QuantityVariation() {
  return (
    <div>
      <div className='title'>QTY</div>
      <ButtonGroup size="small" aria-label="small outlined button group">
            <Button>-</Button>
            <Button disabled>1</Button>
            <Button>+</Button>
          </ButtonGroup>
    </div>
  );
}