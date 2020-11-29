//babel src/playground/counter-example --out-file=public/scripts/app.js --presets=env,react --watch


class Counter extends React.Component {

    constructor(props) { // You must have props and super(props) in order to have have access to everything.
        super(props) // Need to call in order not to break things!
        this.handleAddOne = this.handleAddOne.bind(this)
        this.handleMinusOne = this.handleMinusOne.bind(this)
        this.handleReset = this.handleReset.bind(this)
        this.handleStrange = this.handleStrange.bind(this)
        this.state = {
            count : props.count
        }
      
      


    }

    // Setup storage
    componentDidUpdate(prevProps,prevState) {
        if(prevState.count !== this.state.count){
            localStorage.setItem('count',this.state.count)
            console.log("saving")
        }
        
    }

    componentDidMount() {
        const num_string = localStorage.getItem('count')
        const num = parseInt(num_string,10)
        console.log(num)

        if(!isNaN(num)){
            this.setState(()=> ({count : num})) // This needs to be setState because if it is not it will not save. Strange
        }
    }

    handleAddOne(){
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        })
    }

    handleStrange(){
        this.setState((myState) => {
            console.log("in Strange")
            return {
                count: myState.count + 1,
            }
        })
        
    }

    handleMinusOne(){
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        })
        console.log("handleMinusOne")
    }

    handleReset() {
        this.setState((prevState) => {
            return {
                count: 0
            }
        })
        
        console.log("handleReset")
    }

    render()
    {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick = {this.handleAddOne}>+1</button>
                <button onClick = {this.handleMinusOne}>-1</button>
                <button onClick = {this.handleReset}>reset</button>
                <button onClick = {this.handleStrange}>strange</button>
            </div>
        )
    }
}

Counter.defaultProps = {
    count: 0
}


// Create three methods: hadnleAddOne, hadnleMinutesOne, handleReset
// Use console.log to print method name
// Wire up onClick & bind in the constructor

const appRoot = document.getElementById("app")

ReactDOM.render(<Counter count={60}/>, appRoot)