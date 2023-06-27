import React, { FC } from 'react'
import { Box, Button } from '@mui/material';

import { IValidSize } from '@/interfaces';

interface Props {
    selectedSize?: IValidSize;
    sizes: IValidSize[];    // queremos que se utilice de esta manera, y lo traemos de las interfaces
}

// 
export const SizeSelector: FC<Props> = ({ selectedSize, sizes }) => {
  return (
    <Box display='flex'  >
        {
            sizes.map(size => (
                <Button
                    key={ size }
                    size='small'
                    color={ selectedSize === size ? 'primary' : 'info' }
                >
                    { size }
                </Button>
            ))
        }
    </Box>
  )
}

