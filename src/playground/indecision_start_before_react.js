console.log("app is working")
//Create the data to be put into template
const app = {
    'title' : "Indecision App",
    'subtitle' : "Put your life in the hands of a computer",
    options: []
}


const onFormSubmit = (e) => {
    e.preventDefault() // This keeps the page from reloading with the &option= thing

    const option = e.target.elements.option.value

    if (option){
        app.options.push(option)
        e.target.elements.option.value = '';
        render()
    }
   
}

const onRemove = (e) => {
    // The function must not have the () when in the {}
    app.options = []
    render()
}


const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length)
    const option = app.options[randomNum]
    alert(option)
}



const appRoot = document.getElementById("app")

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are you options' : 'No options'}</p>
            <button onClick={onRemove}>RemoveAll</button> 
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button> 
            <ol>
            {/* map over app.options getting back an array of lis (set key and text) */}
            {app.options.map( (item) => {
                return <li key={item}>{item}</li>
            })}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type='text'  name= 'option'></input>
                <button>Add Option</button>
            </form>
        </div>
    )
    ReactDOM.render(template,appRoot)
}


render()



// create render function that renders the new jsx
// call it right away
// Call it after options array added to


//cha
