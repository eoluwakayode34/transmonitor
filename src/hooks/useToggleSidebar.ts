import { create } from 'zustand'

interface OpenSidebarState {
  toggleSidebar: boolean;
  setToggleSidebar: () => void;
}


export const useOpenSidebar = create<OpenSidebarState>((set) => ({
  toggleSidebar: false,
  setToggleSidebar: () => set((state) => ({ toggleSidebar: !state.toggleSidebar })),
}))