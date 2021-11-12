import React, { ReactNode, useState } from 'react';
import { WalletModalContext } from '../hooks';
import { WalletModal, WalletModalProps } from './wallet-modal';

export interface WalletModalProviderProps extends WalletModalProps {
	children: ReactNode;
}

export const WalletModalProvider = React.memo(function WalletModalProvider({
	children,
	...props
}: WalletModalProviderProps) {
	const [visible, setVisible] = useState(false);

	return (
		<WalletModalContext.Provider
			value={{
				visible,
				setVisible,
			}}
		>
			{children}
			<WalletModal {...props} />
		</WalletModalContext.Provider>
	);
});
