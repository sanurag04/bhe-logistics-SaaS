/** @format */

import { Box, Typography } from '@mui/material';
import { useRef } from 'react';

interface Props {
	onFileSelect: (file: File) => void;
}

const UploadDropZone = ({ onFileSelect }: Props) => {
	const inputRef = useRef<HTMLInputElement>(null);

	const handleDrop = (e: React.DragEvent) => {
		e.preventDefault();
		if (e.dataTransfer.files?.[0]) {
			onFileSelect(e.dataTransfer.files[0]);
		}
	};

	return (
		<Box
			onClick={() => inputRef.current?.click()}
			onDrop={handleDrop}
			onDragOver={(e) => e.preventDefault()}
			sx={{
				border: '1px dashed #D0D5DD',
				borderRadius: '8px',
				padding: '48px 24px',
				textAlign: 'center',
				backgroundColor: '#F9FAFB',
				cursor: 'pointer',
			}}>
			<Box
				component="img"
				src="/xlxs-svg.svg"
				alt="XLSX file"
				sx={{
					width: 68,
					height: 68,
					objectFit: 'contain',
					display: 'block',
					mx: 'auto',
				}}
			/>

			<Typography
				sx={{
					fontSize: '16px',
					fontWeight: 600,
					color: '#2563EB',
					mt: 2,
				}}>
				Drop your .XLSX file with list of shipments
			</Typography>

			<Typography
				sx={{
					fontSize: '14px',
					color: '#475467',
					mt: 1,
				}}>
				Please download and use the template
			</Typography>

			<Typography
				sx={{
					fontSize: '13px',
					color: '#667085',
					mt: 1,
				}}>
				You can drag and drop or <span style={{ color: '#2563EB' }}>Click</span>{' '}
				here to upload, we'll create the shipments for you
			</Typography>

			<input
				ref={inputRef}
				type="file"
				accept=".xlsx"
				hidden
				onChange={(e) => {
					if (e.target.files?.[0]) {
						onFileSelect(e.target.files[0]);
					}
				}}
			/>
		</Box>
	);
};

export default UploadDropZone;
