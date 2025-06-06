export const isObjectEquals = (
	obj1: Record<string, unknown> | undefined,
	obj2: Record<string, unknown> | undefined,
) => {
	if (typeof obj1 != 'object' || typeof obj2 != 'object') {
		return false
	}

	const keys1 = Object.keys(obj1)
	const keys2 = Object.keys(obj2)

	if (keys1.length != keys2.length) {
		return false
	}
	for (const key of keys1) {
		if (!keys2.includes(key) || obj1[key] != obj2[key]) {
			return false
		}
	}
	return true
}
