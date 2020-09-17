function Person(props) {
    return (
        <div className="person">
            <h1>{props.name}</h1>
            <p>Age: {props.age}</p>
        </div>
    );
}
var app = (
    <div>
        <Person name="Max" age="25" />
    </div>
)

// renders js 'person' function
// function being rendered into targeted id
ReactDOM.render(app, document.querySelector('#app'))
ReactDOM.render(<Person name="Ben" age="24"/>, document.querySelector('#p1'))
