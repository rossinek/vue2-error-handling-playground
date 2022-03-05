
export const getRandomActivity = () => fetch('https://www.boredapi.com/api/activity').then(d => d.json())


export const getRandomError = () => new Promise((resolve, reject) => setTimeout(reject(new Error('Something went wrong :(')), 2000))
