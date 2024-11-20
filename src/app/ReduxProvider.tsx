'use client'

import { Provider } from 'react-redux'
import store, { persistor } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'

type ReduxProviderProps = {
	children: React.ReactNode
}

export default function ReduxProvider({ children }: ReduxProviderProps) {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				{/* Resto de tu aplicación */}
				{children}
			</PersistGate>
		</Provider>
	)
}
