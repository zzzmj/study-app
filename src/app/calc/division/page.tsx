'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import classes from './Page.module.css'
import getCalcData from '@/utils/calcUtils'
import cn from '@/utils/cn'
import CalcProgress from '@/components/CalcProgress'
import { Divider, PinInput, Text } from '@mantine/core'
import { Carousel } from '@mantine/carousel'
import '@mantine/carousel/styles.css'
import Keyboard from '@/components/Keyboard'


const Division = () => {
    const [progress, setProgress] = useState<number>(0)
    const [dataSource, setDataSource] = useState<any[]>([])
    const emblaRef = useRef()


    useEffect(() => {
        setDataSource(getCalcData(1, 10))
    }, [])

    const handleComplete = () => {
        setProgress(p => p + 1)

        emblaRef.current.scrollNext()
    }

    const handleUpdateValue = (value) => {
        const newData =dataSource.map((item, index) => {
            if (index === progress) {
                return {
                    ...item,
                    value: (item.value ? item.value : '') + value
                }
            }
            return item
        })

        console.log('ggx', newData, value)
        setDataSource(newData)
    }

    const handleSubmit = () => {

    }

    if (dataSource.length <= 0) return 

    return (
        <div className={cn(classes.wrap, 'min-h-screen')}>
            <CalcProgress value={progress} />
            <Text className="mt-4 flex-center" c={'dimmed'} fz="lg" fw={500}>
                误差控制在3%以内
            </Text>

            <Carousel
                getEmblaApi={(embla) => emblaRef.current = embla}
                height={200}
                withIndicators={false}
                withControls={false}
                draggable={false}
                align="start"
                className={'mo-wrap carousel mt-4 w-full h-full !overflow-y-scroll'}
            >
                {
                    dataSource.map((item, index) => {
                        const { formula, data, value, formatAnswer, errorAnalysis } = item
                        return (
                            <Carousel.Slide key={item.id} >
                                <div className='flex-center'>
                                    <div>
                                        <div className="text-3xl">{data[0]}</div>
                                        <Divider my="sm" color="#333" />
                                        <div className="text-3xl">{data[1]}</div>
                                    </div>
                                    <div className="flex-center text-3xl px-4"> =</div>
                                    <PinInput readOnly size="md" length={3} placeholder="" type="number" value={value} onComplete={handleComplete} />
                                </div>
                            </Carousel.Slide>
                        )
                    })
                }
            </Carousel>

            <Keyboard 
                onChange={handleUpdateValue} 
                onSubmit={handleSubmit} 
            />
        </div>
    )
}

export default Division
