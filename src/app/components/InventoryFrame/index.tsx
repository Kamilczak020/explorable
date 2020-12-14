import React from 'react';
import { useStores } from '../../stores';
import { InventorySlot } from './InventorySlot';
import './style.scss';

export const InventoryFrame = () => {
  const { inventoryStore } = useStores();

  const inventorySlots = inventoryStore.generalInventory.map((slot, index) => (
    <InventorySlot key={`slot-${index}`} content={slot?.content} quantity={slot?.quantity} />
  ));

  return (
    <div className="inventory-frame-container">
      <div className="inventory-frame-inner">
        {inventorySlots}
      </div>
    </div>
  );
}
