// your ImageSlider code here!

import React from 'react'

class ImageSlider extends React.Component {
    constructor(props){
        super()
        this.state = {
            currentSlideIndex: 0
        }

    }

    render() {
        let string = `I am on slide ${this.state.currentSlideIndex}`
        return (
            string
        )
    }
}

export default ImageSlider