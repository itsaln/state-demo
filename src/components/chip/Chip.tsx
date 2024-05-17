import cn from 'clsx'
import { ButtonHTMLAttributes } from 'react'

import styles from './Chip.module.scss'

interface IChip extends ButtonHTMLAttributes<HTMLButtonElement> {
	color: 'primary' | 'ghost'
}

export function Chip({ color, className, children, ...rest }: IChip) {
	return (
		<button
			className={cn(styles.chip, className, {
				[styles.primary]: color === 'primary',
				[styles.ghost]: color === 'ghost'
			})}
			{...rest}
		>
			{children}
		</button>
	)
}
