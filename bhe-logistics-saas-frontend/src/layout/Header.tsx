/** @format */

import {
	AppBar,
	Toolbar,
	Typography,
 	Box,
} from '@mui/material';
 
 import { HEADER_HEIGHT } from '../constants/layout';

export default function Header() {
 
	return (
		<AppBar
			position="fixed"
			elevation={1}
			sx={{
				height: HEADER_HEIGHT,
				width: '100%',              // ✅ FULL WIDTH
				left: 0,                     // ✅ START FROM LEFT
				backgroundColor: '#eaf3fc',
				color: '#000',
				zIndex: 1201,                // ✅ ABOVE SIDEBAR
			}}
		>
			<Toolbar
				sx={{
					minHeight: HEADER_HEIGHT,
					display: 'flex',
					justifyContent: 'space-between',
				}}
			>
				{/* 🔹 LEFT: LOGO */}
				<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
					<img
						src="/bhe-header-logo.png"
						alt="BHE Logistics"
						style={{ height: 50 }}
					/>
					<Typography variant="h6" className='custom-css-1miy0lu-MuiTypography-root'>
						Your Logistics Partner
					</Typography>
				</Box> 
			</Toolbar>
		</AppBar>
	);
}
