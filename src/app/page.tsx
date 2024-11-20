// 'use client'
import Link from 'next/link'
import { Provider, useDispatch, useSelector } from 'react-redux'
import store from './redux/store'
import { useAppDispatch, useAppSelector } from './redux/hooks'
import Desafios from './desafios/Desafios'

export default function Home() {
	// const stage = useAppSelector((state) => state.challengeStage)
	// const attempts = useAppSelector((state) => state.attempts)
	return <Desafios />
}
