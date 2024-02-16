// parent class
class Shapes {
    constructor() { }
    // setting color
    setColor(color) {
        this.color = color;
    }
    render() {
        return '';
    }
}
// child class
class Circle extends Shapes {
    render() {
        return '<circle cx="150" cy="100" r="80" fill="' + this.color + '" />';
    }
}

class Triangle extends Shapes {
    render() {
        return '<polygon points="150, 18 244, 182 56, 182" fill="' + this.color + '" />';
    }
}

class Square extends Shapes {
    render() {
        return '<rect x="90" y="40" width="120" height="120" fill="' + this.color + '" />';
    }
}
// exporting
module.exports = { Circle, Triangle, Square, Shapes };