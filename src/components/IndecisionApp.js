import React from 'react';
import Action from './Action';
import AddOptions from './AddOptions';
import Header from './Header';
import Options from './Options';
import OptionModal from './OptionModal';



class IndecisionApp extends React.Component {
    
    
    state = {
        options : this.props.options,
        selectedOption : undefined
    }

    
    handleDeleteOptions = () => {
        this.setState(() => ({options : []}))
    }

    handleDeleteOption = (optionToBeRemoved) => {
        this.setState((prevState) => ({
            options : prevState.options.filter((option) => option !== optionToBeRemoved)
        }))
    }

    handleAddOptions = (option) => {
        if(!option) { // an empty string is false
            return "This is an empty string"
        }else if(this.state.options.indexOf(option) > -1) // if it is negative 1 it does not exist
        {
            return "This is already an option"
        }

        // If it gets here it will return null
        this.setState( (prevState) => ({options : prevState.options.concat(option)}))//This gives a new array back -> You never want to manipulate the previous state

    }

    handlePick = () => {
        let randomNum =  Math.floor(Math.random() * this.state.options.length)
        this.setState((prevState) => ({
            selectedOption: this.state.options[randomNum]
        }))

        console.log(this.state.selectedOption)
        //alert(this.state.options[randomNum] + " سلام٬ حاله شما چطوره؟ ")
    }

    handleClose = () => {
        this.setState(() => ({
            selectedOption: undefined
        }))
    }



    componentDidMount() {
        try {
        const json = localStorage.getItem('options')
        const options = JSON.parse(json)
        if(options){
            this.setState(() => ({options}))
        }

        console.log('fetching data')
        } catch (e) {

        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length) //this.state.options = is current 
        {
            const json = JSON.stringify(this.state.options)
            localStorage.setItem("options", json)
            console.log("saving data")
        }
    }
    componentWillUnmount() {
        console.log('componentWillUnmounts')
    }
    render() {
        // const title = "Indecision App"
        const subtitle = "Put your life in the hands of a machine"

        return (
            <div>
                <Header  subtitle={subtitle} />
                <div className="container">
                    <Action hasOptions = {this.state.options.length > 0}
                            handlePick = {this.handlePick}
                    />
                    <Options options={this.state.options}
                            handleDeleteOptions = {this.handleDeleteOptions}
                            handleDeleteOption = {this.handleDeleteOption}
                            />
                    <AddOptions 
                            handleAddOptions = {this.handleAddOptions}
                            
                    />
                </div>
                <OptionModal selectedOption={this.state.selectedOption}
                             handleClose={this.handleClose}/>
            </div>
        )
    }
}

IndecisionApp.defaultProps = {
    options : []
}

export default IndecisionApp