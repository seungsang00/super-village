import React from 'react';

class ImageItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={this.props.className}>
        <img src={this.props.imageInfo.urls.thumb} />
      </div>
    );
  }
}

export default ImageItem;
