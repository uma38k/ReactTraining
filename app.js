var root = ReactDOM.createRoot(document.getElementById('root'));
function Main(props) {
    console.log(props);
    return React.createElement(
        "div",
        null,
        React.createElement(
            "h3",
            null,
            "Name - ",
            props.fn,
            " ",
            props.ln
        ),
        React.createElement(
            "h3",
            null,
            "Message - ",
            props.msg
        )
    );
};

root.render(React.createElement(
    "div",
    null,
    React.createElement(Main, { msg: "Capgemini", fn: "Hello", ln: "World!!" }),
    React.createElement(
        "h1",
        null,
        "Hello World!"
    ),
    React.createElement(
        "h2",
        null,
        "Welcome to React!!"
    ),
    React.createElement(
        "h3",
        null,
        "Our First JSX!!"
    )
));