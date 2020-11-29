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
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOptions}>
                    <input type='text'  name= 'option'></input>
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}

export default AddOptions
