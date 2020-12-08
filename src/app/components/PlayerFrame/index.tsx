import React from 'react';
import * as cx from 'classnames';
import './style.scss';
import { GearSlot } from './GearSlot';
import { GearType } from '../../interfaces/gear';

export const PlayerFrame = () => {
  return (
    <div className="player-frame-container">
      <div className={cx('player-frame-column', 'column-left')}>
        <GearSlot type={GearType.Head} classname="player-frame-slot" />
        <GearSlot type={GearType.Cloak} classname="player-frame-slot" />
        <GearSlot type={GearType.Chest} classname="player-frame-slot" />
        <GearSlot type={GearType.Hands} classname="player-frame-slot" />
        <GearSlot type={GearType.MainHand} classname="player-frame-slot" />
      </div>
      <div className="player-frame-display">
        <img src="../../../assets/images/character/female-body.png" />
        <img src="../../../assets/images/character/female-face.png" />
        <img src="../../../assets/images/character/female-hair.png" />
      </div>
      <div className={cx('player-frame-column', 'column-right')}>
        <GearSlot type={GearType.Waist} classname="player-frame-slot" />
        <GearSlot type={GearType.Legs} classname="player-frame-slot" />
        <GearSlot type={GearType.Feet} classname="player-frame-slot" />
        <GearSlot type={GearType.MainHand} classname="player-frame-slot" />
        <GearSlot type={GearType.OffHand} classname="player-frame-slot" />
      </div>
    </div>
  );
}
