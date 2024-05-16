import { COURSES } from '@/app/courses'

import { DirectionEnum, TypeEnum } from '@/components/filter/constants'

import styles from './Catalog.module.scss'

interface ICatalog {
	courseType: TypeEnum
	courseDirection: DirectionEnum
}

export function Catalog({ courseType, courseDirection }: ICatalog) {
	return (
		<div className={styles.catalog}>
			{COURSES.filter(
				(c) => c.type === courseType && c.direction === courseDirection
			).map((c) => (
				<div key={c.id} className={styles.item}>
					{c.name}
				</div>
			))}
		</div>
	)
}
