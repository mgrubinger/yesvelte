import type { ElProps } from '../el'

export interface NavbarProps extends Partial<ElProps> {
	theme?: 'light' | 'dark'
	expand?: boolean
}

export interface NavbarItemProps extends Partial<ElProps> {
	//
	active?: boolean
	disabled?: boolean
	divider?: boolean
	href?: string
	icon?: string
}
