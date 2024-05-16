'use client'

import { Catalog } from '@/components/catalog/Catalog'
import { Filter } from '@/components/filter/Filter'
import { TypeEnum, DirectionEnum } from '@/components/filter/constants'

export default function Home() {
	const setType = (value: TypeEnum) => {}

	const setDirection = (value: DirectionEnum) => {}

	return (
		<>
			<Filter
				courseType={TypeEnum.COURSE}
				courseDirection={DirectionEnum.FRONTEND}
				setCourseType={setType}
				setCourseDirection={setDirection}
			/>

			<Catalog
				courseType={TypeEnum.COURSE}
				courseDirection={DirectionEnum.FRONTEND}
			/>
		</>
	)
}
