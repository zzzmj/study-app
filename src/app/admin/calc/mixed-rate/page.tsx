'use client'

import CalcProgress from '@/components/CalcProgress'
import { Button, Card, Text } from '@mantine/core'
import { floor, inRange, random } from 'lodash'
import { useEffect, useMemo, useRef, useState } from 'react'
import { Carousel } from '@mantine/carousel'
import '@mantine/carousel/styles.css'

// 求增长量
function calculateGrowthAmount(currentAmount: number, growthRate: number) {
    return currentAmount - currentAmount / (1 + growthRate)
}

function toPercentage(value: number) {
    return floor(value * 100, 1) + '%'
}

const getMixedData = () => {
    const A = Math.ceil(random(2000, 10000))
    const B = Math.ceil(random(2000, 10000))
    const C = A + B
    let a, b

    do {
        a = floor(random(0.1, 0.6), 3)
        b = floor(random(0.1, 0.6), 3)
    } while (Math.abs(a - b) < 0.1)

    const growthA = calculateGrowthAmount(A, a)
    const growthB = calculateGrowthAmount(B, b)

    // 求出C的基期量
    const baseC = C - (growthA + growthB)
    const c = floor(C / baseC - 1, 3)

    return {
        A,
        B,
        C,
        a,
        b,
        c,
    }
}

const getTemplate = (data: mixedObj) => {
    const content = `2020年某市进口值为${data.A}万，增长率为${toPercentage(data.a)}，出口值为${data.B}万，增长率为${toPercentage(data.b)}`
    const question = `进出口总值增长率为？`

    return {
        content,
        question
    }
}

const getOptions = (r: number) => {
    // 定义一个数组来保存所有选项

    let options = [
        [r, r * 1.1, r * 1.2, r * 1.3],
        [r * 0.9, r, r * 1.1, r * 1.2],
        [r * 0.8, r * 0.9, r, r * 1.1],
        [r * 0.7, r * 0.8, r * 0.9, r],
    ]

    // 随机选择一个选项
    let selectedOption = options[Math.floor(Math.random() * options.length)]

    return selectedOption
}
const getMixedDataList = (length = 1) => {
    const dataList = []
    for (let i = 0; i < length; i++) {
        const d = getMixedData()
        dataList.push({
            content: d,
            options: getOptions(d.c),
            template: getTemplate(d)
        })
    }
    return dataList
}

interface templateObj {
    content: string
    question: string
}

interface mixedObj {
    A: number
    B: number
    C: number
    a: number
    b: number
    c: number
}

interface dataListInterface {
    content: mixedObj
    options: number[]
    template: templateObj
}

const MixedRatePage = () => {
    const [progress, setProgress] = useState<number>(0)
    const [dataList, setDataList] = useState<dataListInterface[]>()
    const [rightOption, setRightOption] = useState()
    const emblaRef = useRef()

    useEffect(() => {
        setDataList(getMixedDataList(10))
    }, [])

    const handleClickAnswer = (content: any, item: any) => {
        console.log('content.c === item', content.c, item)
        setRightOption(item)
    }

    const handleClickNext = () => {
        setRightOption(undefined)
        setProgress((p) => p + 1)
        ; (emblaRef.current as any)?.scrollNext()
    }

    if (!dataList) return

    return (
        <div className="max-w-6xl  m-auto h-full relative">
            <CalcProgress value={progress} />

            <Carousel
                getEmblaApi={(embla) => ((emblaRef.current as any) = embla)}
                withIndicators={false}
                withControls={false}
                draggable={false}
                align="start"
                className={'mo-wrap carousel mt-4'}
            >
                {dataList.map((item, index) => {
                    const { template, content, options } = item
                    return (
                        <Carousel.Slide key={index}>
                            {
                                <div className="max-w-3xl m-auto mt-4">
                                    <Text size="xl">
                                        {template.content}
                                    </Text>
                                    <Text className="mt-2" fw={'bold'} size="xl">
                                        {template.question}
                                    </Text>
                                </div>
                            }

                            <div className="max-w-lg m-auto mt-10 flex flex-col">
                                {options.map((item, key) => {
                                    let color = ''
                                    if (rightOption && rightOption === item) color = 'teal'
                                    if (rightOption && rightOption !== item) color = 'red'
                                    return (
                                        <Button
                                            onClick={() => handleClickAnswer(content, item)}
                                            key={key}
                                            size="xl"
                                            variant="outline"
                                            className="mt-4"
                                            color={color}
                                        >
                                            {toPercentage(item)}
                                        </Button>
                                    )
                                })}
                            </div>
                        </Carousel.Slide>
                    )
                })}
            </Carousel>

            <div className="absolute bottom-20 left-0 right-0 flex-center">
                <Button onClick={handleClickNext} size="xl" radius="md">
                    继续
                </Button>
            </div>
        </div>
    )
}

export default MixedRatePage
