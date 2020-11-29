// visiblityToggle - render, constructor, handletoggleVisibility
// visibility -> false


let visibility = false;

const toggleVisibility = () => {
    visibility = !visibility;
    render();
}


const render = () => {
    const jsx = (
        <div>
            <h1>visibility Toggle</h1>
            <button onClick={toggleVisibility}>
            {visibility ? 'Hide details' : 'Show details'}
            </button>
            {visibility && (
                <div>
                    <p>He, These are some details you cna now see!</p>
                </div>
            )}
        </div>
    )

    ReactDOM.render(jsx, document.getElementById("app"))
}

render()

