import React from 'react';
import { PlayerFrame } from '../../components/PlayerFrame';
import { InventoryFrame } from '../../components/InventoryFrame';
import './style.scss';

export const InventoryPage = () => {
  return (
    <div className="inventory-page">
      <InventoryFrame />
      <PlayerFrame />
    </div>
  );
}
