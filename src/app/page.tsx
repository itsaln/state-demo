'use client'

import { useCallback, useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import { Catalog } from '@/components/catalog/Catalog'
import { Filter } from '@/components/filter/Filter'
import { TypeEnum, DirectionEnum } from '@/components/filter/constants'

export default function Home() {
	const router = useRouter()
	const pathname = usePathname()
	const searchParams = useSearchParams()

	const [courseType, setCourseType] = useState(TypeEnum.COURSE)
	const [courseDirection, setCourseDirection] = useState(DirectionEnum.FRONTEND)

	const setType = (value: TypeEnum) => {
		setCourseType(value)
		router.push(pathname + '?' + createQueryString('type', value))
	}

	const setDirection = (value: DirectionEnum) => {
		setCourseDirection(value)
		router.push(pathname + '?' + createQueryString('dir', value))
	}

	const createQueryString = useCallback(
		(name: string, value: string) => {
			const params = new URLSearchParams(searchParams.toString())
			params.set(name, value)

			return params.toString()
		},
		[searchParams]
	)

	return (
		<div className='tw-flex tw-flex-col tw-justify-center tw-w-[600px] tw-h-screen tw-py-[40px] tw-mx-auto'>
			<Filter
				courseType={courseType}
				courseDirection={courseDirection}
				setCourseType={setType}
				setCourseDirection={setDirection}
			/>

			<Catalog courseType={courseType} courseDirection={courseDirection} />
		</div>
	)
}
