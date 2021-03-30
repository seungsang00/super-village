import React from 'react';
import style from './style/app.module.scss';
import SearchHeader from './components/SeachHeader';
import ImageViewer from './components/ImageViewer';
import unsplashApi from './util/UnsplashApi';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      images: [],
      searchKeyword: '',
      error: null,
    };

    this.handleSearchKeyword = this.handleSearchKeyword.bind(this);
    this.handleSearchImage = this.handleSearchImage.bind(this);
  }

  componentDidMount() {
    this.loadRandomImages('doggy');
  }

  async loadRandomImages(keyword, count = 30) {
    try {
      let { data: images } = await unsplashApi.getRandomImages(count, keyword);
      this.setState({ images, searchKeyword: '' });
    } catch (error) {
      console.error(error);
    } finally {
      this.setState({ isLoading: true });
    }
  }

  async searchImageBykeyword(keyword, page, per_page) {
    this.setState({ isLoading: false });

    try {
      let {
        data: { results: images },
      } = await unsplashApi.getSearchImages(keyword, page, per_page);
      this.setState({ images, searchKeyword: '' });
    } catch (error) {
      console.error(error);
    } finally {
      this.setState({ isLoading: true });
    }
  }

  handleSearchKeyword(event) {
    this.setState({
      searchKeyword: event.target.value,
    });
  }

  handleSearchImage(event) {
    const { key } = event;
    const { searchKeyword } = this.state;

    if (key === 'Enter' && searchKeyword.length > 0) {
      this.searchImageBykeyword(searchKeyword, 1, 20);
    } else if (key === 'Escape') {
      this.setState({ searchKeyword: '' });
    }
  }

  render() {
    const { images, searchKeyword } = this.state;
    return (
      <div className={style.appBody}>
        <SearchHeader
          searchKeyword={searchKeyword}
          handleSearchKeyword={this.handleSearchKeyword}
          handleSearchImage={this.handleSearchImage}
        />
        <ImageViewer images={images} />
      </div>
    );
  }
}

export default App;
