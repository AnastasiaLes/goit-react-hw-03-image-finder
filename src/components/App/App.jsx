import React from 'react';
import { Searchbar } from '../Searchbar/Searchbar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { ToastContainer } from 'react-toastify';
// import {ImageGallery } from '../ImageGallery/ImageGallery'
// import { LoadMoreButton } from 'components/Button/Button';
// const URL = 'https://pixabay.com/api/?key=25256496-da285e9dc7351a7d44328e376&q=cat';

export class App extends React.Component {
  state = {
    page: 1,
    imageName: ''
  };
  
  handleFormSubmit = imageName => {
    this.setState({imageName})
  }

  

  // handleButton = (event) => {
  //   event.preventDefault();
  //   this.setState(prevState => { return {page: prevState.page + 1 }},)
  //   console.log('Click!');
  //   this.props.onClick(this.state.page);
  // }

    render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery
          // page={this.state.page}
          imageName={this.state.imageName}/>
        {/* <ImageGallery
           /> */}
        {/* <LoadMoreButton onClick={this.handleLoadMore}/> */}
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}
