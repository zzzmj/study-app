'use client'

import { Text, Progress, Card } from '@mantine/core'
import { Sketch } from '../Sketch'
import { useState } from 'react'
import { IconEdit } from '@tabler/icons-react'

const CalcProgress = ({ value = 0, total = 10 }) => {
    const [sketchVisible, setSketchVisible] = useState(false)


    const p = (value / total) * 100
    return (
        <div className='p-4'>
            <div className='flex justify-between'>
                <Text fz="lg" fw={500}>
                    {value} / {total}
                </Text>

                <IconEdit onClick={() => setSketchVisible(true)} />
            </div>
            <Progress value={p} mt="md" size="xl" radius="xl" />

            {sketchVisible && <Sketch onClose={() => setSketchVisible(false)} />}
        </div>
    )
}

export default CalcProgress
