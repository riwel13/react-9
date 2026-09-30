import { Component } from "react"
import css from './Choice.module.css';

class Choice extends Component {
 render() {
    return(<h2 className={css.h2}>{this.props.name || "no data"}</h2>)
 }
}


export default Choice