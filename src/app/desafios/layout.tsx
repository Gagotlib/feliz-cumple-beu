'use client'
import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import Link from 'next/link'
import { resetStage } from '../redux/challengeStageSlice'
import { resetAttempts } from '../redux/attemptsSlice'

export default function Layout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	const stage = useAppSelector((state) => state.challengeStage)
	const attempts = useAppSelector((state) => state.attempts)
	const dispatch = useAppDispatch()
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [inputValue, setInputValue] = useState('')
	
	useEffect(() => {
		if (attempts === 0) {
			setIsModalOpen(true)
		}
	}, [attempts])

		const handleCheckNumber = () => {
			console.log('Número ingresado:', inputValue)

			if (inputValue === '8888') {
				dispatch(resetAttempts(3))
				setIsModalOpen(false)
			}


		}

	return (
		<div className='flex flex-col  '>
			<div className='flex flex-row items-center justify-around h-20 bg-black text-white text-xl '>
				<p>Etapa: {stage}</p> <p>Intentos: {attempts}</p>{' '}
				<Link
					href='/'
					onClick={() => {
						dispatch(resetStage())
						// dispatch(resetAttempts(3))
					}}
					className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
				>
					Volver al inicio
				</Link>
			</div>
			{isModalOpen && (
				<div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
					<div className='bg-white p-6 rounded-lg shadow-lg w-80'>
						<label htmlFor='numberInput' className='text-xl font-bold mb-4'>Ingresa el codigo</label>
						<input type='text' id='numberInput' value={inputValue} onChange={(e) => setInputValue(e.target.value)} className='border border-gray-300 p-2 rounded w-full mb-4' />
						<button onClick={handleCheckNumber} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full'>
							Comprobar
						</button>
					</div>
				</div>
			)}
			{children}
		</div>
	)
}
