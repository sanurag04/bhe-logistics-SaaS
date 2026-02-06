// /** @format */

// import { Box } from '@mui/material';
// import { Outlet } from 'react-router-dom';

// import Sidebar from './Sidebar';
// import Header from './Header';
// import { useUiStore } from '../store/ui.store';
// import {
// 	SIDEBAR_OPEN_WIDTH,
// 	SIDEBAR_CLOSED_WIDTH,
// 	HEADER_HEIGHT,
// } from '../constants/layout';

// export default function MainLayout() {
// 	const { isSidebarOpen } = useUiStore();

// 	const sidebarWidth = isSidebarOpen
// 		? SIDEBAR_OPEN_WIDTH
// 		: SIDEBAR_CLOSED_WIDTH;

// 	return (
// 		<Box sx={{ display: 'flex' }}>
// 			<Sidebar />

// 			<Box
// 				component="main"
// 				sx={{
// 					flexGrow: 1,
// 					ml: `${sidebarWidth}px`,
// 					mt: `${HEADER_HEIGHT}px`,
// 					p: 3,
// 					transition: 'margin 0.25s ease',
// 					backgroundColor: '#f8fafc',
// 					minHeight: '100vh',
// 				}}>
// 				<Header />
// 				<Outlet />
// 			</Box>
// 		</Box>
// 	);
// }


import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

import Sidebar from './Sidebar';
import Header from './Header';
import { useUiStore } from '../store/ui.store';
import {
  SIDEBAR_OPEN_WIDTH,
  SIDEBAR_CLOSED_WIDTH,
  HEADER_HEIGHT,
} from '../constants/layout';

export default function MainLayout() {
  const { isSidebarOpen } = useUiStore();

  const sidebarWidth = isSidebarOpen
    ? SIDEBAR_OPEN_WIDTH
    : SIDEBAR_CLOSED_WIDTH;

  return (
    <Box className="app-root">
      {/* Sidebar */}
      <Sidebar />

      {/* Right content wrapper */}
      <Box
        className="app-content-wrapper"
        sx={{
          marginLeft: `${sidebarWidth}px`,
          transition: 'margin-left 0.25s ease',
        }}
      >
        {/* Header */}
        <Header />

        {/* Page Content */}
        <Box
          component="main"
          className="app-main"
          sx={{
            marginTop: `${HEADER_HEIGHT}px`,
            padding: 24,
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}
