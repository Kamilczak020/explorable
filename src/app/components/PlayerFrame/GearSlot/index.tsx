import React from 'react';
import { DragDropContext, DropResult, Droppable } from 'react-beautiful-dnd';
import { GearType } from '../../../interfaces/gear';
import { useStores } from '../../../stores';
import * as cx from 'classnames';
import './style.scss';

export interface GearSlotProps {
  type: GearType;
  classname?: string;
}

export const GearSlot: React.FC<GearSlotProps> = (props) => {
  const { inventoryStore } = useStores();

  const handleDragEnd = (result: DropResult) => {
    const { source, destination } = result;
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId={`gear-slot-${props.type}`}>
        {(provided, snapshot) => (
          <div
            ref={(element) => provided.innerRef(element)}
            className={cx('gear-slot', props.classname)}
            style={{ backgroundImage: `url('../../../../assets/images/inventory/${props.type}.svg')` }}
            {...provided.placeholder}
          >
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}
