function Person(props) {
    return (
        <div className="person">
            <h1>props.name</h1>
            <p>Age: unknown</p>
        </div>
    );
}
// renders js 'person' function
// function being rendered into targeted id
ReactDOM.render(<person name="Max" age="25"/>, document.querySelector('#p1'))