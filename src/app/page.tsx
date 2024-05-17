'use client'

import { Catalog } from '@/components/catalog/Catalog'
import { Filter } from '@/components/filter/Filter'
import { TypeEnum, DirectionEnum } from '@/components/filter/constants'
import { useState } from 'react'

export default function Home() {
	const [courseType, setCourseType] = useState(TypeEnum.COURSE)
	const [courseDirection, setCourseDirection] = useState(DirectionEnum.FRONTEND)

	const setType = (value: TypeEnum) => {
		setCourseType(value)
	}

	const setDirection = (value: DirectionEnum) => {
		setCourseDirection(value)
	}

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
