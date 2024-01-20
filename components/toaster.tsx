import { Toaster } from 'react-hot-toast';

const Toast = () => {
	return (
		<div>
			<Toaster
				toastOptions={{
					className: 'text-center',
					duration: 3000,
					position: 'top-center',
					style: {
						background: 'rgb(255,255,255)',
						color: 'rgb(0,0,0)',
						padding: '16px',
						border: '2px solid rgba(255, 0, 0)',
					},
					success: {
						iconTheme: {
							primary: 'rgb(12, 111, 42)',
							secondary: 'rgb(255,255,255)',
						},
						style: {
							border: '2px solid rgba(12, 111, 42)',
						},
					},
				}}
			/>
		</div>
	);
};

export default Toast;
