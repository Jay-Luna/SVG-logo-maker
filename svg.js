// SVG with properties and functions
class SVG {
    constructor() { 
        this.shape = '';
        this.svgText = '';
    }
    setShape(shape) {
        this.shape = shape.render();
    }
    // setting the length of text to no more than 3 characters
    setText(text, color) {
        if(text.length > 3){
            throw new Error("Text must not exceed 3 characters.");
        }
        this.svgText = '<text x="150" y="125" font-size="60" text-anchor="middle" fill="' 
        + color + '">' + text + '</text>';
    }

    render() {
        return '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">' 
        + this.shape + this.svgText + '</svg>';
    }
}

module.exports = { SVG };