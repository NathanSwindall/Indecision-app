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
        this.states = 0
      


    }

    handleAddOne(){
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        })
        console.log("handleAddOne")
    }

    handleStrange(){
        this.setState((myState) => {
            console.log("in Strange")
            return {
                count: myState.count + 1,
            }
        })
        this.setOther(()=> {
            return {
                
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