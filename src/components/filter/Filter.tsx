import Link from 'next/link'
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
}

export function Filter({ courseType, courseDirection }: IFilter) {
	return (
		<div className={styles.filter}>
			<div className={styles.row}>
				<h3 className={styles.title}>Тип обучения</h3>
				{filterByTypeVariants.map((variant) => (
					<Link
						key={variant.id}
						href={{ query: { type: variant.value, dir: courseDirection } }}
					>
						<Chip
							className='tw-mx-[4px]'
							color={variant.value === courseType ? 'primary' : 'ghost'}
						>
							{variant.name}
						</Chip>
					</Link>
				))}
			</div>

			<div className={styles.row}>
				<h3 className={styles.title}>Направление</h3>
				{filterByDirectionVariants.map((variant) => (
					<Link
						key={variant.name}
						href={{ query: { type: courseType, dir: variant.value } }}
					>
						<Chip
							className='tw-mx-[4px]'
							color={variant.value === courseDirection ? 'primary' : 'ghost'}
						>
							{variant.name}
						</Chip>
					</Link>
				))}
			</div>
		</div>
	)
}
