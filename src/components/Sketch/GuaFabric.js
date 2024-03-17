// import * as fabric from 'fabric'
'use client'
import { Canvas, PencilBrush } from 'fabric'
import HistoryFeature from './history'

class GuaFabric {
    constructor(canvasDom) {
        const canvas = new Canvas(canvasDom, {
            isDrawingMode: true,
            width: document.body.clientWidth,
            height: document.body.clientHeight,
        })

        this.canvas = canvas
        this.history = new HistoryFeature(canvas)
        this.setupBrush()

        // this.state = []
        // this.mods = 0
        // this.canvas.on('object:added', () => {
        //     this.updateCanvasState()
        // })
    }

    setupBrush() {
        const pb = new PencilBrush(this.canvas)
        pb.width = 4
        pb.color = '#ff4d4f'
        this.canvas.freeDrawingBrush = pb
    }

    updateCanvasState() {
        // if (this.mods < this.state.length) {
        //     this.state = this.state.slice(0, this.mods + 1)
        // }
        this.state.push(this.canvas.toDatalessJSON())
        this.mods++
    }

    undo() {
        this.history.undo()
    }

    redo() {
        this.history.redo()
    }

    clear() {
        this.history.clearHistory()
        this.canvas.clear()
    }
}

export default GuaFabric
