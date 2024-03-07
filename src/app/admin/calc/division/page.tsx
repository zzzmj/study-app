'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import getCalcData from '@/utils/calcUtils'
import cn from '@/utils/cn'
import CalcProgress from '@/components/CalcProgress'
import { Divider, PinInput, Text, rem } from '@mantine/core'
import { Carousel } from '@mantine/carousel'
import Keyboard from '@/components/Keyboard'
import CalcResult from '@/components/CalcResult'
import '@mantine/carousel/styles.css'

const Division = () => {
    const [progress, setProgress] = useState<number>(0)
    const [dataSource, setDataSource] = useState<any[]>([])
    const [showResult, setShowResult] = useState(false)
    const [startTime, setStartTime] = useState(0)
    const [time, setTime] = useState(0)
    const emblaRef = useRef()

    useEffect(() => {
        setDataSource(getCalcData(1, 10))
    }, [])

    const handleComplete = () => {
        setProgress((p) => p + 1)
        ;(emblaRef.current as any)?.scrollNext()
    }

    const handleUpdateValue = (value: number) => {
        if (!startTime) {
            setStartTime(Date.now())
            return
        }

        const newData = dataSource.map((item, index) => {
            if (index === progress) {
                return {
                    ...item,
                    value: (item.value ? item.value : '') + value,
                }
            }
            return item
        })

        setDataSource(newData)
    }

    const handleSubmit = () => {
        const spendTime = Date.now() - startTime
        // 将spendTime转成秒
        setTime(spendTime / 1000)
        setShowResult(true)
    }

    const handleCancel = () => {
        const newData = dataSource.map((item, index) => {
            if (index === progress) {
                return {
                    ...item,
                    value: '',
                }
            }
            return item
        })
        setDataSource(newData)
    }

    if (dataSource.length <= 0) return

    return !showResult ? (
        <div className={cn('flex flex-col justify-between max-w-2xl m-auto relative h-full')}>
            <div>
                <CalcProgress value={progress} />
                <Text className="mt-4 flex-center" c={'dimmed'} fz="lg" fw={500}>
                    误差控制在3%以内
                </Text>

                <Carousel
                    getEmblaApi={(embla) => ((emblaRef.current as any) = embla)}
                    height={200}
                    withIndicators={false}
                    withControls={false}
                    draggable={false}
                    align="start"
                    className={'mo-wrap carousel mt-4'}
                >
                    {dataSource.map((item, index) => {
                        const { formula, data, value, formatAnswer, errorAnalysis } = item
                        return (
                            <Carousel.Slide key={item.id}>
                                <div className="flex-center">
                                    <div>
                                        <div className="text-3xl">{data[0]}</div>
                                        <Divider my="sm" color="#333" />
                                        <div className="text-3xl">{data[1]}</div>
                                    </div>
                                    <div className="flex-center text-3xl px-4"> =</div>
                                    <PinInput
                                        readOnly
                                        size="xl"
                                        length={3}
                                        styles={{
                                            input: {
                                                fontSize: rem(32),
                                            },
                                        }}
                                        placeholder="_"
                                        type="number"
                                        value={value}
                                        onComplete={handleComplete}
                                    />
                                </div>
                            </Carousel.Slide>
                        )
                    })}
                </Carousel>
            </div>
            <Keyboard onChange={handleUpdateValue} onSubmit={handleSubmit} onCancel={handleCancel} />
        </div>
    ) : (
        <CalcResult data={dataSource} time={time} />
    )
}

export default Division
