import Sticker from "../Sticker/Sticker";
import { Component } from "react";
import css from './StickerList.module.css';

class StickerList extends Component {
  render() {
    const{data, onName}=this.props
    return (
      <ul className={css.containerS}>
        {data.map((item) => {
          return <Sticker url={item.img} label={item.label} onName={onName}/>;
        })}
      </ul>
    );
  }
}

export default StickerList;
