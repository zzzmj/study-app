import { uniqueId } from "lodash"

export const getNumberFromLen = numberLength => {
    var num = Math.random()
    while (num < Math.pow(10, numberLength - 1)) {
        num *= 10
    }
    return parseInt(num)
}
// number是数字，len是保留的位数，并且放大到的位数
// 例如
// formatAnswerNumber(0.03813, 2) => 38
// formatAnswerNumber(0.03813, 3) => 381
export const formatAnswerNumber = (number, len) => {
    let n = number
    if (n > 100) n /= 10
    while (n < Math.pow(10, len - 1)) {
        n *= 10
    }
    return parseInt(n)
}


/**
 * 
 * 
 * 
<Radio value={1}>除法</Radio>
<Radio value={2}>增长量</Radio>
<Radio value={3}>加法</Radio>
<Radio value={4}>减法</Radio>
<Radio value={5}>两位数乘法</Radio>
<Radio value={6}>三位数乘法</Radio>
<Radio value={7}>特殊分数</Radio>
<Radio value={8}>高难度除法</Radio>
<Radio value={9}>3*1乘法</Radio>
<Radio value={10}>2*1乘法</Radio>
 * @param {*} type 
 * @param {*} count 
 * @returns 
 */
const getCalcData = (type = 1, count = 10) => {
    // 除法
    const divisionFn = () => {
        const a = getNumberFromLen(3)
        const b = getNumberFromLen(3)
        return {
            data: [a, b],
            formatAnswer: formatAnswerNumber(a / b, 3),
            // 误差小于3%
            errorAnalysis: (input, answer) => {
                return (
                    Math.abs(`0.${input}` - `0.${answer}`) / `0.${answer}` <=
                    0.03
                )
            },
        }
    }
    // 高难度除法，不好算的数字
    const divisionFn2 = () => {
        let a = getNumberFromLen(3)
        let b = getNumberFromLen(3)
        let formatAnswer = formatAnswerNumber(a / b, 2)
        while (formatAnswer / 10 < 5 || formatAnswer % 10 < 5) {
            a = getNumberFromLen(3)
            b = getNumberFromLen(3)
            formatAnswer = formatAnswerNumber(a / b, 2)
        }
        return {
            formatAnswer: formatAnswerNumber(a / b, 2),
            // 误差小于1
            errorAnalysis: (input, answer) => Math.abs(input - answer) <= 1,
        }
    }
    // 增长率
    const growthFn = () => {
        // 现期量
        const a = getNumberFromLen(3)
        // 增长率
        const b = getNumberFromLen(3) / 10
        return {
            formatAnswer: Math.round((a * (b / 100)) / (1 + b / 100)),
            // 误差5%以内
            errorAnalysis: (input, answer) =>
                Math.abs(input - answer) / answer <= 0.05,
        }
    }

    // 加法
    const addFn = () => {
        const a = getNumberFromLen(3)
        const b = getNumberFromLen(3)
        return {
            formatAnswer: a + b,
            // 不能有误差
            errorAnalysis: (input, answer) => input - answer === 0,
        }
    }
    // 减法
    const subFn = () => {
        const a = getNumberFromLen(3)
        const b = getNumberFromLen(3)
        return {
            formatAnswer: a - b,
            // 不能有误差
            errorAnalysis: (input, answer) => input - answer === 0,
        }
    }
    // 两位数乘法误差允许3%以内
    const mulFn = () => {
        const a = getNumberFromLen(2)
        const b = getNumberFromLen(2)
        return {
            formatAnswer: a * b,
            // 误差控制在3%
            errorAnalysis: (input, answer) =>
                Math.abs(input - answer) / answer <= 0.03,
        }
    }
    // 3*1乘法
    const threeMulToOneFn = () => {
        let a = getNumberFromLen(3)
        let b = getNumberFromLen(1)
        while (a % 10 < 3 || b < 3) {
            a = getNumberFromLen(3)
            b = getNumberFromLen(1)
        }
        return {
            formatAnswer: a * b,
            // 误差为0
            errorAnalysis: (input, answer) => input - answer === 0,
        }
    }

    // 2*1乘法
    const twoMulToOneFn = () => {
        let a = getNumberFromLen(2)
        let b = getNumberFromLen(1)
        while (a < 10) {
            a = getNumberFromLen(2)
            b = getNumberFromLen(1)
        }
        return {
            formatAnswer: a * b,
            // 误差控制在3%
            errorAnalysis: (input, answer) => input - answer === 0,
        }
    }

    // 三位数乘法误差允许3%以内
    const threeMulFn = () => {
        const a = getNumberFromLen(3)
        const b = getNumberFromLen(3)
        return {
            formatAnswer: formatAnswerNumber(a * b, 3),
            // 误差控制在3%
            errorAnalysis: (input, answer) =>
                Math.abs(input - answer) / answer <= 0.03,
        }
    }
    // 特殊分数
    const fractionFn = () => {
        const map = {
            '33.3%': 3,
            '25%': 4,
            '20%': 5,
            '16.7%': 6,
            '14.3%': 7,
            '12.5%': 8,
            '11.1%': 9,
            '10%': 10,
            '9.1%': 11,
            '8.3%': 12,
            '7.7%': 13,
            '7.1%': 14,
            '6.7%': 15,
            '6.25%': 16,
            '5.9%': 17,
            '5.6%': 18,
            '5.3%': 19,
            '11%': 9.1,
            '12%': 8.3,
            '13%': 7.7,
            '14%': 7.1,
            '15%': 6.7,
            '16%': 6.25,
            '17%': 5.9,
            '18%': 5.6,
            '19%': 5.3,
        }
        const arr = Object.keys(map).sort(() => Math.random() - 0.5)
        let index = -1
        return () => {
            index += 1
            return {
                formatAnswer: map[arr[index]],
                errorAnalysis: (input, answer) => input - answer === 0,
            }
        }
    }

    // 加法
    const mapTypeToFn = {
        1: divisionFn,
        2: growthFn,
        3: addFn,
        4: subFn,
        5: mulFn,
        6: threeMulFn,
        7: fractionFn(),
        8: divisionFn2,
        9: threeMulToOneFn,
        10: twoMulToOneFn,
    }
    const arr = []
    for (let i = 0; i < count; i++) {
        let answerObj = mapTypeToFn[type]()
        const obj = {
            id: uniqueId(),
            ...answerObj,
        }
        arr.push(obj)
    }
    console.log('执行了吗')
    return arr
}


export default getCalcData