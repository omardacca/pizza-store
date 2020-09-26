import React from 'react';
import { Paper} from '@material-ui/core'
import SizeVariation from '../common/sizeVariation';
import QuantityVariation from '../common/quantityVariation';

export default function VariationPanel() {
  return (
    <div>
      <Paper elevation={0}>
        <SizeVariation />
        <QuantityVariation />
      </Paper>
    </div>
  );
}