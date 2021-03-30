import React from 'react';
import style from '../style/searchHeader.module.scss';

class SearchHeader extends React.Component {

  render() {
    return (
      <section className={style.headerBody}>
        <article className={style.headerTitle}>
          <h2>SIMPLASH</h2>
          <p>
            The internet’s source of <strong>freely-usable images.</strong>
          </p>
          <p>
            Powered by{' '}
            <a href="https://unsplash.com" rel="noreferrer" target="_blank">
              Unsplah API
            </a>
          </p>
        </article>
        <article className={style.headerSearchBar}>
          <input
            type="text"
            value={this.props.searchKeyword}
            placeholder="Search photos"
            onChange={this.props.handleSearchKeyword}
            onKeyDown={this.props.handleSearchImage}
          />
        </article>
      </section>
    );
  }
}

export default SearchHeader;
