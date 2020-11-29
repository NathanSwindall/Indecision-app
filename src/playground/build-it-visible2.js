//babel src/build-it-visible2.js --out-file=public/scripts/app.js --presets=env,react --watch


class VisibleToggle extends React.Component {
    constructor (props){
        super(props)
        this.handlerToggleSwitch = this.handlerToggleSwitch.bind(this)
        this.state = {
            toggle : false
        }

    }

    handlerToggleSwitch () {
        this.setState( (prevState) => {
            console.log(prevState.toggle)
            return {
            toggle : !prevState.toggle
            }
        })
    }


    render () {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handlerToggleSwitch}>{this.state.toggle ? 'Hide details' : 'Show details'}</button>
                {this.state.toggle && <p>This is the secret text we were talking about, but it is hidden</p>}
            </div>
        )
    }
}



// Some boiler plate code

const appRoot = document.getElementById("app")

ReactDOM.render(<VisibleToggle />, appRoot)