import * as React from 'react';
import { CollectionProps } from '../types';
import { Flex } from '../Flex';

export const Collection = <CollectionItemType,>({
  items,
  children,
  className,
  direction = 'column',
  type = 'list',
  ...rest
}: CollectionProps<CollectionItemType>): JSX.Element => {
  return (
    <Flex direction={direction} className={className} {...rest}>
      {Array.isArray(items) && items.map(children)}
    </Flex>
  );
};
