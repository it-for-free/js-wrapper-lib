
 
/**
 * Вернет форму слова русского языка, подходящую для переданного числа number
 * 
 * based on: https://gist.github.com/tomfun/830fa6d8030d16007bbab50a5b21ef97
 * 
 * @param {number} number   число, для которого надо определить форму слова
 * @param {string} forOne   форма для 1 единицы, напр. "программист"
 * @param {string} forTwo   форма для 2 единиц, напр. "программиста"
 * @param {string} forFive  форма для 5 единиц, напр. "программистов"
 * @returns {string}
 */
export const getWordFormByCount = (number, forOne, forTwo, forFive) => {
   let n = Math.abs(number);
   n %= 100;
   if (n >= 5 && n <= 20) {
       return forFive;
   }
   n %= 10;
   if (n === 1) {
       return forOne;
   }
   if (n >= 2 && n <= 4) {
       return forTwo;
   }
   return forFive;
}
 
export const rus = {
    getWordFormByCount,
}