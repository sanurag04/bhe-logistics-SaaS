/** @format */

import { create } from 'zustand';

interface UiState {
	isSidebarOpen: boolean;
	isSidebarPinned: boolean;
	openSidebar: () => void;
	closeSidebar: () => void;
	togglePin: () => void;
}

export const useUiStore = create<UiState>((set) => ({
	isSidebarOpen: true,
	isSidebarPinned: false,

	openSidebar: () =>
		set((state) =>
			state.isSidebarPinned ? state : { isSidebarOpen: true }
		),

	closeSidebar: () =>
		set((state) =>
			state.isSidebarPinned ? state : { isSidebarOpen: false }
		),

	togglePin: () =>
		set((state) => ({
			isSidebarPinned: !state.isSidebarPinned,
			isSidebarOpen: true, // keep open when pinned
		})),
}));
