import {
	DirectionEnum,
	filterByDirectionVariants,
	filterByTypeVariants,
	TypeEnum
} from './constants'

import { Chip } from '@/components/chip/Chip'

import styles from './Filter.module.scss'

interface IFilter {
	courseType: TypeEnum
	courseDirection: DirectionEnum
	setCourseType: (value: TypeEnum) => void
	setCourseDirection: (value: DirectionEnum) => void
}

export function Filter({
	courseType,
	courseDirection,
	setCourseType,
	setCourseDirection
}: IFilter) {
	return (
		<div className={styles.filter}>
			<div className={styles.row}>
				<h3 className={styles.title}>Тип обучения</h3>
				{filterByTypeVariants.map((variant) => (
					<Chip
						className='tw-mx-[4px]'
						key={variant.id}
						color={variant.value === courseType ? 'primary' : 'ghost'}
						onClick={() => setCourseType(variant.value)}
					>
						{variant.name}
					</Chip>
				))}
			</div>

			<div className={styles.row}>
				<h3 className={styles.title}>Направление</h3>
				{filterByDirectionVariants.map((variant) => (
					<Chip
						className='tw-mx-[4px]'
						key={variant.name}
						color={variant.value === courseDirection ? 'primary' : 'ghost'}
						onClick={() => setCourseDirection(variant.value)}
					>
						{variant.name}
					</Chip>
				))}
			</div>
		</div>
	)
}
