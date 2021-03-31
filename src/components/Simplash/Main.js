import React from 'react';
import style from './style/app.module.scss';
import SearchHeader from './SeachHeader';
import ImageViewer from './ImageViewer';
import unsplashApi from '../../utils/UnsplashApi'

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


/* index.html 스타일
const body = document.querySelector('body');
body.style.padding = 0;
body.style.margin = 0;
body.style.width = '100vw';
body.style.height = '100vh';

const root = document.getElementById('root');
root.style.width = '100%';
root.style.height = '100%';
 */