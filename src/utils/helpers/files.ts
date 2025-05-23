// Функция для чтения файла как Data URL

export const readFileAsDataURL = (file: File | Blob): Promise<string> => {
	return new Promise((resolve, reject) => {
		const reader = new FileReader()
		reader.onload = () => resolve(reader.result as string)
		reader.onerror = () => reject()
		reader.readAsDataURL(file)
	})
}

// Функция для чтения файла как ArrayBuffer
export const readFileAsArrayBuffer = (file: File): Promise<ArrayBuffer> => {
	return new Promise((resolve, reject) => {
		const reader = new FileReader()
		reader.onload = () => resolve(reader.result as ArrayBuffer)
		reader.onerror = () => reject()
		reader.readAsArrayBuffer(file)
	})
}
