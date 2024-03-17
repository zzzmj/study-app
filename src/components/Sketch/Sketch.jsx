
// 画板库
'use client'

import React, { useEffect, useRef } from 'react'
import GuaFabric from './GuaFabric'
import { IconArrowBackUp, IconArrowForwardUp, IconX, IconTrashX } from '@tabler/icons-react'
import classes from './Sketch.module.css'
import { useForceUpdate } from '@mantine/hooks'

export function Sketch(props) {
    const canvasRef = useRef(null)
    const fabricObj = useRef(null)
    const forceUpdate = useForceUpdate();

    useEffect(() => {
        const f = new GuaFabric(canvasRef.current)
        fabricObj.current = f

        return () => {
            console.log('fabricObj.current', fabricObj.current)
            fabricObj.current.canvas.dispose()
        }
    }, [])

    const handleClear = () => {
        const f = fabricObj.current
        f.clear()
    }

    const handleClose = () => {
        props.onClose && props.onClose()
    }
    const handleUndo = () => {
        const f = fabricObj.current
        f.undo()
    }
    const handleRedo = () => {
        const f = fabricObj.current
        f.redo()
    }

    return (
        <div className={classes['mj-sketch']}>
            <div className={classes['control-panel']}>
                <IconX
                    onClick={handleClose}
                    className='flex-1'
                    style={{
                        color: '#fff',
                        fontSize: 24,
                    }}
                />
                <IconArrowBackUp
                    onClick={handleUndo}
                    className='flex-1'
                    style={{
                        color: '#fff',
                        fontSize: 24,
                    }}
                />
                <IconArrowForwardUp
                    onClick={handleRedo}
                    className='flex-1'
                    style={{
                        color: '#fff',
                        fontSize: 24,
                    }}
                />
                <IconTrashX
                    onClick={handleClear}
                    className='flex-1'
                    style={{
                        color: '#fff',
                        fontSize: 24,
                    }}
                />
            </div>
            <canvas ref={canvasRef}></canvas>
        </div>
    )
}
