import React from 'react';

class ImageItem extends React.Component {

  render() {
    return (
      <div className={this.props.className}>
        <img src={this.props.imageInfo.urls.thumb} alt="imgThumbnail" />
      </div>
    );
  }
}

export default ImageItem;
