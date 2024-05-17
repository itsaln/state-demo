import type { Config } from 'tailwindcss'
import twColors from 'tailwindcss/colors'
import plugin from 'tailwindcss/plugin'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	important: true,
	prefix: 'tw-',
	theme: {
		colors: {
			white: twColors.white,
			black: twColors.black,
			transparent: twColors.transparent,
			background: '#333333',
			primary: '#6C38CC',
			gray: twColors.gray
		},
		extend: {
			zIndex: {
				1: '1',
				2: '2',
				3: '3'
			}
		},
		container: {
			center: true,
			padding: '12px',
			screens: {
				sm: '576px',
				md: '768px',
				lg: '990px',
				xl: '1280px',
				'2xl': '1536px'
			}
		}
	},
	plugins: [
		plugin(({ addComponents, addUtilities }) => {
			addComponents({
				'.truncate-1': {
					display: '-webkit-box !important',
					'-webkit-line-clamp': '1',
					'-webkit-box-orient': 'vertical',
					textOverflow: 'ellipsis',
					overflow: 'hidden'
				},
				'.truncate-2': {
					display: '-webkit-box !important',
					'-webkit-line-clamp': '2',
					'-webkit-box-orient': 'vertical',
					textOverflow: 'ellipsis',
					overflow: 'hidden'
				},
				'.truncate-3': {
					display: '-webkit-box !important',
					'-webkit-line-clamp': '3',
					'-webkit-box-orient': 'vertical',
					textOverflow: 'ellipsis',
					overflow: 'hidden'
				},
				'.truncate-4': {
					display: '-webkit-box !important',
					'-webkit-line-clamp': '4',
					'-webkit-box-orient': 'vertical',
					textOverflow: 'ellipsis',
					overflow: 'hidden'
				}
			})
			addUtilities({
				// '.font-sf-ui-display': {
				// 	fontFamily: `'SF UI Display', sans-serif`
				// },

				'.outline-border-none': {
					outline: 'none',
					border: 'none'
				},
				'.pointer-events-all': {
					pointerEvents: 'all'
				},
				'.cursor-default': {
					cursor: 'default'
				},
				'.decoration-none': {
					textDecoration: 'none'
				}
			})
		})
	]
}
export default config
