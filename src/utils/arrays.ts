const getCumulativeWeights = <T>(items: T[], field: keyof T) => {
   const weights: number[] = []
   const cumulativeWeights: number[] = []

   for (let i = 0; i < items.length; i += 1) {
      weights[i] = Number(items[i][field]) + (weights[i - 1] || 0)
      cumulativeWeights[i] = weights[i] + (cumulativeWeights[i - 1] || 0)
   }

   return cumulativeWeights
}

const getWeightedRandomIndex = <T>(
   items: T[],
   cumulativeWeights: number[] = []
) => {
   const maxCumulativeWeight = cumulativeWeights[cumulativeWeights.length - 1]
   const randomNumber = maxCumulativeWeight * Math.random()

   for (let itemIndex = 0; itemIndex < items.length; itemIndex += 1) {
      if (cumulativeWeights[itemIndex] >= randomNumber) {
         return itemIndex
      }
   }
}

export const getRandomByField = <T>(
   items: T[],
   field: keyof T,
   countToRetrieve?: number
): T[] => {
   let resultCount = items.length

   if (countToRetrieve && countToRetrieve <= items.length) {
      resultCount = countToRetrieve
   }

   let startCount = 0
   const result: number[] = []

   const cumulativeWeights = getCumulativeWeights(items, field)

   while (startCount !== resultCount) {
      const index = getWeightedRandomIndex(items, cumulativeWeights)
      if (typeof index !== 'undefined' && !result.includes(index)) {
         result.push(index)
         startCount += 1
      }
   }

   return result.map(index => items[index])
}
