import React from 'react';
import { RootStore } from './rootStore';

const rootStore = new RootStore();
const stores = {
  inventoryStore: rootStore.inventory,
};

export const StoresContext = React.createContext(stores);

export const StoreProvider = ({ children }) => (
  <StoresContext.Provider value={stores}>{children}</StoresContext.Provider>
);

export const useStores = () => React.useContext(StoresContext);
