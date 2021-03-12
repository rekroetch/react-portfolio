import "./style.css";

function Jumbotron(props) {
    return <main className="jumbotron" style={{background:"#c1d3c6"}}>{props.children}</main>;
  }
  
  export default Jumbotron;