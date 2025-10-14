import postcssBetween from 'postcss-between';
export default {
	plugins: [
		postcssBetween({ beforeBlock: 1 })
	]
}
