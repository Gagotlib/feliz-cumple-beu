'use client'
import { nextStage } from '@/app/redux/challengeStageSlice'
import { useAppDispatch } from '@/app/redux/hooks'
import React, { useEffect, useState } from 'react'
import { imagen2, imagenObelisco } from '../../utils/images'
import Image from 'next/image'
import { decrementAttempt } from '@/app/redux/attemptsSlice'
import Link from 'next/link'

export default function Desafio1() {
	const dispatch = useAppDispatch()

	const [respuesta, setRespuesta] = useState('')
	const [isCorrect, setIsCorrect] = useState(false)
	const [isIncorrect, setIsIncorrect] = useState(false)
	const [pidePista, setPidePista] = useState(false)

	const handleSubmit = () => {
		if (respuesta === 'Obelisco' || respuesta === 'obelisco') {
			setIsCorrect(true)
			setIsIncorrect(false)
		} else {
			setIsCorrect(false)
			setIsIncorrect(true)
			dispatch(decrementAttempt())
		}
		setRespuesta('')
		// setTimeout(() => { setIsIncorrect(false)}, 3000)
	}

	const handlePidePista = () => {
		setPidePista(true)
	}

	return (
		<section className='relative flex flex-col gap-8 pt-8 px-4 items-center h-[calc(100vh-80px)] w-full font-[family-name:var(--font-geist-sans)]'>
			{/* Imagen de fondo con brillo reducido */}
			<div className='absolute inset-0 z-0'>
				<Image
					src={pidePista ? imagenObelisco : imagen2}
					alt='Background Image'
					layout='fill'
					objectFit='cover'
					className='object-cover w-full h-full'
					style={{
						filter: 'brightness(0.3)'
					}}
				/>
			</div>

			{/* Contenido por encima de la imagen */}
			<div className='relative z-10 text-white flex flex-col items-center justify-around h-full py-10'>
				<h1 className='text-4xl font-bold'>Desafío número 1!</h1>

				<label htmlFor='respuesta1' className='text-2xl font-bold'>
					Nuestra primera cita fue en: *una sola palabra
				</label>
				<input type='text' id='respuesta1' value={respuesta} onChange={(e) => setRespuesta(e.target.value)} className='text-black h-10 rounded-lg px-4' />
				{isIncorrect && (
					<>
						<p className=' text-red-400'>Respuesta Incorrecta</p>
						<p className=' text-red-400'>Perdiste un intento !</p>
						<button type='button' onClick={handlePidePista} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
							{' '}
							Necesito una pista!
						</button>
					</>
				)}

				<button type='button' onClick={handleSubmit} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
					Comprobar Respuesta
				</button>
				{isCorrect && (
					<>
						<p className='py-4 text-green-400'>Respuesta Correcta</p>
						<Link href='/desafios/desafio2' hidden={!isCorrect} type='button' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => dispatch(nextStage())}>
							Siguiente desafio
						</Link>
					</>
				)}
			</div>
		</section>
	)
}
