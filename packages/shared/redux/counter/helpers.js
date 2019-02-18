const incrementAsync = (count) => new Promise(resolve => setTimeout(() => resolve(count + 1), 5000))

export {
	incrementAsync
}
