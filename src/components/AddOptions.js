import React from 'react';


class AddOptions extends React.Component {
    state = {
        error: undefined
    }
    

    handleAddOptions = (e) => {
        e.preventDefault() //prevents the full page from refreshing
        
        let option = e.target.elements.option.value.trim()
        let error = this.props.handleAddOptions(option)

        this.setState(() => ({error}))


        if(!error){
            e.target.elements.option.value = ""
        }
      
    }//
    render() {
        return (
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.handleAddOptions}>
                    <input className="add-option__input" type='text'  name= 'option'></input>
                    <button className="button">Add Option</button>
                </form>
            </div>
        )
    }
}

export default AddOptions
