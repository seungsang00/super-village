import React from 'react';
import style from '../style/ImageViewer.module.scss';
import ImageItem from './ImageItem';

class ImageViewer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className={style.viewer}>
        {this.props.images.length > 0 &&
          this.props.images.map((image) => {
            return <ImageItem className={style.viewItem} imageInfo={image} />;
          })}
        {this.props.images.length === 0 && <div>Not found images :(</div>}
      </section>
    );
  }
}

export default ImageViewer;
