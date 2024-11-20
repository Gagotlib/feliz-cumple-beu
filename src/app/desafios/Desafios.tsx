'use client'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { imagen1 } from '../utils/images'
import Image from 'next/image'


export default function Desafios() {


	const [scrollY, setScrollY] = useState(0)

	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY)
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	// Oscurece la imagen gradualmente
	const brightness = Math.max(1 - scrollY / 300, 0.3)
	const textOpacity = Math.min(scrollY / 300, 1)

	return (
		<div className='font-[family-name:var(--font-geist-sans)] overflow-hidden'>
			<main className='h-[2000px] overflow-hidden'>
				{/* Sección de imagen con efecto de oscurecimiento */}
				<section className='fixed h-screen w-full overflow-hidden'>
					<Image
						src={imagen1}
						alt='beu'
						layout='fill'
						objectFit='cover'
						quality={100}
						className='object-cover w-full h-full fixed'
						style={{
							filter: `brightness(${brightness})`
						}}
					/>
				</section>

				{/* Sección de títulos con efecto de opacidad */}
				<section
					className='flex flex-col gap-8 pt-1 px-4 items-center h-screen w-full fixed justify-center overflow-hidden'
					style={{
						color: 'white',
						opacity: textOpacity, // Opacidad controlada por el scroll
						transition: 'opacity 0.3s ease' // Transición suave para el efecto de aparición
					}}
				>
					<h1 className='text-5xl font-bold'>Hola Beu!</h1>
					<h2 className='text-4xl text-center'>Vas a tener que pasar una serie de desafíos para llegar a tu regalo...</h2>
					<h2 className='text-4xl text-center'>Cuidado!... tenes 3 intentos, resetear los intentos te va a costar...</h2>
					<h3 className='text-3xl text-center'>¡Espero que te diviertas!</h3>

					<Link href='/desafios/desafio1' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
						Empezar YA!
					</Link>
				</section>
			</main>
		</div>
	)
}

