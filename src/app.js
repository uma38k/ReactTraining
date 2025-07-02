var root = ReactDOM.createRoot(document.getElementById('root'));
function Main(props) {
    console.log(props)
    return(<div>
        <h3>{props.msg}</h3>
        <h3>{props.fn} {props.ln}</h3>
      </div>)
  };

root.render(<div>
    <Main msg="Welcome!!" fn="Dan" ln="Brown" />
    <h1>Hello World!</h1>
    <h2>Welcome to React!!</h2>
    <h3>Our First JSX!!</h3>
</div>);