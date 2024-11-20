import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from 'redux'
import challengeStageReducer from './challengeStageSlice'
import attemptsReducer from './attemptsSlice'

// Configuración de persistencia
const persistConfig = {
	key: 'root',
	storage
}

// Combinamos los reducers
const rootReducer = combineReducers({
	challengeStage: challengeStageReducer,
	attempts: attemptsReducer
})

// Reducer persistente
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false // Desactiva la verificación de serialización
		})
})

// Exportar el persistor para usar en el componente de la aplicación
export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
