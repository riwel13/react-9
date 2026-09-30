import { Component } from "react";
import css from './Sticker.module.css';

class Sticker extends Component {
  render() {
    return (
      <li className={css.sticker} key={this.props.url}>
        <img src={this.props.url} alt={this.props.label} onClick={() => this.props.onName(this.props.label)}/>
      </li>
    );
  }
}

export default Sticker;
