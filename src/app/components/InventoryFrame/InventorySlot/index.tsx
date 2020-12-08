import React from 'react';
import './style.scss';
import { IInventorySlot } from '../../../interfaces';

type InventorySlotProps = IInventorySlot;

export const InventorySlot: React.FC<InventorySlotProps> = (props) => {
  return (
    <div className="inventory-slot-container">
      <img className="inventory-slot-icon" src={props.content?.icon} />
      <span className="inventory-slot-quantity">{props.quantity}</span>
    </div>
  );
}
