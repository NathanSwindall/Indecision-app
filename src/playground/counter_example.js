console.log("The app is running")

//template = <p>This is my react app</p>


// challenge 
// only render the subtitle (and p tag) if subtitle exist - logical and operator
// render new p tag - if options.length > 0 "Here are your options" " No options"

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']
}

const appTemplate = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <h2>{app.subtitle}</h2>}
        { app.options.length > 0 ? <p> "Here are your options"</p> : <p>"No options"</p> }
    </div>
)

const template = React.createElement("h1", null, "This is the best app in the world");
const template2 = (
    <div>
        <h1>Nathan's Indecision App</h1>
        <p> This app will help make your life so much easier.</p>
        <p> You will finally be able to make the right decision because you can</p>
        <p> Put all the stuff you want to do in one app, and then it will decide for you</p>
        <ol>
            <li>Persian</li>
            <li>Fastai Course</li>
            <li>React Course</li>
            <li>Projects</li>
                <ul>
                    <li> Anime data exploration</li>
                    <li> Youtube comments with sentiment analysis</li>
                    <li> Web scrapping persian data</li>
                    <li> Combining React with Fast ai</li>
                    <li> google apps script app</li>
                </ul>
        </ol>
    </div>
)

const user = {
    name: "Mr. Nathan",
    age: 29,
    location: "Arkansas"
}
const template3 = (
    <div>
        <h1>{user.name ? user.name : "Anonymous" }</h1>
    </div>
)

const addone = () => console.log("add one")

const template4 = (
    <div>
        <button onClick = {addone}>+ 1</button>
    </div>
)


const appRoot = document.getElementById("app")

ReactDOM.render(template4, appRoot)
