'use client'

import { useCallback } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import { Catalog } from '@/components/catalog/Catalog'
import { Filter } from '@/components/filter/Filter'
import { TypeEnum, DirectionEnum } from '@/components/filter/constants'

export default function Home() {
	const router = useRouter()
	const pathname = usePathname()
	const searchParams = useSearchParams()

	const setType = (value: TypeEnum) => {
		router.push(pathname + '?' + createQueryString('type', value))
	}

	const setDirection = (value: DirectionEnum) => {
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
				courseType={searchParams.get('type') ?? TypeEnum.COURSE}
				courseDirection={searchParams.get('dir') ?? DirectionEnum.FRONTEND}
				setCourseType={setType}
				setCourseDirection={setDirection}
			/>

			<Catalog
				courseType={searchParams.get('type') ?? TypeEnum.COURSE}
				courseDirection={searchParams.get('dir') ?? DirectionEnum.FRONTEND}
			/>
		</div>
	)
}
