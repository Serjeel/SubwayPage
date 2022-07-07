class Counter {
    counter;

    constructor(counter = 0) {
this.counter = counter
    }

    render() {
        return `
        <div>${this.counter}</div>
        onCLick = this,ciunter++;
        `
    }



}
