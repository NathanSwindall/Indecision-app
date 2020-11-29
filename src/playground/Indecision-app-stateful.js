//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            options :  ["one thingsdfdfdfdfd", "Two things", "Three things"]
        }

        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOptions = this.handleAddOptions.bind(this)
    }


    handleDeleteOptions () {
        this.setState((prevState) => {
            return {
                options : []
            }
        })
    }

    handleAddOptions (option) {
        if(!option) { // an empty string is false
            return "This is an empty string"
        }else if(this.state.options.indexOf(option) > -1) // if it is negative 1 it does not exist
        {
            return "This is already an option"
        }


        this.setState( (prevState) => {
            return {
                options : prevState.options.concat(option) //This gives a new array back -> You never want to manipulate the previous state
            }

        })
    }

    handlePick () {
        let randomNum =  Math.floor(Math.random() * this.state.options.length)
        alert(this.state.options[randomNum] + " سلام٬ حاله شما چطوره؟ ")
    }

    render() {
        const title = "Indecision App"
        const subtitle = "Put your life in the hands of a machine"

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action hasOptions = {this.state.options.length > 0}
                        handlePick = {this.handlePick}
                />
                <Options options={this.state.options}
                         handleDeleteOptions = {this.handleDeleteOptions}/>
                <AddOptions 
                        handleAddOptions = {this.handleAddOptions}
                />
            </div>
        )
    }
}




class Header extends React.Component {
    render() {
        console.log(this.props.subtitle)
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
                <h2></h2>
                <h2>Put your life in the hands of Machine. من جیلی جوبم</h2>
            </div>
        )
    }
}


class Action extends React.Component {

    render() {
        return (
            <div>
                <button 
                onClick={this.props.handlePick}
                disabled = {!this.props.hasOptions}
                >فشار دادن</button>
            </div>
        )
    }
}



class Options extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions}>remove All</button>
                {this.props.options.map((option) => <Option key={option} optiontext = {option}/>)}
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                {this.props.optiontext}
            </div>
        )
    }
}

class AddOptions extends React.Component {
    constructor (props) {
        super(props)
        this.handleAddOptions = this.handleAddOptions.bind(this)
        this.state = {
            error: undefined
        }

    }

    handleAddOptions(e) {
        e.preventDefault() //prevents the full page from refreshing
  
        let option = e.target.elements.option.value.trim()
        let error = this.props.handleAddOptions(option)

        this.setState(() => {
            return {
                error
            }
        })
        
      
    }//
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOptions}>
                    <input type='text'  name= 'option'></input>
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}

const appRoot = document.getElementById('app')



const jsx = (
    <div>
    <Header />
    <Action />
    <Options />
    </div>
)




ReactDOM.render(<IndecisionApp />,appRoot)